<?php

use App\Http\Controllers\LikeController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\PostUserController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\SessionController;
use App\Http\Middleware\IsAdmin;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', [HomeController::class, 'index']);

Route::get("/contact", function () {
    return Inertia::render('contact/Contact');
});
Route::get("/about", function () {
    return Inertia::render('about/About');
});
Route::get("/adopt", function () {
    return Inertia::render('adopt/Adopt');
});
Route::get("/admin", function () {
    return Inertia::render('admin/Admin');
});
Route::get("/details", function () {
    return Inertia::render('petDetails/petDetails');
});

Route::get("/profile", function () {
    return Inertia::render('userProfile/userProfile');
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
Route::get('/requests', [PostUserController::class, 'index'])->middleware(IsAdmin::class);
Route::patch('/requests/{postUser}', [PostUserController::class, 'update'])->name('requests.update')->middleware(IsAdmin::class);
Route::delete('/requests/{postUser}', [PostUserController::class, 'destroy'])->name('requests.destroy')->middleware(IsAdmin::class);


Route::get('/post', [PostController::class, 'create'])->middleware('auth');
Route::post('/post', [PostController::class, 'store'])->middleware('auth');
Route::get('/adopt', [PostController::class, 'index'])->name('pets.index');

Route::get('/posts/{post}', [PostController::class, 'edit'])->name('post.edit')->middleware(IsAdmin::class);
Route::put('/posts/{post}', [PostController::class, 'update'])->name('post.update')->middleware(IsAdmin::class);
Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('post.destroy')->middleware(IsAdmin::class);
Route::patch('/postRequest{post}', [PostController::class, 'postRequest'])->name('post.request')->middleware(IsAdmin::class);


Route::post('/posts/{post}/like', [LikeController::class, 'toggle'])->name('posts.like')->middleware('auth');
Route::get('/likes', [LikeController::class, 'index'])->name('likes')->middleware('auth');
