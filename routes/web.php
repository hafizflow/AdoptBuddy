<?php

use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/anjumHome', function () {
    return Inertia::render('home/Home');
});
Route::get("/contact", function () {
    return Inertia::render('contact/contact');
});
Route::get("/about", function () {
    return Inertia::render('about/About');
});


Route::view('/', 'welcome');
Route::view('/register', 'auth.register');

Route::get('/login', [SessionController::class, 'create']);
Route::post('/login', [SessionController::class, 'store']);

Route::get('/register', [RegisterUserController::class, 'create']);
Route::post('/register', [RegisterUserController::class, 'store']);

Route::get('/home', function () {
    return Inertia::render('Home');
});

