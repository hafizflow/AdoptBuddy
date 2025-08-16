<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Application;
use Inertia\Inertia;


class AdoptController extends Controller
{

    public function create(Request $request)
    {
        $data = [
            'name' => $request->name,
            'pet_id' => $request->pet_id,
            'user_id' => auth()->user()->id,
            'status' => 'pending',
            'message' => $request->message,
            'phone' => $request->phone,
            'pet_before' => $request->pet_before,
            'applied_pet_name' => $request->applied_pet_name,
            'address' => $request->address,
            'email' => $request->email,

        ];

        $application = Application::create($data);

        return Inertia::render('home/Home', [
            'message' => 'Adoption request submitted successfully!',
        ]);
    }


    public function update($action, Request $request)
    {
        $data = $request->validate([
            'action' => 'required|in:pending,accepted,rejected',
        ]);

        $application = Application::findOrFail($action);

        $application->status = $data['action'];
        $application->save();

        return redirect()->route('admin')->with('message', 'Application status updated successfully!');
    }



}
