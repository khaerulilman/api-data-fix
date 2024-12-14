import db from '../config/Database.js';

export const updateStatusPembayaran = async (req, res) => {
  try {
    const { id } = req.params; // Mendapatkan ID pesanan dari parameter
    const { status_pembayaran } = req.body; // Mendapatkan status pembayaran dari body request

    // Cek apakah pesanan dengan ID yang diberikan ada di database
    const pesanan = await db`SELECT * FROM pesanan WHERE id = ${id}`;
    if (pesanan.length === 0) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }

    // Update status pembayaran
    await db`UPDATE pesanan SET status_pembayaran = ${status_pembayaran} WHERE id = ${id}`;

    res.json({ 
      message: 'Status pembayaran berhasil diupdate', 
      updatedId: id, 
      status_pembayaran 
    });
  } catch (error) {
    console.error('Error updating status pembayaran:', error);
    res.status(500).json({ message: 'Gagal update status pembayaran', error: error.message });
  }
};

export default updateStatusPembayaran;
