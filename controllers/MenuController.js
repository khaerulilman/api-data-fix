import db from '../config/Database.js';

export const getMenu = async (req, res) => {
  try {
    const menu = await db`SELECT * FROM menu`; // Query data dari tabel `menu`
    res.status(200).json(menu);
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil data menu',
      error: error.message
    });
  }
};

export default getMenu;
