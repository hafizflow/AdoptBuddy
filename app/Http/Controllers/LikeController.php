<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LikeController extends Controller
{

    public function index()
    {
        $likedPosts = auth()->user()
            ->likes()
            ->with('post.images')
            ->get()
            ->pluck('post')
            ->filter();

        return Inertia::render('favouriteList/FavouriteList', [
            'pets' => $likedPosts,
        ]);
    }


    public function toggle(Post $post)
    {
        $user = auth()->user();

        $like = Like::where('post_id', $post->id)->where('user_id', $user->id)->first();

        if ($like) {
            $like->delete(); // Unlike
        } else {
            Like::create([
                'post_id' => $post->id,
                'user_id' => $user->id
            ]);
        }

        return back();
    }
}
