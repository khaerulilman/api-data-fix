import db from '../config/Database.js';

export const updateStatusPesanan = async (req, res) => {
  try {
    const { id } = req.params; // Ambil ID dari parameter URL
    const { status_pesanan } = req.body; // Ambil status_pesanan dari body request

    // Cari pesanan berdasarkan ID
    const pesanan = await db`SELECT * FROM pesanan WHERE id = ${id}`;

    // Jika pesanan tidak ditemukan, kirim respons 404
    if (pesanan.length === 0) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }

    // Update status pesanan berdasarkan ID
    await db`UPDATE pesanan SET status_pesanan = ${status_pesanan} WHERE id = ${id}`;

    // Kirim respons sukses
    res.status(200).json({ 
      message: 'Status Pesanan berhasil diupdate', 
      updated_pesanan: { id, status_pesanan }
    });
  } catch (error) {
    console.error('Error updating status pesanan:', error);
    // Kirim respons error
    res.status(500).json({ 
      message: 'Gagal update status pesanan', 
      error: error.message 
    });
  }
};

export default updateStatusPesanan;
