# Arsip lowongan OSCAR

Halaman statis: **https://oscar-sinaga.github.io/website/jobs/**.

`index.html` mengadaptasi UI `data/job-listings/tools/viewer.html` dari repo publik
`oscar-sinaga/job-ai-automaton` (ref awal `eb4fd94`). HTML website tidak menyalin data
lowongan. Browser mengambil sumber kanonis berikut saat halaman dibuka atau
**Muat ulang data** ditekan:

https://raw.githubusercontent.com/oscar-sinaga/job-ai-automaton/main/data/job-listings/all-jobs.json

Pembaruan otomatis pada JSON tersebut tampil setelah halaman dimuat ulang; tidak
perlu commit ulang website. Fetch menggunakan CORS, `credentials: omit`,
`cache: no-store`, dan parameter waktu untuk menghindari salinan cache sebelumnya.
Internet diperlukan saat memuat data. Setelah itu filter/detail berjalan lokal
di browser. Tidak ada polling atau cache data offline. Riwayat dan status
lowongan mengikuti data sumber, termasuk pengecualian dan konflik status.

Halaman memeriksa skema 1/2 dan struktur inti sebelum menampilkan data. Gangguan
jaringan, HTTP gagal, JSON/skema tidak valid dan timeout 20 detik menampilkan
pesan kegagalan beserta tombol coba ulang. Filter dinonaktifkan sampai data siap;
data kosong yang valid menampilkan kondisi hasil kosong. Teks dirender melalui
`textContent`; tautan sumber hanya menerima HTTP(S) dan memakai
`noopener noreferrer`. Tidak ada token/kredensial dalam halaman.

Excel, JSON dan panduan mengarah ke sumber publik, tanpa file pendamping lokal.
File root dan direktori website lain tidak diubah. Tidak ada perubahan pengaturan
hosting, izin atau otomasi sumber.

## Menjalankan lokal

Dari root repo, jalankan `python -m http.server 8000` lalu buka
`http://localhost:8000/jobs/`. Tidak ada build atau server aplikasi. Produksi memakai
GitHub Pages yang sudah ada, dari branch `main`.

## Verifikasi

Node.js, Playwright dan Chromium diperlukan. Gunakan instalasi Playwright yang
sudah ada atau instal di luar repo:

```sh
npm install --no-save --prefix /tmp/jobs-browser playwright
NODE_PATH=/tmp/jobs-browser/node_modules node jobs/verify.cjs
git diff --check
```

`CHROMIUM_PATH` dapat mengganti default `/usr/bin/chromium`. Klien request pengujian
mengikuti `HTTPS_PROXY` bila disediakan dan memverifikasi TLS; lingkungan proxy
mungkin perlu `NODE_EXTRA_CA_CERTS` yang disediakan pengelola lingkungan.
Pengujian tidak mengubah sumber data. Fixture dibuat saat berjalan dari JSON publik.

Hasil sesi 5 November 2026: 11 kelompok pemeriksaan lulus, 36 identitas
(31 pernah masuk daftar + 5 hanya dikecualikan), tanpa error JavaScript browser.
Cakupan: semua jenis filter, kombinasi pencarian/filter, tanggal pengamatan WIB,
rentang tanggal tidak valid, reset, empat urutan sortir, seluruh detail, hash
langsung, tampilan 390px dan 1440px, hasil kosong, kegagalan jaringan/HTTP/JSON/
skema/ID duplikat/timeout, retry, rendering teks berbahaya, penolakan URL non-HTTP(S),
dan penambahan record saat reload. JSON mengembalikan HTTP 200 dan
`Access-Control-Allow-Origin: *` tanpa autentikasi.

Batasan lingkungan verifikasi: fetch langsung dari Chromium menolak CA proxy
terkelola (`ERR_CERT_AUTHORITY_INVALID`). Respons publik asli diambil dengan
klien request Playwright yang memverifikasi TLS, lalu diteruskan ke halaman
Chromium untuk uji rendering; kasus lainnya memakai fixture terkontrol melalui
intersepsi request. Tidak ada verifikasi TLS atau pengaturan keamanan website yang
dinonaktifkan. Jadi jalur jaringan browser publik produksi belum teruji penuh.
Akses HTTPS langsung dari lingkungan ini ke `oscar-sinaga.github.io` ditolak oleh
kebijakan proxy (CONNECT 403); deployment diperiksa melalui workflow GitHub.

Skrip menyimpan laporan ke `/tmp/jobs-test-results.json` dan screenshot ke
`/tmp/jobs-mobile.png` serta `/tmp/jobs-desktop.png`.
