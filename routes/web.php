<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorkoutController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

    Route::get('/workouts', [WorkoutController::class, 'index'])->name('workouts.index'); // Show levels
    Route::get('/workouts/{level}', [WorkoutController::class, 'listByLevel'])->name('workouts.level'); // Show workouts by level
    Route::get('/workouts/{level}/{program}', [WorkoutController::class, 'showProgram'])->name('workouts.program'); // Show specific program


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/profile/store', [ProfileController::class, 'store'])->name('profile.store');
    Route::get('/profile/store', function () {
    // routes/web.php
    
    Route::post('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
    Route::get('/profile/update', function () {
        return view ('test');
    });
});

require __DIR__.'/auth.php';
