<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Models\PostUser;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function show()
    {
        $user = Auth::user();

        // Get adoption requests made by the user
        $adoptRequests = PostUser::where('user_id', $user->id)
            ->with('post.images')
            ->latest()
            ->get();

        // OPTIONAL: Get posts created by this user (only if you track post ownership via user_id)
        $myPosts = Post::where('user_id', $user->id)
            ->with('images')
            ->latest()
            ->get();

        return view('user.profile', compact('user', 'adoptRequests', 'myPosts'));
    }
}
