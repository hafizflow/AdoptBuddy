<?php
namespace App\Http\Controllers;

use App\Http\Middleware\IsAdmin;
use App\Models\Post;
use App\Models\Application;
use App\Models\PostImage;
use Illuminate\Http\Request;
use Inertia\Inertia;


class ProfileController extends Controller
{
    public function index()
    {

      $user = auth()->user();
        $applications = Application::latest()->where('user_id', $user->id)->get();
        return Inertia::render('userProfile/userProfile', [
            'adoptionApplications' => $applications,
        ]);

    }

}

?>