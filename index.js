import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config(); // Load konfigurasi dari .env

const app = express();
const PORT = process.env.PORT || 5000; // Gunakan PORT dari .env jika ada

// Konfigurasi CORS
app.use(cors({
  origin: [
    'http://127.0.0.1:5500',
    'http://localhost:5500',
    'http://127.0.0.1:3000',
    'http://localhost:3000'
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());
app.use(router);

app.get('/test-api', (req, res) => {
  console.log('Berhasil masuk test API');
  res.send('Berhasil masuk test API');
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
});
