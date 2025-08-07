<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Application;
use Inertia\Inertia;


class AdoptController extends Controller
{

    public function create(Request $request)
    {
        
        $application = Application::create($request->all());

        return Inertia::render('home/Home', [
            'message' => 'Adoption request submitted successfully!',
        ]);
    }

}