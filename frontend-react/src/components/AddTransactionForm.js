import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Untuk navigasi setelah submit

const AddTransaction = ({ fetchTransactions }) => {  // Terima prop fetchTransactions
  const [formData, setFormData] = useState({
    nama: '',
    jenis: '',
    jumlah: '',
    kategori: '',
    tanggal: '',
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Inisialisasi navigasi

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Fungsi untuk mengirim data ke backend Laravel
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/transaction', formData);
      setMessage('Data transaksi berhasil ditambahkan!');
      fetchTransactions(); // Panggil fungsi fetchTransactions untuk memperbarui data
      setTimeout(() => navigate('/'), 2000); // Kembali ke halaman utama setelah 2 detik
    } catch (error) {
      setMessage('Terjadi kesalahan saat menambahkan data transaksi.');
      console.error(error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Form Tambah Transaksi</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama Pengguna:</label>
          <input
            type="number"
            name="nama"
            value={formData.id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Jenis:</label>
          <select name="jenis" value={formData.jenis} onChange={handleChange} required>
            <option value="">Pilih Jenis</option>
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </div>
        <div>
          <label>Jumlah:</label>
          <input
            type="number"
            name="jumlah"
            value={formData.jumlah}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Kategori:</label>
          <input
            type="text"
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Tanggal:</label>
          <input
            type="date"
            name="tanggal"
            value={formData.tanggal}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={{ marginTop: '20px' }}>Tambahkan Transaksi</button>
      </form>
    </div>
  );
};

export default AddTransaction;
