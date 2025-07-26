<?php
namespace App\Http\Controllers;

use App\Http\Middleware\IsAdmin;
use App\Models\Post;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Inertia\Inertia;


class HomeController extends Controller
{
    public function index()
    {
        $pets = Post::with('images','likes')->latest()->take(4)->get();
        return Inertia::render('home/Home', [
            'pets' => $pets,
        ]);
    }

    public function show($id)
    {
        $pet = Post::with('images')->findOrFail($id);
        return Inertia::render('PetDetail', [
            'pet' => $pet,
        ]);
    }
}



?>