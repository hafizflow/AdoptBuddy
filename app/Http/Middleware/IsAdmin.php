<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Inertia\Inertia;
class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if( !$request->user() || $request->user()->role !== 'admin'){
            return Inertia::location('error')->with('error', 'Unauthorized.');
        }
        return $next($request);
    }
}
