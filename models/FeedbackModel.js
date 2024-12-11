// import { DataTypes } from "sequelize";
// import sequelize from '../config/Database.js';

// const FeedbackModel = sequelize.define('rating', {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     nama_hidangan: {
//         type: DataTypes.STRING,
//         allowNull: false // Nama hidangan wajib diisi
//     },
//     rating: {
//         type: DataTypes.INTEGER,
//         allowNull: true, // Rating boleh null
//         validate: {
//             min: 1,
//             max: 5 // Jika diisi, harus antara 1-5
//         }
//     },
//     komentar: {
//         type: DataTypes.STRING,
//         allowNull: true // Komentar boleh null
//     },
//     waktu_komentar: {
//         type: DataTypes.DATE,
//         defaultValue: DataTypes.NOW,
//         allowNull: false // Harus selalu ada nilai, default ke waktu saat ini
//     }
// }, {
//     tableName: 'ratings', // Nama tabel eksplisit
//     timestamps: false // Set true jika ingin `createdAt` dan `updatedAt` otomatis
// });

// export default FeedbackModel;
