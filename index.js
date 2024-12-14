import express from 'express';
import router from './routes/index.js';

const app = express();
const PORT = 5000; // Tetapkan nilai port langsung di sini

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
