<?php

namespace App\Http\Controllers;

use App\Models\Adopt;
use Faker\Provider\PhoneNumber;
use Illuminate\Http\Request;

class AdoptController extends Controller
{
   public function create(){
        return view('adopt.create');
   }

   public function store()
   {
       $attributes = request()->validate([
           'name' => ['required', 'min:3'],
           'email' => ['required', 'email'],
           'phone' => ['required'],
           'address' => ['required'],
           'isPrevious' => ['required'],
           'message' => ['required', 'max:255'],
       ]);
       
       Adopt::create($attributes);

       return redirect('/adopt');
   }
}
