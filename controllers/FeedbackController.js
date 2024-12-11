import db from '../config/Database.js'; 

export const createFeedback = async (req, res) => { 
  try { 
    const { nama_hidangan, rating, komentar } = req.body; 

    // Validasi input
    if (!nama_hidangan || !rating) { 
      return res.status(400).json({ message: "Nama hidangan dan rating wajib diisi." }); 
    }

    // Validasi rating (angka antara 1 hingga 5)
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: "Rating harus antara 1 dan 5." });
    }

    // Buat feedback baru
    const result = await db`
      INSERT INTO ratings (nama_hidangan, rating, komentar, waktu_komentar)
      VALUES (
        ${nama_hidangan},
        ${rating},
        ${komentar || null},
        NOW()
      )
      RETURNING *;
    `;

    // Mengembalikan data feedback yang baru dibuat
    res.status(201).json({ 
      message: "Feedback berhasil dibuat.", 
      data: result[0] 
    }); 

  } catch (error) { 
    console.error(error); 
    res.status(500).json({ message: "Terjadi kesalahan pada server.", error: error.message }); 
  } 
};

export default createFeedback;
