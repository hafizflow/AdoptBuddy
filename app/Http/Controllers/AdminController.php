<?php
namespace App\Http\Controllers;

use App\Http\Middleware\IsAdmin;
use App\Models\Post;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Inertia\Inertia;


class AdminController extends Controller
{
    public function index()
    {

        $pets = Post::with('images')->latest()->get();
        return Inertia::render('admin/Admin', [
            'pets' => $pets,
        ]);
    }

}



?>