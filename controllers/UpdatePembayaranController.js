import PesananModel from '../models/PesananModel.js';

export const updateStatusPembayaran = async (req, res) => {
  try {
    const { id } = req.params;
    const { status_pembayaran } = req.body;

    const pesanan = await PesananModel.findByPk(id);
    
    if (!pesanan) {
      return res.status(404).json({ message: 'Pesanan tidak ditemukan' });
    }

    pesanan.status_pembayaran = status_pembayaran;
    await pesanan.save();

    res.json({ 
      message: 'Status pembayaran berhasil diupdate', 
      pesanan 
    });
  } catch (error) {
    console.error('Error updating status pembayaran:', error);
    res.status(500).json({ message: 'Gagal update status pembayaran', error: error.message });
  }
};

export default updateStatusPembayaran;