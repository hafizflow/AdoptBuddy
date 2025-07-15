<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\PostUserController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use App\Http\Middleware\IsAdmin;
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
Route::get('/adopt/{post}', [PostUserController::class, 'create'])->name('adopt.create')->middleware('auth');
Route::post('/adopt/{post}', [PostUserController::class, 'store'])->name('adopt.store')->middleware('auth');


// Admin Form
Route::get('/admin', [PostController::class, 'create'])->middleware(IsAdmin::class);
Route::post('/admin', [PostController::class, 'store'])->middleware(IsAdmin::class);
Route::get('/pets', [PostController::class, 'index'])->name('pets.index');

Route::get('/posts/{post}', [PostController::class, 'edit'])->name('post.edit')->middleware(IsAdmin::class);
Route::put('/posts/{post}', [PostController::class, 'update'])->name('post.update')->middleware(IsAdmin::class);
Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('post.destroy')->middleware(IsAdmin::class);


