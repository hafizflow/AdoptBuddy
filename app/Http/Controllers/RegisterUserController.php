<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
class RegisterUserController extends Controller
{
    public function create()
    {
        return Inertia::render('register/Register');
    }

    public function store()
    {
        // validate
        $attributes = request()->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);
        // create user
        $user = User::create($attributes);
        // login the user
        Auth::login($user);
        // redirect
        return Inertia::location('/');
    }
}
