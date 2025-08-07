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
        $pets = Post::with('images','likes')->latest()->get();
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
            'lat'=> 'required|numeric',
            'lng'=> 'required|numeric',
            'breed' => 'required',
            'gender' => 'required',
            'status' => 'in:Available,On Hold,Adopted',
            ]);

        $pet = Post::create([
            'name' => $data['name'],
            'age' => $data['age'],
            'description' => $data['description'],
            'size' => $data['size'],
            'breed' => $data['breed'],
            'gender' => $data['gender'],
            'lat' => $data['lat'],
            'lng' => $data['lng'],
            'status' => $data['status'] ?? 'Available',
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

    public function update($id)
    {
        $selectedPost = Post::findOrFail($id);

        $selectedPost->update([
            'status' => $selectedPost->status === 'Available' ? 'On Hold' : 'Available',
        ]);

        return redirect()->route('admin')->with('success', 'Pet status updated!');
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);
        // Delete related images from storage
        foreach ($post->images as $image) {
            \Storage::disk('public')->delete($image->image);
            $image->delete();
        }

        $post->delete();

        return redirect()->route('admin')->with('success', 'Pet deleted!');
    }

    public function postRequest(Post $post){
        $post->update([
            'isVisible' => 'Visible',
        ]);

        return back();
    }
}
