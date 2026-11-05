/** npm install --no-save --prefix /tmp/jobs-browser playwright
 * NODE_PATH=/tmp/jobs-browser/node_modules node jobs/verify.cjs
 * Chromium must be installed; override CHROMIUM_PATH if necessary.
 * UI fixtures are derived at test time from the public canonical JSON.
 * No job data is committed to this website.
 */
const assert = require('node:assert/strict');
const fs = require('node:fs');
const http = require('node:http');
const path = require('node:path');
const { chromium, request } = require('playwright');
const source = 'https://raw.githubusercontent.com/oscar-sinaga/job-ai-automaton/main/data/job-listings/all-jobs.json';
const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const checks = [];
const check = message => { checks.push(message); console.log(`PASS ${message}`); };
(async () => {
  const client = await request.newContext({ proxy: process.env.HTTPS_PROXY ? { server: process.env.HTTPS_PROXY } : undefined });
  const live = await client.get(source, { headers: { Origin: 'https://oscar-sinaga.github.io' } });
  assert.equal(live.status(), 200);
  assert.equal(live.headers()['access-control-allow-origin'], '*');
  const data = await live.json();
  assert.equal(data.jobs.length, data.counts.jobs);
  check(`Anonymous canonical JSON and CORS: ${data.jobs.length} jobs (TLS verified by Playwright request client)`);
  const server = http.createServer((req, res) => { res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); res.end(html); });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const url = `http://127.0.0.1:${server.address().port}/jobs/`;
  const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext();
  const page = await context.newPage();
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  let mode = 'fixture', payload = data;
  const requests = [];
  await page.route(`${source}*`, async route => {
    requests.push(route.request());
    if (mode === 'live') return route.fulfill({ response: await client.get(route.request().url()) });
    if (mode === 'network') return route.abort('failed');
    if (mode === 'http') return route.fulfill({ status: 503, body: 'Unavailable' });
    if (mode === 'json') return route.fulfill({ status: 200, body: '{broken' });
    if (mode === 'timeout') return; // Leave pending until AbortController cancels it.
    return route.fulfill({ status: 200, contentType: 'text/plain', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify(payload) });
  });
  async function ready() { await page.waitForFunction(() => !document.querySelector('#reload').disabled); }
  async function count(n) { assert.equal(await page.locator('#results > .job').count(), n); }
  async function reset() { await page.locator('#reset').click(); }
  async function reload() { await page.locator('#reload').click(); await ready(); }
  try {
    await page.goto(url); await ready(); await count(data.jobs.length);
    assert.equal(await page.locator('#load-error').isVisible(), false);
    assert.equal(requests[0].headers().cookie, undefined);
    assert.equal(requests[0].headers().authorization, undefined);
    check('Local HTTP page renders canonical records without credentials');
    const fields = [['role','role_family'], ['employment','employment_type'], ['arrangement','work_arrangement'], ['source','source'], ['location','location'], ['feed','feed_state'], ['coverage',null]];
    for (const [id, key] of fields) {
      const option = await page.locator(`#${id} option`).nth(1).getAttribute('value');
      await page.locator(`#${id}`).selectOption(option);
      await count(data.jobs.filter(job => (key ? job[key] || '__unknown__' : job.description.completeness) === option).length);
      await reset();
    }
    check('Every categorical filter matches canonical data, including unknown values');
    await page.locator('#role').selectOption('data_engineer');
    await page.locator('#source').selectOption('jobstreet');
    await page.locator('#search').fill('data');
    await count(data.jobs.filter(j => j.role_family === 'data_engineer' && j.source === 'jobstreet' && JSON.stringify(j).toLocaleLowerCase('id').includes('data')).length);
    await reset();
    const date = data.jobs[0].observation_dates_wib[0];
    await page.locator('#date-from').fill(date); await page.locator('#date-to').fill(date);
    await count(data.jobs.filter(j => j.observation_dates_wib.includes(date)).length);
    await page.locator('#date-from').fill('2099-01-01'); await count(0);
    assert.equal(await page.locator('#date-error').isVisible(), true);
    await reset(); await page.locator('#search').fill('no-job-matches-xyz-123'); await count(0);
    assert.equal(await page.locator('#empty').isVisible(), true);
    await reset(); await count(data.jobs.length);
    check('Combined search, exact observation dates, invalid date range, empty results, reset');
    for (const sort of ['title','company','date-asc','date-desc']) {
      await page.locator('#sort').selectOption(sort);
      const expected = [...data.jobs].sort((a,b) => sort === 'title' ? a.title.localeCompare(b.title) : sort === 'company' ? (a.company || '').localeCompare(b.company || '') : sort === 'date-asc' ? a.last_seen_wib.localeCompare(b.last_seen_wib) || a.id.localeCompare(b.id) : b.last_seen_wib.localeCompare(a.last_seen_wib) || a.id.localeCompare(b.id));
      assert.deepEqual(await page.locator('#results > .job').evaluateAll(els => els.map(el => el.dataset.jobId)), expected.map(j => j.id));
    }
    for (const job of data.jobs) {
      await page.locator(`#${job.details_anchor}`).evaluate(el => { el.open = true; });
      await page.waitForFunction(id => document.getElementById(id).querySelector('.detail').childElementCount > 0, job.details_anchor);
    }
    await page.goto(`${url}#${data.jobs[0].details_anchor}`); await ready();
    assert.equal(await page.locator(`#${data.jobs[0].details_anchor}`).getAttribute('open'), '');
    check('All sort orders, all record details, and direct detail hash');
    await page.setViewportSize({width:390,height:844});
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
    await page.evaluate(() => scrollTo(0,0));
    await page.screenshot({path: '/tmp/jobs-mobile.png', fullPage: false});
    await page.setViewportSize({width:1440,height:1000});
    await page.goto(url); await ready();
    await page.screenshot({path: '/tmp/jobs-desktop.png', fullPage: false});
    check('Mobile layout has no horizontal overflow; desktop/mobile screenshots saved');
    for (const failure of ['network','http','json','schema','duplicate','timeout']) {
      mode = failure;
      payload = failure === 'duplicate' ? {...data, jobs:[data.jobs[0],data.jobs[0]], counts:{...data.counts,jobs:2}} : {schema_version:99};
      await page.locator('#reload').click();
      if (failure === 'timeout') { await page.clock.install(); await page.clock.fastForward(21000); }
      await ready();
      assert.equal(await page.locator('#load-error').isVisible(), true, failure);
      await count(0);
      assert.equal(await page.locator('#filters').evaluate(el => el.inert), true);
      mode='fixture'; payload=data; await reload(); await count(data.jobs.length);
    }
    check('Network, HTTP 503, malformed JSON, invalid schema, duplicate ID, timeout: error + retry recovery');
    payload = {...data, jobs:[], counts:{jobs:0, recorded_listings:0, excluded_only:0, observations:0, runs:0}};
    await reload(); await count(0);
    assert.equal(await page.locator('#load-error').isVisible(), false);
    assert.equal(await page.locator('#empty').isVisible(), true);
    check('Valid empty dataset is distinguished from a loading failure');
    payload = structuredClone(data);
    const job = payload.jobs[0];
    job.title = '<img src=x onerror="window.injected=1">';
    job.company = '</script><script>window.injected=1</script>';
    job.description.sections = [{heading:'Unsafe link fixture',text:'<svg onload="window.injected=1">',source_url:'javascript:window.injected=1'}];
    job.source_links = [{field:'unsafe',url:'data:text/html,<script>alert(1)</script>'},{field:'safe',url:'https://example.com/'}];
    await reload();
    await page.locator(`#${job.details_anchor} > summary`).click();
    await page.waitForFunction(id => document.getElementById(id).querySelector('.detail').childElementCount > 0, job.details_anchor);
    assert.equal(await page.locator(`#${job.details_anchor} img, #${job.details_anchor} script, #${job.details_anchor} svg`).count(), 0);
    assert.equal(await page.evaluate(() => window.injected), undefined);
    assert.equal(await page.locator('a[href^="javascript:"],a[href^="data:"]').count(), 0);
    assert.ok(await page.locator(`#${job.details_anchor}`).textContent().then(t=>t.includes('<img src=x')));
    assert.ok((await page.locator(`#${job.details_anchor} a`).first().getAttribute('rel')).includes('noopener'));
    check('HTML and script strings render literally; unsafe URL schemes rejected; external links isolated');
    payload = structuredClone(data);
    const fresh = structuredClone(data.jobs[0]); fresh.id='fixture:new';fresh.details_anchor='job-fixture-new';fresh.title='New automated run fixture';
    payload.jobs.push(fresh);payload.counts.jobs++;
    await reload(); await count(data.jobs.length+1);
    assert.ok(new Set(requests.map(r=>r.url())).size>1);
    check('Reload retrieves new records and uses a fresh request URL');
    mode='live'; await reload(); await count(data.jobs.length);
    check('Live public JSON response renders in Chromium via TLS-verifying request client bridge');
    assert.deepEqual(errors, []);
    fs.writeFileSync('/tmp/jobs-test-results.json', JSON.stringify({checks, pageErrors:errors, jobCount:data.jobs.length, liveBrowserNetworkLimitation:'Direct Chromium fetch rejects the managed proxy CA. Live response bridged via Playwright request client with TLS verification enabled; UI fixtures and local HTTP browser navigation are real.', screenshots:['/tmp/jobs-mobile.png','/tmp/jobs-desktop.png']}, null, 2)+'\n');
    console.log(`${checks.length} checks passed; no browser page errors.`);
  } finally {
    await context.close(); await browser.close(); await client.dispose(); await new Promise(resolve=>server.close(resolve));
  }
})().catch(error => { console.error(error); process.exitCode=1; });
