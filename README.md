# 12 Bulan Bersamamu — Arthur & Mayla

Situs mini ini memuat 12 bulan kenangan Arthur & Mayla. Dibangun untuk dipajang lokal atau di-deploy ke GitHub Pages.

Cara menjalankan lokal:

```powershell
cd e:/Foryou
python -m http.server 8000
# buka http://localhost:8000
```

Fitur yang ditambahkan:
- Micro-animations untuk foto, judul, dan tombol
- Lazy-loading gambar dan caption otomatis
- Lightbox dengan navigasi keyboard, tombol download, dan caption
- Overlay tantangan "Kamu sayang nggak?" dengan tombol yang "menghindar"
- Panel untuk menulis harapan (tersimpan di `localStorage`)
- Favicon dan meta Open Graph untuk share
- Print-friendly stylesheet untuk export/cetak
- Suara klik ringan via WebAudio saat aksi berhasil
- Fitur baru yang ditambahkan:
	- Latar belakang SVG hati romantis dan header parallax
	- Slider `love-meter` dengan mikro-animasi (hati + konfeti)
	- Bilah kemajuan timeline yang mengikuti scroll
	- Pengungkapan typewriter untuk cerita bulanan
	- Ledakan konfeti & partikel hati
	- Lightbox yang ditingkatkan: `Share` (Web Share API / salin tautan) dan `Export Image` (merender gambar+caption ke PNG)
	- Pintasan keyboard: `L` toggle fokus love-meter, `C` konfeti, `S` ekspor gambar saat ini
	- Tipografi yang ditingkatkan, skala cair, dan gaya UI yang dipoles

File penting:
- `index.html` — markup utama
- `style.css` — styling
- `script.js` — logika interaksi
- `assets/` — foto dan `favicon.svg`, `dia.mp3`

Mau saya deploy ke GitHub Pages atau tambahin download bundle ZIP?

## Deploy to GitHub Pages

This project is a static site and can be deployed to GitHub Pages using the included GitHub Actions workflow.

Steps to publish (from your local copy):

```bash
# from project root
git init           # if repo not already initialized
git add -A
git commit -m "chore: initial site" || true
git branch -M main
git remote add origin https://github.com/MuhammadArthur21/anniversary.git
git push -u origin main
```

Or run the helper script (make executable on *nix):

```bash
./scripts/deploy.sh
```

The workflow `.github/workflows/deploy.yml` will run on push to `main` and publish the repository content to the `gh-pages` branch using the built-in `GITHUB_TOKEN`.

Notes:
- If your repository already exists and has a different remote name, update the remote URL in `scripts/deploy.sh` or add the correct remote before pushing.
- After the action completes, enable GitHub Pages in the repository settings (if not automatically enabled) and set the source to the `gh-pages` branch.
