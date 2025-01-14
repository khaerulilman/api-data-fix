import express from "express";
import getMenu from "../controllers/MenuController.js";
import createPesanan from "../controllers/testPesananController.js";
import createFeedback from "../controllers/FeedbackController.js";
import authMiddleware from '../middlewares/authMiddleware.js'; // Middleware untuk autentikasi
import getPesanan from "../controllers/getPesananController.js";
import updateStatusPembayaran from "../controllers/UpdatePembayaranController.js";
import deletePesanan from "../controllers/deletePesananController.js";
import updateStatusPesanan from "../controllers/UpdateStatusPesananController.js";
import getFeedback from "../controllers/getFeedbackController.js";
import deleteFeedback from "../controllers/deleteFeedbackController.js";

const router = express.Router();

// Daftar route
router.get('/menu', getMenu);
router.post('/pesanan', createPesanan);
router.get('/pesanan', getPesanan);
router.post('/feedback', createFeedback);
router.get('/feedback',getFeedback)

// Tambahkan middleware untuk autentikasi
router.put('/pesanan/:id/status-pembayaran', updateStatusPembayaran);
router.put('/pesanan/:id/status-pesanan', updateStatusPesanan);
router.delete('/pesanan/:id', deletePesanan);
router.delete('/feedback/:id', deleteFeedback);

export default router;
