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
        $pets = Post::with(['images', 'likes' => function ($query) {
            $query->where('user_id', auth()->user()->id);
        }])->where("isVisible", "Visible")->latest()->take(3)->get();

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
