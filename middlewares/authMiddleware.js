import dotenv from 'dotenv';

dotenv.config(); // Membaca file .env

const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization']; // Mengambil header Authorization
    if (!authHeader) {
      return res.status(401).json({ message: 'Token tidak ditemukan. Unauthorized' });
    }

    const token = authHeader.split(' ')[1]; // Mendapatkan token setelah "Bearer "
    const validToken = process.env.AUTH_TOKEN; // Token valid dari .env

    if (!token || token !== validToken) {
      return res.status(403).json({ message: 'Token tidak valid. Forbidden' });
    }

    next(); // Token valid, lanjutkan ke middleware berikutnya
  } catch (error) {
    console.error('Error di middleware autentikasi:', error.message);
    res.status(500).json({ message: 'Kesalahan server pada autentikasi' });
  }
};

export default authMiddleware;
