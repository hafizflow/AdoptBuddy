<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class SessionController extends Controller
{
    public function create(){
        return view('auth.login');
    }

    public function store(){
        // validate
        $attributes = request()->validate([
            'email' => ['required', 'email'],
            'password' => ['required']
        ]);
        // login user
        if(!Auth::attempt($attributes)){
            throw ValidationException::withMessages([
                'email' => 'The provided credentials do not match our records.'
            ]);
        }
        // store session
        request()->session()->regenerate();
        // redirect
        return redirect('/adopt');
    }

    public function destroy(){
        Auth::logout();
        return redirect('/login');
    }
}
