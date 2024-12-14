import express from "express";
import getMenu from "../controllers/MenuController.js"; 
import createPesanan from "../controllers/testPesananController.js";
import createFeedback from "../controllers/FeedbackController.js";
import authMiddleware from '../middlewares/authMiddleware.js'; // Middleware untuk autentikasi
import getPesanan from "../controllers/getPesananController.js";
import updateStatusPembayaran from "../controllers/UpdatePembayaranController.js";
import deletePesanan from "../controllers/deletePesananController.js";
import updateStatusPesanan from "../controllers/UpdateStatusPesananController.js";

const router = express.Router();

// Middleware hanya diterapkan pada endpoint GET /menu
router.get('/menu', getMenu);

// Daftar route lainnya
router.post('/pesanan', createPesanan);
router.get('/pesanan', getPesanan);
router.post('/feedback', createFeedback);
router.put('/pesanan/:id/status-pembayaran', updateStatusPembayaran);
router.put('/pesanan/:id/status-pesanan', updateStatusPesanan);
router.delete('/pesanan/:id', deletePesanan);

export default router;
