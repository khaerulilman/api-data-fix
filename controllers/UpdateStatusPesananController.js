import PesananModel from '../models/PesananModel.js';

export const updateStatusPesanan = async (req, res) => {
  try {
    const { id } = req.params;
    const { status_pesanan } = req.body;

    const pesanan = await PesananModel.findByPk(id);
    
    if (!pesanan) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }

    pesanan.status_pesanan = status_pesanan;
    await pesanan.save();

    res.json({ 
      message: 'Status Pesanan berhasil diupdate', 
      pesanan 
    });
  } catch (error) {
    console.error('Error updating status pesanan:', error);
    res.status(500).json({ message: 'Gagal update status pembayaran', error: error.message });
  }
};

export default updateStatusPesanan;