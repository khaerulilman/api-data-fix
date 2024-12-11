import express from 'express';
import cors from 'cors'; // Tambahkan import cors
import router from './routes/index.js';

const app = express();
const PORT = 5000;

// Konfigurasi CORS
app.use(cors({
  origin: [
    'http://127.0.0.1:5500',  // Live Server default
    'http://localhost:5500',  // Live Server localhost
    'http://127.0.0.1:3000',  // Contoh port lain yang mungkin digunakan
    'http://localhost:3000'   // Contoh port lain yang mungkin digunakan
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(router);

// Tambahkan route test-api
app.get('/test-api', (req, res) => {
  console.log('Berhasil masuk test API');  // Ini akan tampil di console
  res.send('Berhasil masuk test API');  // Ini akan tampil di browser
});

// Jalankan server
app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
});
