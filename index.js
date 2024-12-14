import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
const PORT = 5000;

// Konfigurasi CORS
const corsOptions = {
  origin: '*', // Ganti dengan domain tertentu jika perlu
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode HTTP yang diizinkan
  allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
};

app.use(cors(corsOptions)); // Aktifkan CORS
app.use(express.json());
app.use(router);

// Endpoint test API
app.get('/test-api', (req, res) => {
  console.log('Berhasil masuk test API');
  res.send('Berhasil masuk test API');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Terjadi kesalahan pada server', error: err.message });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));
