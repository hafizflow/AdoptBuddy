<?php

namespace App\Http\Controllers;

use App\Models\AdminPost;
use App\Models\PetImage;
use Illuminate\Http\Request;

class AdminPostController extends Controller
{

    public function index()
    {
        $pets = AdminPost::with('images')->latest()->get();
        return view('admin.all-pets', compact('pets'));
    }

    public function create() {
        return view('admin.adopt-post');
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
            'status' => 'required',
        ]);

        $pet = AdminPost::create([
            'name' => $data['name'],
            'age' => $data['age'],
            'description' => $data['description'],
            'size' => $data['size'],
            'breed' => $data['breed'],
            'gender' => $data['gender'],
            'status' => $data['status'],
        ]);

        if(request()->hasFile('images')) {
            foreach(request()->file('images') as $image) {
                $path = $image->store('pets', 'public');

                PetImage::create([
                    'admin_post_id' => $pet->id,
                    'image' => $path,
                ]);
            }
        }

        return redirect()->back()->with('success', 'Pet posted!');
    }


    public function edit(AdminPost $pet)
    {
        $pet->load('images');
        return view('admin.edit-pet', compact('pet'));
    }

    public function update(Request $request, AdminPost $pet)
    {
        $request->validate([
            'status' => 'required|in:Available,On Hold,Adopted',
        ]);

        $pet->update([
            'status' => $request->status,
        ]);

        return redirect()->route('admin.pets.index')->with('success', 'Pet status updated!');
    }

    public function destroy(AdminPost $pet)
    {
        // Delete related images from storage
        foreach ($pet->images as $image) {
            \Storage::disk('public')->delete($image->image);
            $image->delete();
        }

        $pet->delete();

        return redirect()->route('admin.pets.index')->with('success', 'Pet deleted!');
    }
}
