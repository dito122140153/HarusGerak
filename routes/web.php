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


// =====================================
// BEGINNER
// =====================================
Route::get('/beginner', function () {
    return Inertia::render('Beginner');
})->middleware(['auth', 'verified'])->name('beginner');

Route::get('/beginner/abs-training', function () {
    return Inertia::render('Beginner/AbsTraining/Page');
})->middleware(['auth', 'verified'])->name('beginner.abs-training');

Route::get('/beginner/arms-training', function () {
    return Inertia::render('Beginner/ArmsTraining/Page');
})->middleware(['auth', 'verified'])->name('beginner.arm-training');

Route::get('/beginner/chest-training', function () {
    return Inertia::render('Beginner/ChestTraining/Page');
})->middleware(['auth', 'verified'])->name('beginner.chest-training');

Route::get('/beginner/legs-training', function () {
    return Inertia::render('Beginner/LegsTraining/Page');
})->middleware(['auth', 'verified'])->name('beginner.leg-training');


// =====================================
// INTERMEDIATE
// =====================================
Route::get('/intermediate', function () {
    return Inertia::render('Intermediate');
})->middleware(['auth', 'verified'])->name('intermediate');

Route::get('/intermediate/abs-training', function () {
    return Inertia::render('Intermediate/AbsTraining/Page');
})->middleware(['auth', 'verified'])->name('intermediate.abs-training');

Route::get('/intermediate/arms-training', function () {
    return Inertia::render('Intermediate/ArmsTraining/Page');
})->middleware(['auth', 'verified'])->name('intermediate.arm-training');

Route::get('/intermediate/chest-training', function () {
    return Inertia::render('Intermediate/ChestTraining/Page');
})->middleware(['auth', 'verified'])->name('intermediate.chest-training');

Route::get('/intermediate/legs-training', function () {
    return Inertia::render('Intermediate/LegsTraining/Page');
})->middleware(['auth', 'verified'])->name('intermediate.leg-training');


// =====================================
// ADVANCE
// =====================================
Route::get('/advance', function () {
    return Inertia::render('Advance');
})->middleware(['auth', 'verified'])->name('advance');

Route::get('/advance/abs-training', function () {
    return Inertia::render('Advance/AbsTraining/Page');
})->middleware(['auth', 'verified'])->name('advance.abs-training');

Route::get('/advance/arms-training', function () {
    return Inertia::render('Advance/ArmsTraining/Page');
})->middleware(['auth', 'verified'])->name('advance.arm-training');

Route::get('/advance/chest-training', function () {
    return Inertia::render('Advance/ChestTraining/Page');
})->middleware(['auth', 'verified'])->name('advance.chest-training');

Route::get('/advance/legs-training', function () {
    return Inertia::render('Advance/LegsTraining/Page');
})->middleware(['auth', 'verified'])->name('advance.leg-training');


Route::get('/{level}/abs-training', function ($level) {
    return Inertia::render(ucfirst($level) . 'AbsTraining', [
        'exercise' => 'Abs Training'
    ]);
})->middleware(['auth', 'verified'])->name('{level}.abs-training');

Route::get('/choosetraining', function () {
    return Inertia::render('Choosetraining');
})->middleware(['auth', 'verified'])->name('choosetraining');

Route::get('/bmi', function () {
    return Inertia::render('Bmi');
})->middleware(['auth', 'verified'])->name('bmi');

Route::get('/tracker', function () {
    return Inertia::render('Tracker');
})->middleware(['auth', 'verified'])->name('tracker');

Route::get('/profile', function () {
    return Inertia::render('Profile/Edit');
})->middleware(['auth', 'verified'])->name('profile');



// route::get('/profile/show' , [ProfileController::class, 'show']);

Route::middleware('auth')->group(function () {
    // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    route::post('profile.store' , [ProfileController::class, 'store']);
    route::get('/profile' , [ProfileController::class, 'show'])->name('profile.show');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');


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

