import db from '../config/Database.js';

export const createPesanan = async (req, res) => {
  try {
    const {
      nama_pesanan,
      quantity,
      deskripsi_tambahan,
      nama_pelanggan,
      no_meja
    } = req.body;

    // Validasi input
    if (!nama_pesanan || !nama_pelanggan || !no_meja || !quantity) {
      return res.status(400).json({
        message: 'Harap lengkapi semua data yang diperlukan'
      });
    }

    // Buat pesanan baru
    const result = await db`
      INSERT INTO pesanan (nama_pesanan, quantity, deskripsi_tambahan, nama_pelanggan, no_meja, waktu_pemesanan, status_pembayaran, status_pesanan)
      VALUES (
        ${nama_pesanan},
        ${quantity},
        ${deskripsi_tambahan || null},
        ${nama_pelanggan},
        ${no_meja},
        NOW(),
        NULL,
        NULL
      )
      RETURNING *;
    `;

    // Kirimkan respons berhasil
    res.status(201).json({
      message: 'Pesanan berhasil dibuat',
      pesanan: result[0] // Kembalikan data pesanan yang baru dibuat
    });
  } catch (error) {
    res.status(500).json({
      message: 'Terjadi kesalahan saat membuat pesanan',
      error: error.message
    });
  }
};

export default createPesanan;
