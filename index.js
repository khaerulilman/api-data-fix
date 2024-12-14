import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.js';

dotenv.config(); // Load konfigurasi dari .env

const app = express();
const PORT = process.env.PORT || 5000; // Gunakan PORT dari .env jika ada

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
