<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;

    // Nama tabel (Jika tabel menggunakan nama default Laravel, ini bisa dihilangkan)
    protected $table = 'transaksi';

    // Primary key (Bisa dihilangkan jika Anda menggunakan primary key default 'id')
    protected $primaryKey = 'id_transaksi';

    // Kolom yang bisa diisi
    protected $fillable = [
        'nama', 'jenis', 'jumlah', 'kategori', 'tanggal',
    ];

    // Jika menggunakan timestamps otomatis (created_at, updated_at), pastikan ini ada
    public $timestamps = true;
}
