import PesananModel from '../models/PesananModel.js';

export const getPesanan = async (req, res) => {
  try {
    const pesanan = await PesananModel.findAll();
    res.json(pesanan);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export default getPesanan;