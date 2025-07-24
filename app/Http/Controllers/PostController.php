<?php

namespace App\Http\Controllers;

use App\Http\Middleware\IsAdmin;
use App\Models\Post;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{

    public function index()
    {
        $pets = Post::with('images')->latest()->get();
        return Inertia::render('adopt/Adopt', [
            'pets' => $pets,
        ]); 
        //return view('admin.all-post', compact('pets'));
    }

    public function create() {
        return view('admin.post');
    }

    public function store() {
        $data = request()->validate([
            'name' => 'required',
            'age' => 'required',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'description' => 'required', 'max:255',
            'size' => 'required',
            'breed' => 'required',
            'gender' => 'required',
            ]);

        $pet = Post::create([
            'name' => $data['name'],
            'age' => $data['age'],
            'description' => $data['description'],
            'size' => $data['size'],
            'breed' => $data['breed'],
            'gender' => $data['gender'],
            'isVisible' => auth()->user()->role === 'admin' ? 'Visible' : 'Invisible',
        ]);

        if(request()->hasFile('images')) {
            foreach(request()->file('images') as $image) {
                $path = $image->store('pets', 'public');

                PostImage::create([
                    'post_id' => $pet->id,
                    'image' => $path,
                ]);
            }
        }

        return redirect()->route('pets.index')->with('success', 'Pet posted!');
    }

    public function edit(Post $post)
    {
        $post->load('images');
        return view('admin.edit-post', compact('post'));
    }

    public function update(Post $post)
    {
        request()->validate([
            'status' => 'required|in:Available,On Hold,Adopted',
        ]);

        $post->update([
            'status' => request()->status,
        ]);

        return redirect()->route('pets.index')->with('success', 'Pet status updated!');
    }

    public function destroy()
    {
        // Delete related images from storage
        // foreach ($post->images as $image) {
        //     \Storage::disk('public')->delete($image->image);
        //     $image->delete();
        // }

        // $post->delete();

        return redirect()->route('pets.index')->with('success', 'Pet deleted!');
    }

    public function postRequest(Post $post){
        $post->update([
            'isVisible' => 'Visible',
        ]);

        return back();
    }
}
