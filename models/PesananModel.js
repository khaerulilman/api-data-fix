// import { DataTypes } from 'sequelize';
// import sequelize from '../config/Database.js'; 

// const PesananModel = sequelize.define('Pesanan', {
//   id: {
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true,
//     allowNull: false
//   },
//   nama_pesanan: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   quantity: {
//     type: DataTypes.INTEGER,
//     allowNull: false,
//     defaultValue: 1 
//   },
//   deskripsi_tambahan: {
//     type: DataTypes.TEXT,
//     allowNull: true
//   },
//   nama_pelanggan: {
//     type: DataTypes.TEXT,
//     allowNull: false
//   },
//   no_meja: {
//     type: DataTypes.INTEGER,
//     allowNull: false
//   },
//   waktu_pemesanan: {
//     type: DataTypes.DATE,
//     allowNull: false,
//     defaultValue: DataTypes.NOW
//   },
//   status_pembayaran: {
//     type: DataTypes.BOOLEAN,
//     allowNull: true // Kolom ini diperbolehkan bernilai null
//   },
//   status_pesanan: { // Kolom baru
//     type: DataTypes.BOOLEAN,
//     allowNull: true, // Kolom ini juga diperbolehkan bernilai null
//   }
// }, {
//   tableName: 'pesanan',
//   timestamps: false
// });

// export default PesananModel;
