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

    private function calculateBMI($height, $weight)
    {
        if ($height > 0) {
            $heightInMeters = $height / 100; // Convert height from cm to meters
            return $weight / ($heightInMeters * $heightInMeters);
        }
        return null;
    }

    private function calculateBodyFatPercentage($bmi, $age, $gender)
    {
        if ($gender === 'Male') {
            return 1.20 * $bmi + 0.23 * $age - 16.2;
        } elseif ($gender === 'Female') {
            return 1.20 * $bmi + 0.23 * $age - 5.4;
        }
        return null; // Handle other or unknown gender cases if necessary
    }

    private function categorizeBodyFatPercentage($bodyFatPercentage, $gender)
    {
        if ($gender === 'Male') {
            if ($bodyFatPercentage < 6) {
                return 'Essential Fat';
            } elseif ($bodyFatPercentage >= 6 && $bodyFatPercentage <= 13) {
                return 'Athletes';
            } elseif ($bodyFatPercentage >= 14 && $bodyFatPercentage <= 17) {
                return 'Fitness';
            } elseif ($bodyFatPercentage >= 18 && $bodyFatPercentage <= 24) {
                return 'Average';
            } else {
                return 'Obese';
            }
        } elseif ($gender === 'Female') {
            if ($bodyFatPercentage < 14) {
                return 'Essential Fat';
            } elseif ($bodyFatPercentage >= 14 && $bodyFatPercentage <= 20) {
                return 'Athletes';
            } elseif ($bodyFatPercentage >= 21 && $bodyFatPercentage <= 24) {
                return 'Fitness';
            } elseif ($bodyFatPercentage >= 25 && $bodyFatPercentage <= 31) {
                return 'Average';
            } else {
                return 'Obese';
            }
        }
        return 'Unknown'; // Handle other or unknown gender cases if necessary
    }

    public function store(Request $request)
    {
        $request->validate([
            'jenis_kelamin' => 'required|string|max:6',
            'umur' => 'required|integer|min:0|max:120',
            'tinggi' => 'required|numeric|min:30|max:300',
            'berat' => 'required|numeric|min:1|max:500',
        ]);


        $profile = Profile::updateOrCreate([
            'user_id' => auth()->id(),
        ],[
            'jenis_kelamin' => $request->jenis_kelamin,
            'umur' => $request->umur,
            'tinggi' => $request->tinggi,
            'berat' => $request->berat,
        ]);

        return response()->json($profile);
    }

    public function show()
    {
        $user = Auth::user(); 
        $bmi = $this->calculateBMI($user->profile->tinggi, $user->profile->berat);
        $bodyFatPercentage = $this->calculateBodyFatPercentage($bmi, $user->profile->umur, $user->profile->jenis_kelamin);
        $bodyFatCategory = $this->categorizeBodyFatPercentage($bodyFatPercentage, $user->profile->jenis_kelamin);

        $response = [
            'id' => $user->id,
            'name' => $user->name,
            'jenis_kelamin' => $user->profile->jenis_kelamin ?? null,
            'umur' => $user->profile->umur ?? null,
            'tinggi' => $user->profile->tinggi ?? null,
            'berat' => $user->profile->berat ?? null,
            'body_fat_category' => $bodyFatCategory ,
        ];

        return response()->json($response);
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