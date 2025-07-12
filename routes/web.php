<?php

use App\Http\Controllers\AdoptController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;


Route::get("/riyad", function () {
    return inertia('Home');
});


//Auth
Route::get('/login', [SessionController::class, 'create'])->name('login');
Route::post('/login', [SessionController::class, 'store']);
Route::get('/logout', [SessionController::class, 'destroy']);

Route::get('/register', [RegisterUserController::class, 'create']);
Route::post('/register', [RegisterUserController::class, 'store']);


// Adoption Form
Route::get('/adopt', [AdoptController::class, 'create'])->middleware('auth');
Route::post('/adopt', [AdoptController::class, 'store'])->middleware('auth');


