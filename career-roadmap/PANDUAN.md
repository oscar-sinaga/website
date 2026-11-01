# Panduan Lengkap Career Decision Lab

> Panduan versi 1 November 2026. [Buka aplikasi](https://oscar-sinaga.github.io/website/career-roadmap/) | [Panduan interaktif](https://oscar-sinaga.github.io/website/career-roadmap/panduan.html).  
> Sistem ini adalah alat bantu keputusan belajar; bukan prediksi peluang kerja, jaminan aman dari AI, atau sertifikasi keahlian.

## A. Model mental: untuk apa tiap menu?

| Menu | Pertanyaan | Kapan digunakan |
|---|---|---|
| Ringkasan | Apa lima prioritas terbesar, apa progresnya? | Awal minggu |
| Master Skill Map | Apa level sekarang, target dan gap per subskill? | Saat diagnosis dan evaluasi |
| Strategi 3–5 tahun | Ingin menjadi profesional seperti apa? | Kuartalan |
| Roadmap 12 bulan | Modul apa berurutan dan hasil nyatanya? | Mingguan/bulanan |
| Sprint 8–12 minggu | Apa yang dikerjakan mulai sekarang? | Setiap sesi/minggu |
| Analisis lowongan | Skill apa yang muncul pada posisi target? | 8–12 minggu |
| Riset & sumber | Bukti terbaru AI dan pasar kerja? | Saat ada update penting |
| Data & pengaturan | Kapan mulai, simpan atau pulihkan progres? | Awal dan setiap backup |

**Jangan menilai semua 260 subskill sebagai 260 kewajiban.** Peta memiliki 16 kelompok dan mencakup hal yang inti, berdekatan, opsional, serta domain yang tidak perlu sekarang. Roadmap operasional hanya memuat 52 modul mingguan. Strategi 3–5 tahun menambah arah, bukan mengalokasikan semua skill ke jadwal terpisah.

## B. Memulai pertama kali dalam 30–45 menit

1. **Menit 0–5:** pilih jalur utama (misalnya Hybrid Data + Agentic AI), negara yang dituju (misalnya Singapore), 8 jam belajar per minggu, English 15 menit sehari, fokus Seimbang, dan domain bisnis credit risk/lending. Pilihan ini tidak berarti sudah mendapat visa atau peluang pekerjaan.
2. **Menit 5–20:** buka Master Skill Map. Mulai dari filter 35 prioritas teratas dan nilai hanya 10–20 subskill yang benar-benar pernah dipraktikkan. Contoh: Python debugging, SQL JOIN, statistical inference, Airflow, Docker, FastAPI, agent tool calling, evaluation, English speaking.
3. **Menit 20–25:** tentukan target per skill. Biarkan “Ikuti jalur” untuk rekomendasi awal, atau pilih target D0–D4 secara manual. Target D0 berarti sengaja menunda, bukan mengaku tidak mampu.
4. **Menit 25–30:** baca strategi 3–5 tahun dan bukti yang perlu dihasilkan tiap kuartal. Jangan centang checkpoint tanpa bukti.
5. **Menit 30–40:** pilih sprint 8 atau 12 minggu, baca kartu minggu pertama dan rancang deliverable yang bisa diuji. Mulai satu tugas, bukan sepuluh kursus.
6. **Menit 40–45:** buka Data & Pengaturan, tekan Export JSON, simpan backup dengan aman.

Jalur utama boleh berubah setelah evaluasi pekerjaan nyata. Satu tahap diperdalam pada suatu waktu; materi lain bisa tetap dijaga dengan latihan ringan.

## C. Memahami kontrol di bagian atas

- **Jalur utama:** memilih profil target kedalaman dan mengubah urutan 12 fase pembelajaran. Tersedia Hybrid Data + Agentic AI, AI / Agent Engineer, Applied / Decision Data Scientist, Data / Analytics Engineer, ML / MLOps Engineer, dan Product Data Analyst / Analytics.
- **Negara tujuan:** saat ini terutama mengurutkan tautan pencarian pekerjaan. Belum menghitung bobot kebutuhan skill atau sponsor visa khusus negara.
- **Jam per minggu (4–16):** menetapkan anggaran kerja inti (maksimal 4 jam) dan waktu pendalaman tambahan. Angka ini belum otomatis mempersingkat 52 minggu.
- **English per hari (0–30 menit):** target kebiasaan tambahan, tidak otomatis menjadi latihan audio atau penguji kemampuan speaking.
- **Fokus prioritas:** Seimbang, Pasar kerja, Fondasi tahan lama, atau Business & job fit. Ini mengubah bobot skor, bukan perhitungan risiko masa depan.
- **Domain bisnis:** pilih satu domain jangkar (misalnya credit risk, collection, marketing, SaaS, F&B, marketplace, logistics, healthcare, insurance, atau B2B). Domain lain tetap tersimpan sebagai backlog.

## D. Master Skill Map: 260 subskill dan level D0–D4

Ada dua kolom berbeda pada setiap skill:

**Level sekarang** adalah bukti kemampuan diri. **Target kedalaman** adalah tujuan belajar. Keduanya tidak harus sama dan dapat berubah sesuai profesi target.

| Level | Arti praktik | Contoh |
|---|---|---|
| D0 | Belum belajar atau belum mampu | Belum pernah membuat tool calling |
| D1 | Kenal konsep dan kegunaannya | Tahu apa itu function calling |
| D2 | Bisa menjalankan kasus umum dengan bantuan dokumentasi/AI | Membuat agent demo yang memakai API |
| D3 | Mandiri menyelesaikan, men-debug, menguji dan menjelaskan kasus umum | Membuat agent dengan validasi input, failure tests dan evaluasi |
| D4 | Mendalam dalam trade-off, kasus sulit, kompleksitas dan failure mode | Menginvestigasi keamanan, reliabilitas dan evaluasi agent production |

**Contoh keputusan:**

- Sudah pernah deploy FastAPI tetapi belum dapat debugging Python mandiri: FastAPI deployment mungkin D2, Python debugging D1/D2. Jangan memaksakan satu level keseluruhan.
- Pernah membuat DAG Airflow: biasanya memiliki pengalaman lebih dari D0, tetapi kemampuan backfill, idempotency dan incident response harus dinilai terpisah.
- SQL JOIN current D3, target D3: cukup maintenance.
- AI tool calling current D1, target D3: investasi utama, gap dua tingkat.
- Kafka internals current D0, target D0: tunda secara sadar.

Jika ragu, biarkan status **Belum dinilai**. Aplikasi menggunakan asumsi sementara D1 hanya untuk menghitung gap, tetapi **tidak menyimpan D1 sebagai kemampuan lo**. Akibatnya, prioritas awal mungkin tampak terlalu tinggi sampai diagnosis dibuat.

**Cara menghindari kewalahan:** nilai 10–20 skill inti terlebih dahulu, tambah 5–10 skill per minggu bila berguna. Tidak perlu mengisi semua 260 dalam satu sesi.

## E. Bagaimana skor prioritas dihitung?

Skor 0–100 adalah **heuristik untuk urutan belajar**, bukan probabilitas diterima kerja, gaji, atau skill aman dari AI. Pada mode Seimbang, bobotnya:

| Komponen | Bobot |
|---|---:|
| Kedalaman target | 25% |
| Gap target dibanding kemampuan sekarang | 30% |
| Relevansi pasar menurut penilaian editorial kategori | 16% |
| Ketahanan konseptual | 15% |
| Transferabilitas | 9% |
| Sinyal keyword dari JD pribadi | 5% |

Level target dan gap dinormalisasi ke skala D0–D4. Tiga indikator editorial dinormalisasi ke skala 1–5. JD memakai jumlah sebutan keyword di sampel lowongan yang **lo pilih sendiri**, bukan database statistik lowongan lengkap.

Target D0 menghasilkan skor 0. Bila level sekarang sudah mencapai target, skor dikalikan 0,30 agar lebih cocok untuk maintenance. Misalnya target D3, current D1, seluruh indikator kategori 5/5 dan tanpa JD menghasilkan skor sekitar 74. Itu hanya berarti prioritas belajar relatif tinggi dalam asumsi tersebut.

**Penting:** parser JD hanya mengenali sejumlah pola keterampilan umum, bukan pemahaman semantik terhadap seluruh 260 subskill. Ia belum membedakan must-have, nice-to-have, senioritas, kalimat negasi atau sponsorship. Selalu baca sumber asli dan gunakan keputusan manual.

## F. Domain bisnis: satu jangkar, dasar yang portable

Business fundamentals yang dapat dipindahkan antarindustri: P&L, revenue, margin, cash flow, unit economics, customer economics, pricing, risk-return, decision making, product metrics dan stakeholder management.

Domain spesifik memiliki asumsi berbeda: credit risk membahas underwriting, PD/LGD/EAD dan risiko portofolio; marketing membahas CAC, conversion dan lift; SaaS membahas churn, retention dan usage pricing; F&B membahas food cost, waste dan forecasting. Belajar teori satu industri tidak sama dengan pengalaman industri lain.

**Rekomendasi:** pilih satu domain yang telah punya pengalaman nyata atau bukti lowongan kuat, jangan mendalami seluruh domain paralel. Domain tambahan dipelajari ketika jalur kerja atau proyek memerlukannya.

## G. Strategi 3–5 tahun

Pilih horizon tiga tahun sebagai inti, atau lima tahun untuk menampilkan opsi jangka panjang. Ada empat checkpoint tiap tahun.

- **Tahun 1:** fondasi portable dan bukti end-to-end data/AI.
- **Tahun 2:** pendalaman satu cluster utama, reliability, kontribusi publik dan dampak.
- **Tahun 3:** kalibrasi lowongan internasional, business decision ownership, interview dan transisi.
- **Tahun 4–5 (opsional):** sistem lintas tim, kepemimpinan, product/business ownership, konsultansi atau alternatif lainnya.

Setiap checkpoint memiliki teks sasaran, checkbox serta kolom catatan bukti/impact. **Checkpoint kuartalan tidak otomatis selesai karena beberapa minggu pembelajaran sudah dicentang.** Verifikasi secara manual dan tulis hasil yang bisa ditunjukkan.

## H. Roadmap 12 bulan / 52 minggu

Roadmap memiliki dua belas fase sekitar 4–5 minggu: Python/SQL; statistics; LLM/tools; RAG/security/evals; pipelines/Airflow/dbt; data quality/cloud; ML evaluation; causal inference; business economics; production AI/MLOps; international interview; capstone.

**Setiap kartu minggu** berisi Pelajari → Praktikkan → Bukti/acceptance → Opsional → sumber → checkbox → catatan. Tandai selesai **hanya setelah hasil diuji**, bukan setelah menonton video.

Mengubah jalur utama mengubah **urutan fase**, tetapi konten 52 modul masih sama. Jumlah jam mingguan mengubah porsi latihan inti/tambahan pada kartu, **bukan otomatis menyusun ulang semua durasi**. Jika 4 jam tidak cukup, lanjutkan tugas minggu berikut daripada mencentang palsu.

**Fast-track** akan menyembunyikan satu minggu bila *seluruh skill yang ditandai dalam modul tersebut* dinilai sudah memenuhi target. Ini adalah hasil self-assessment, bukan bukti formal modul selesai. Mematikan fast-track mengembalikan tampilan; progres selesai asli tidak terhapus.

## I. Sprint 8–12 minggu: pekerjaan sekarang

Sprint menampilkan 8, 10 atau 12 **modul pertama yang belum selesai** dari urutan roadmap. Ada anggaran jam, rentang tanggal, overlay skill gap, review dan riwayat rekalibrasi.

**Bukan** mesin AI yang otomatis menyusun kurikulum baru dari nol. Skills prioritas memberi petunjuk penekanan, sedangkan backlog sprint tetap mengikuti urutan fase/prasyarat 52 modul.

Contoh review akhir minggu:
- **Wins:** 10 soal SQL JOIN lulus, dua test Python baru, README diperbarui.
- **Blockers:** masih salah menghitung duplicate rows setelah JOIN.
- **Impact:** notebook dan pipeline dapat diulang, hasil metrik konsisten.
- **Next:** perdalam cardinality dan test; tunda belajar framework agent kedua.

Tekan **Rekalibrasi sprint** jika ingin mencatat ulang tanggal, jalur, prioritas yang berubah. Ini membuat catatan lokal, bukan otomatis mengubah source GitHub atau mengirim informasi ke agent ChatGPT.

## J. Analisis lowongan dan Market Pulse

Buka tautan LinkedIn, Jobstreet atau SEEK, lalu cek ketersediaan lowongan asli, senioritas, kebutuhan bahasa, dan eligibility visa/sponsorship. Cukup 10–20 lowongan awal yang **representatif untuk target pribadi**, bukan seluruh hasil pencarian.

Masukkan judul, perusahaan, negara, URL, dan deskripsi publik ke Analisis Lowongan. Sistem mendeteksi keyword tertentu untuk memberi sinyal tambahan. **Sinyal pribadi bukan survei pasar**. Baca sendiri perbedaan must-have dan nice-to-have, dan jangan masukkan data rahasia perusahaan.

**Market Pulse** menampilkan sumber publik bertanggal. Itu feed editorial, **bukan real-time scraping**. Radar Karier & GitHub mengecek bukti pasar dan perkembangan AI tiap Senin pagi WIB. Bila ada perubahan material dan alat GitHub tersedia, pembaruan publik dapat dilakukan; bila tidak ada perubahan penting, tidak ada keharusan commit. Perubahan besar/berisiko sebaiknya melalui PR untuk disetujui. Progres lokal tidak dibaca otomasi ini.

## K. Ritme 4, 8 atau 12 jam per minggu

Gunakan pendekatan kira-kira 25% teori, 55% praktik dan 20% testing + catatan:

| Anggaran mingguan | Teori | Praktik | Test/review |
|---:|---:|---:|---:|
| 4 jam | 1 jam | 2 jam 12 menit | 48 menit |
| 8 jam | 2 jam | 4 jam 24 menit | 1 jam 36 menit |
| 12 jam | 3 jam | 6 jam 36 menit | 2 jam 24 menit |

English 10–20 menit per hari sebaiknya di luar jam teknis bila memungkinkan. Latih speaking menjelaskan trade-off, bukan hanya menghafal kosakata.

Setiap minggu: rencanakan satu deliverable → praktikkan → cek acceptance → tulis bukti dan hambatan → centang bila valid. Setiap 8–12 minggu: cek pekerjaan target, skill gap, progress, dan keputusan untuk lanjut/pivot/tunda.

## L. Contoh alur dari pengalaman engineering yang sudah ada

Contoh **ilustratif**, bukan penilaian personal: seseorang pernah memakai Airflow, Docker dan FastAPI, ingin peluang global Data Scientist / AI Engineer, namun masih memakai AI untuk debugging Python dan belum mendalami statistik.

1. Pilih Hybrid Data + Agentic AI, Singapore, 8 jam, English 15 menit, credit risk.
2. Nilai Python debugging D1–D2, FastAPI D2, Airflow D2, Docker D2, SQL JOIN D2/D3, AI tools D1, inference D1–D2 **berdasarkan bukti tes sendiri**.
3. Targetkan Python debugging D3, SQL D3, agent tool-calling/evals D3, statistics D3. Kafka internals bisa target D0.
4. Jalankan sprint 8 minggu, buat repo uji Python/SQL, kemudian agent dengan tool read-only, 30 kasus eval, dan catatan failure.
5. Setelah delapan minggu, bandingkan JD AI Engineer dan DS yang relevan dengan senioritas dan izin kerja. Pilih pendalaman berikutnya berdasarkan bukti.
6. Dokumentasikan bukan hanya “agent jalan”, tapi evaluasi, keamanan, waktu respons, biaya dan keputusan bisnis yang terbantu.

## M. Backup, keamanan dan perangkat

Aplikasi bersifat **static GitHub Pages**. Kode sumber dan panduan ada di repository publik, tetapi ratings, notes, JD, milestone dan progress **disimpan di localStorage browser saat ini**, tidak otomatis tersimpan di GitHub maupun tersinkron antarperangkat.

- **Export JSON** membuat backup seluruh konfigurasi/progres. Simpan privat.
- **Import JSON** memulihkan backup, termasuk format lama yang didukung. Pastikan menggunakan file milik sendiri.
- **Reset** menghapus progres lokal; Export dulu.
- Browser/profil/perangkat/incognito berbeda mungkin tidak memiliki data yang sama.
- Jangan unggah backup pribadi atau data internal perusahaan ke repository publik.
- Otomasi riset mingguan **tidak** mengambil data localStorage pribadi lo.

## N. FAQ

**Apa semua 260 skill harus D3/D4?** Tidak. Banyak skill memang D0 atau D1 sesuai jalur, dan tidak harus dinilai sekarang.

**Mengapa skor belum dinilai tinggi?** Model sementara mengasumsikan D1 saat menghitung gap. Isi self-assessment nyata agar ranking lebih tepat.

**Mengapa negara tidak mengubah ranking skill?** Country control saat ini memprioritaskan tautan lowongan, belum menghitung demand yang valid per negara.

**Mengapa 4 jam dan 12 jam tetap 52 minggu?** Karena jam belum membuat rescheduling kalender otomatis; deadline harus disesuaikan secara realistis oleh pengguna.

**Mengapa sprint tidak mengambil 8 skill tertinggi?** Sprint mengambil modul pertama yang belum selesai; skill gap hanya overlay.

**Apakah Fast-track sama dengan Completed?** Tidak. Fast-track mengikuti rating; Completed harus memiliki bukti deliverable.

**Mengapa saya harus latihan Python bila bisa dibantu AI?** Agar mampu memahami, debugging, menguji, dan mempertanggungjawabkan output, termasuk saat interview tanpa AI.

**JD tidak terbaca semua skill?** Parser hanya berbasis regex skill tertentu. Baca persyaratan asli, lalu override target manual.

**Kenapa progress hilang di HP lain?** Tidak ada cloud sync. Gunakan Export dari perangkat lama dan Import di perangkat baru.

**Kenapa checkpoint strategi belum centang otomatis?** Milestone kuartalan memerlukan validasi bukti sendiri.

**Apakah GitHub otomatis update tiap Senin?** Radar memeriksa sumber dan hanya mencoba update aman jika ada bukti material. Tidak ada jaminan commit setiap minggu.

**Apakah aman mengisi JD internal perusahaan?** Jangan. Gunakan deskripsi lowongan publik saja.

**Mengapa roadmap 5 tahun tidak sedetail minggu tahun kedua?** Tahun 2–5 bersifat strategis dan kondisional; rencana operasional rinci hanya 12 bulan agar tidak berpura-pura bisa meramalkan pasar bertahun-tahun ke depan.

**Jika halaman error setelah update?** Jangan langsung Reset. Export dulu bila memungkinkan; cek reload/browser berbeda, simpan pesan kesalahan tanpa secret, lalu laporkan langkah reproduksinya.

## O. Tanda roadmap benar-benar membantu

Dalam empat minggu, seharusnya mampu menjawab:
1. Apa 2–3 skill yang benar-benar diprioritaskan, beserta alasannya?
2. Deliverable apa yang sudah dapat diuji atau dilihat?
3. Apa yang bisa dijelaskan dan diperbaiki secara mandiri?
4. Apa nilai analitis, engineering, atau bisnis dari output tersebut?
5. Topik apa yang sengaja **tidak** dipelajari dulu, dan mengapa?

Kalau belum jelas, jangan tambah lagi jumlah kursus. Perjelas prioritas, tes kemampuan, dan kriteria selesai.

**Alur satu kalimat:** tentukan pekerjaan → nilai 10–20 kemampuan yang relevan → pilih target kedalaman → lihat strategi → jalankan sprint → uji hasil → review lowongan → adaptasi → backup.
