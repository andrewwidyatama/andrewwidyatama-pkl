<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use Illuminate\Http\Request;

class TransactionController extends Controller
{
    // Mendapatkan semua transaksi
    public function index()
    {
        $transaction = Transaction::all();
    
dd($transaction);
    
        return response()->json($transaction);
    }
    

    // Menambahkan transaksi baru
    public function store(Request $request)
    {
        $transaction = Transaction::create($request->all());
        return response()->json($transaction, 201);
    }

    // Memperbarui transaksi berdasarkan ID
    public function update(Request $request, $id_transaksi)
    {
        $transaction = Transaction::findOrFail($id_transaksi);
        $transaction->update($request->all());
        return response()->json($transaction);
    }

    // Menghapus transaksi berdasarkan ID
    public function destory($id_transaksi)
    {
        $transaction = Transaction::findOrFail($id_transaksi);
        $transaction->delete();
        return response()->json(null, 204);
    }
}
?>