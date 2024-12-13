import dotenv from 'dotenv';

dotenv.config(); // Membaca file .env

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Mengambil token dari header
  const validToken = process.env.AUTH_TOKEN; // Token dari .env

  if (!token) {
    return res.status(401).json({ message: 'Token tidak ditemukan. Unauthorized' });
  }

  if (token !== validToken) {
    return res.status(401).json({ message: 'Token tidak valid. Unauthorized' });
  }

  next(); // Token valid, lanjutkan ke handler berikutnya
};

export default authMiddleware;
