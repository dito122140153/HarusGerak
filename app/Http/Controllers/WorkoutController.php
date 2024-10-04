<?php

namespace App\Http\Controllers;

use App\Models\TrainingDay;
use App\Models\Workout;
use Illuminate\Http\Request;

class WorkoutController extends Controller
{
    // Show workout levels (Beginner, Intermediate, Advanced)
    public function index()
    {
        // Define workout levels
        $levels = ['beginner', 'intermediate', 'advanced'];
        
        // Return levels as JSON
        return response()->json([
            'success' => true,
            'message' => 'Workout levels fetched successfully',
            'data' => $levels
        ]);
    }
    public function storeTrainingDay(Request $request)
    {
        // Validate that the input is an array of days
        $validated = $request->validate([
            'workout_id' => 'required|exists:workouts,id', // Ensure the workout exists
            'days' => 'required|array',
            'days.*' => 'in:Mon,Tue,Wed,Thu,Fri,Sat,Sun', // Ensure valid days
        ]);

        // Assuming the user is authenticated
        $userId = auth()->id();

        // Save or update the workout's training days for the user
        $trainingDays = TrainingDay::updateOrCreate(
            ['user_id' => $userId, 'workout_id' => $validated['workout_id']],
            ['days' => json_encode($validated['days'])]
        );

        return response()->json([
            'message' => 'Training days saved successfully!',
            'data' => $trainingDays
        ]);
    }

    // Retrieve the training days for a specific workout
    public function getTrainingDay($workoutId)
    {
        // Fetch the user's training days for the specified workout
        $trainingDays = TrainingDay::where('user_id', auth()->id())
                        ->where('workout_id', $workoutId)
                        ->first();

        return response()->json([
            'data' => $trainingDays ? json_decode($trainingDays->days) : []
        ]);
    }
    // Show all workouts of a specific level
    public function listByLevel($level)
    {
        // Fetch workouts by level (Beginner, Intermediate, Advanced)
        $workouts = Workout::where('level', $level)->get();

        if ($workouts->isEmpty()) {
            return response()->json([
                'success' => false,
                'message' => 'No workouts found for this level'
            ], 404);
        }

        // Return workouts as JSON
        return response()->json([
            'success' => true,
            'message' => 'Workouts fetched successfully',
            'data' => $workouts
        ]);
    }

    // Show a specific workout program
    public function showProgram($level, $program)
{
    // Find workout by title and level
    $workout = Workout::with('exercise')
        ->where('level', $level)
        ->where('title', $program)
        ->firstOrFail();

    // Fetch the training days for the authenticated user and the workout
    $trainingDays = TrainingDay::where('user_id', auth()->id())
        ->where('workout_id', $workout->id)
        ->first();

    // Include the training days in the workout response
    $workoutData = [
        'workout' => $workout,
        'training_days' => $trainingDays ? json_decode($trainingDays->days) : []
    ];

    // Return specific workout as JSON, along with the training days
    return response()->json([
        'success' => true,
        'message' => 'Workout program fetched successfully',
        'data' => $workoutData
    ]);
}

}
