# 🍲 Resep App

Aplikasi berbasis web untuk mengelola dan menampilkan berbagai **resep masakan**.  
Pengguna dapat mencari resep, melihat detail bahan dan langkah memasak, serta menyimpan resep favorit.

---

## 🚀 Fitur Utama
- 🔎 Cari resep berdasarkan nama atau kategori  
- 📑 Lihat detail resep (bahan, langkah, gambar)  
- ❤️ Simpan resep favorit  
- 👩‍🍳 Tambahkan resep baru (admin)  
- 📊 Dashboard admin untuk mengelola resep  
- 🌐 Tampilan web modern (React.js)  
- 🗄️ API backend dengan Node.js / Express  
- 💾 Database MySQL / MongoDB (opsional)  

---

## 📂 Struktur Folder
resep_app/
├── client/ # Frontend React
│ ├── public/ # File statis (index.html, favicon, dll)
│ ├── src/ # Source code utama
│ │ ├── components/ # Komponen UI (Navbar, Card, Footer)
│ │ ├── pages/ # Halaman aplikasi (Home, Detail, Favorit)
│ │ └── App.js # Entry point React
│
├── server/ # Backend Node.js / Express
│ ├── routes/ # Routing API (resep, user, favorit)
│ ├── controllers/ # Logic untuk setiap endpoint
│ ├── models/ # Struktur data resep & user
│ └── server.js # Entry point backend
│
├── index.html # File utama HTML (opsional)
├── package.json # Konfigurasi npm
├── .gitignore # File untuk mengabaikan node_modules dsb.
└── README.md # Dokumentasi proyek 
