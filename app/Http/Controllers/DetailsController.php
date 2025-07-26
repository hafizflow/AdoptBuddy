<?php
namespace App\Http\Controllers;

use App\Http\Middleware\IsAdmin;
use App\Models\Post;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Inertia\Inertia;


class DetailsController extends Controller
{
    public function index($id)
    {
        $pet = Post::with('images')->where('id', $id)->first();
        return Inertia::render('petDetails/petDetails', [
            'pet' => $pet,
        ]);
    }

}

?>