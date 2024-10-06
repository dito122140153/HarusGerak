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


Route::get('/predashboard', function () {
    return Inertia::render('Predashboard');
})->middleware(['auth', 'verified'])->name('predashboard');

Route::get('/beginner', function () {
    return Inertia::render('Beginner');
})->middleware(['auth', 'verified'])->name('beginner');

Route::get('/intermediate', function () {
    return Inertia::render('Intermediate');
})->middleware(['auth', 'verified'])->name('intermediate');

Route::get('/advance', function () {
    return Inertia::render('Advance');
})->middleware(['auth', 'verified'])->name('advance');

Route::get('/choosetraining', function () {
    return Inertia::render('Choosetraining');
})->middleware(['auth', 'verified'])->name('choosetraining');

Route::get('/bmi', function () {
    return Inertia::render('Bmi');
})->middleware(['auth', 'verified'])->name('bmi');

Route::get('/tracker', function () {
    return Inertia::render('Tracker');
})->middleware(['auth', 'verified'])->name('tracker');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

// Route::middleware('auth')->group(function () {
//     Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//     // Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//     Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    
    

//     Route::post('/profile/store', [ProfileController::class, 'store'])->name('profile.store');
//     Route::get('/profile/store', function () {
//     // routes/web.php
    
//     Route::post('/profile/update', [ProfileController::class, 'update'])->name('profile.update');
//     Route::get('/profile/update', function () {
//         return view ('test');
//     });

});

require __DIR__.'/auth.php';

