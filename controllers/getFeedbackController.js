import db from '../config/Database.js';

export const getFeedback = async (req, res) => {
  try {
    // Query data dari tabel `feedback`
    const feedback = await db`SELECT * FROM ratings`; 
    res.status(200).json(feedback);
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat mengambil data feedback',
      error: error.message
    });
  }
};

export default getFeedback;
