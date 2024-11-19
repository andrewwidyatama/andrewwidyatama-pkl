<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transaction', function (Blueprint $table) {
            $table->id('id_transaksi'); 
            $table->string('nama'); 
            $table->string('jenis'); 
            $table->integer('jumlah'); 
            $table->string('kategori'); 
            $table->date('tanggal'); 
           
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('transaction'); // Hapus tabel jika rollback
    }
}
