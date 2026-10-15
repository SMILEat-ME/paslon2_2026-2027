# Born 02 Lead — Website Kampanye Paslon 02 OSIS HS Pewaris Bangsa 2026-2027

Website resmi kampanye Pasangan Calon 02 (Jeanne Felicia Angelique & Raden Nadya Herawati Asmara) untuk Pemilihan Ketua & Wakil Ketua OSIS Homeschooling Pewaris Bangsa periode 2026-2027.

Proyek ini dibangun menggunakan **[Astro](https://astro.build/)** dengan estetika pixel-art / retro cyber OS yang responsif, cepat, dan SEO-friendly.

## 🚀 Perintah Proyek

| Perintah | Deskripsi |
| :--- | :--- |
| `npm install` | Menginstal seluruh dependensi |
| `npm run dev` | Menjalankan local dev server di `http://localhost:4321` |
| `npm run build` | Melakukan build static production ke folder `dist/` |
| `npm run preview` | Menjalankan preview lokal dari hasil build production |

## 📁 Struktur Folder

```text
├── public/               # Asset statis publik (media, favicon, dsb.)
│   ├── favicon.svg
│   └── media/            # Foto webp/png dan video kampanye
├── src/
│   ├── components/       # Komponen modular Astro (Hero, Profil, Visi, Misi, Proker, Video, dsb.)
│   ├── data/             # Sumber data terstruktur (campaign.ts)
│   ├── layouts/          # Layout utama (Layout.astro)
│   ├── pages/            # Halaman Astro (index.astro)
│   └── styles/           # CSS global (global.css)
├── dist/                 # Hasil build statis siap deploy (Vercel, Netlify, Cloudflare, GitHub Pages)
├── astro.config.mjs      # Konfigurasi Astro
└── package.json
```