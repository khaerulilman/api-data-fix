import PesananModel from '../models/PesananModel.js';

export const deletePesanan = async (req, res) => {
  const { id } = req.params; // Ambil ID dari parameter URL

  try {
    // Cari pesanan berdasarkan ID
    const pesanan = await PesananModel.findByPk(id);

    // Jika pesanan tidak ditemukan, kirim respons 404
    if (!pesanan) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }

    // Hapus pesanan
    await PesananModel.destroy({ where: { id } });

    // Kirim respons sukses
    res.status(200).json({ message: 'Pesanan berhasil dihapus' });
  } catch (error) {
    console.error('Error deleting pesanan:', error);
    // Kirim respons error
    res.status(500).json({ message: 'Terjadi kesalahan saat menghapus pesanan', error: error.message });
  }
};

export default deletePesanan;