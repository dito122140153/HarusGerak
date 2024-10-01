<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Profile;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }
    public function store(Request $request): RedirectResponse
    {
        // Validate the incoming request data

            $request->validate([
                'gender' => 'required',
                'age' => 'required',
                'weight' => 'required',
                'height' => 'required',
                'physical_activity' => 'required',
                'photo' => 'required',
            ]);
        try {
        // Create a new Profile instance
        $profile = Profile::create([
            'user_id' => Auth::user()->id,
            'gender' => $request->gender,
            'age' => $request->age,
            'weight' => $request->weight,
            'height' => $request->height,
            'physical_activity' => $request->physical_activity,
            'photo' => $request->photo,
        ]);
    } catch (\Exception $e) {
        return redirect()->route('dashboard');
    }
        // Redirect with a success message
        return redirect()->route('dashboard');
    }
    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
