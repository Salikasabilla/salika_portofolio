# Portofolio Salika Sabilla Fiddaroin

Website portofolio statis yang dibuat dengan HTML5, CSS3, dan JavaScript murni. Tidak membutuhkan framework, backend, API, atau build step.

## Struktur folder

```text
salika-portfolio/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── salika-profile.jpg
```

## Menjalankan di komputer

1. Ekstrak folder proyek.
2. Buka foldernya di Visual Studio Code.
3. Cara paling sederhana: buka `index.html` di browser.
4. Alternatif: pasang ekstensi **Live Server** di VS Code, lalu klik kanan `index.html` dan pilih **Open with Live Server**.

Semua nama dan jalur file bersifat relatif. Pastikan `style.css`, `script.js`, dan folder `assets` tetap berada sesuai struktur di atas.

## Mengunggah ke GitHub

Buat repository baru bernama `salika-portfolio` pada akun GitHub `Salikasabilla`. Untuk alur ini, buat repository kosong tanpa menambahkan README, license, atau `.gitignore` dari GitHub. Lalu buka terminal VS Code pada folder `salika-portfolio` dan jalankan:

```bash
git init
git add .
git commit -m "Initial commit - portfolio Salika"
git branch -M main
git remote add origin https://github.com/Salikasabilla/salika-portfolio.git
git push -u origin main
```

Jika Git meminta identitas, atur nama dan email Git pada terminal:

```bash
git config --global user.name "Nama Anda"
git config --global user.email "email-github-anda@example.com"
```

Ganti nilai contoh di atas dengan nama dan email Git yang ingin digunakan. Jika repository memakai nama berbeda, sesuaikan URL pada perintah `git remote add origin`.

## Deploy dengan GitHub Pages

1. Buka repository `salika-portfolio` di GitHub.
2. Pilih **Settings** → **Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch **main** dan folder **/(root)**, lalu klik **Save**.
5. Tunggu proses deployment selesai. Buka alamat Pages yang ditampilkan GitHub. Untuk nama repository contoh di atas, alamat yang diharapkan adalah `https://salikasabilla.github.io/salika-portfolio/`.

Pastikan `index.html` ada di root repository, bukan di dalam subfolder lain. Setelah mengubah file, simpan lalu unggah kembali dengan:

```bash
git add .
git commit -m "Update portfolio"
git push
```

## Fitur

- Tata letak responsif untuk desktop, tablet, dan ponsel.
- Navigasi mobile yang dapat dibuka/tutup dengan tombol, ditutup setelah memilih tautan, dan mendukung tombol Escape.
- Smooth scrolling dan indikator navigasi untuk bagian yang sedang dibaca.
- Tautan email, telepon, GitHub, dan dua proyek live yang disediakan.
- Mematuhi preferensi `prefers-reduced-motion` serta menyediakan tautan lewati ke konten utama.
