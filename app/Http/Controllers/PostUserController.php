<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostUser;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PostUserController extends Controller
{
   public function create(Post $post){
        return view('adopt.create', compact('post') );
   }

   public function store(Post $post)
   {
       $attributes = request()->validate([
           'phone' => ['required'],
           'address' => ['required'],
           'isPrevious' => ['required'],
           'message' => ['required', 'max:255'],
       ]);

       // Add name and email from authenticated user
       $attributes['user_id'] = Auth::id();
       $attributes['post_id'] = $post->id;
       $attributes['name'] = Auth::user()->name;
       $attributes['email'] = Auth::user()->email;

       PostUser::create($attributes);

       return redirect('/pets');
   }
}
