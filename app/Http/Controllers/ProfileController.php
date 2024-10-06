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
    public function update(Request $request): RedirectResponse
{
    // Validasi input
    $request->validate([
        'gender' => 'required',
        'age' => 'required|integer',
        'weight' => 'required|numeric',
        'height' => 'required|numeric',
        'physical_activity' => 'required|string',
        'photo' => 'sometimes|nullable|string', // Update photo jika tersedia
    ]);

    try {
        // Ambil profil berdasarkan user_id
        $profile = Profile::where('user_id', Auth::user()->id)->first();

        if ($profile) {
            // Update profil
            $profile->update([
                'gender' => $request->gender,
                'age' => $request->age,
                'weight' => $request->weight,
                'height' => $request->height,
                'physical_activity' => $request->physical_activity,
                'photo' => $request->photo ?? $profile->photo, // Jika tidak ada foto baru, gunakan foto yang lama
            ]);
        } else {
            // Jika profil tidak ditemukan, Anda dapat memutuskan apakah ingin membuat profil baru atau menampilkan error
            return redirect()->back()->withErrors(['error' => 'Profil tidak ditemukan']);
        }
    } catch (\Exception $e) {
        // Tangkap kesalahan dan kembalikan ke halaman sebelumnya dengan error message
        return redirect()->back()->withErrors(['error' => 'Terjadi kesalahan saat memperbarui profil']);
    }

    // Redirect dengan pesan sukses
    return redirect()->route('dashboard')->with('status', 'Profil berhasil diperbarui');
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
