<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TransactionController;


Route::apiResource('transaction', TransactionController::class);
