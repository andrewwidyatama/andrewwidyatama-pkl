import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Router
import './App.css';
import AddTransaction from './components/AddTransactionForm'; // Import AddTransaction

function App() {
  const [data, setData] = useState([]);  // State untuk menyimpan data transaksi
  const [loading, setLoading] = useState(true);  // State untuk loading

  // Mengambil data dari API Laravel saat komponen pertama kali di-render
  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/transaction')  // Ganti dengan URL API Laravel Anda
      .then((response) => {
        setData(response.data);  // Set data yang diterima dari API ke state
        setLoading(false);  // Set loading menjadi false setelah data diterima
      })
      .catch((error) => {
        console.error('Ada kesalahan:', error);
        setLoading(false);  // Set loading menjadi false jika ada error
      });
  }, []);  // Efek ini hanya dijalankan sekali saat komponen di-mount

  return (
    <Router>
      <div className="App">
        <h1>Data Transaksi</h1>
        {/* Tombol Add Transaction */}
        <Link to="/add-transaction">
          <button style={{ margin: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
            Add Transaction
          </button>
        </Link>
        <Routes>
          {/* Route Halaman Utama */}
          <Route path="/" element={
            loading ? (
              <h2>Loading...</h2>  // Jika loading masih true, tampilkan pesan loading
            ) : (
              <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr>
                    <th>ID Transaksi</th>
                    <th>Nama</th>
                    <th>Jenis</th>
                    <th>Jumlah</th>
                    <th>Kategori</th>
                    <th>Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Looping data yang diterima dari API */}
                  {data.map((transaction) => (
                    <tr key={transaction.id_transaksi}>
                      <td>{transaction.nama}</td>
                      <td>{transaction.jenis}</td>
                      <td>{transaction.jumlah}</td>
                      <td>{transaction.kategori}</td>a
                      <td>{transaction.tanggal}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )
          } />
          {/* Route Halaman AddTransaction */}
          <Route path="/add-transaction" element={<AddTransaction />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
