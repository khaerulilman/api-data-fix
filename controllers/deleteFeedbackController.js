import db from '../config/Database.js';

export const deleteFeedback = async (req, res) => {
  const { id } = req.params; // Ambil ID dari parameter URL

  try {
    // Cari feedback berdasarkan ID
    const feedback = await db`SELECT * FROM ratings WHERE id = ${id}`;

    // Jika feedback tidak ditemukan, kirim respons 404
    if (feedback.length === 0) {
      return res.status(404).json({ message: 'Feedback tidak ditemukan' });
    }

    // Hapus feedback berdasarkan ID
    await db`DELETE FROM ratings WHERE id = ${id}`;

    // Kirim respons sukses
    res.status(200).json({ message: 'Feedback berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting feedback:', error);
    // Kirim respons error
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus feedback', error: error.message });
  }
};

export default deleteFeedback;
