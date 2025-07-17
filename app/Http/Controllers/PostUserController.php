<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\PostUser;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class PostUserController extends Controller
{
    public function index()
    {
        $requests = PostUser::with('post', 'user')->latest()->get();

        return view('admin.post-requests', compact('requests'));
    }


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

       if (PostUser::where('post_id', $post->id)->where('user_id', Auth::id())->exists()) {
           return back()->with('error', 'You have already requested to adopt this pet.');
       }

       // Add name and email from authenticated user
       $attributes['user_id'] = Auth::id();
       $attributes['post_id'] = $post->id;
       $attributes['name'] = Auth::user()->name;
       $attributes['email'] = Auth::user()->email;

       PostUser::create($attributes);

       return redirect('/pets');
   }

    public function update(PostUser $postUser)
    {
        request()->validate([
            'status' => 'required|in:pending,accepted,rejected',
        ]);

        $postUser->update(['status' => request()->status]);

        return back()->with('success', 'Status updated!');
    }

    public function destroy(PostUser $postUser){
        $postUser->delete();

        return back()->with('success', 'Status deleted!');
    }
}
