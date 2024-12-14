import express from "express";
import getMenu from "../controllers/MenuController.js"; // Pastikan impor dengan { }
import createPesanan from "../controllers/testPesananController.js";
import createFeedback from "../controllers/FeedbackController.js";
import authMiddleware from '../middlewares/authMiddleware.js'; // Tambahkan import

const router = express.Router();

// Gunakan middleware hanya pada route yang memerlukan autentikasi
router.get('/menu', getMenu);

router.post('/pesanan',createPesanan);
// router.get('/pesanan', getPesanan);

router.post('/feedback', createFeedback);
// router.put('/pesanan/:id/status-pembayaran', updateStatusPembayaran);

// router.put('/pesanan/:id/status-pesanan', updateStatusPesanan)

// router.delete('/pesanan/:id', deletePesanan);

export default router;
