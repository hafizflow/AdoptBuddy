<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;


class SessionController extends Controller
{
    public function create(){
        return Inertia::render('login/Login');
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
        return Inertia::location('/');
    }

    public function destroy(){
        Auth::logout();
        return Inertia::location('/login');
    }
}
