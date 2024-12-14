import db from '../config/Database.js';

export const getPesanan = async (req, res) => {
  try {
    // Query data dari tabel `pesanan`
    const pesanan = await db`SELECT * FROM pesanan`; 
    res.status(200).json(pesanan);
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil data pesanan',
      error: error.message
    });
  }
};

export default getPesanan;
