<?php

namespace Database\Seeders;

use App\Models\Exercise;
use App\Models\Workout;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ExerciseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $absWorkout = Workout::firstWhere('title', 'Abs');
        $cardioWorkout = Workout::firstWhere('title', 'Cardio Blast');
        $strengthWorkout = Workout::firstWhere('title', 'Strength Training');

        // Create exercises for Abs workout
        Exercise::create([
            'workout_id' => $absWorkout->id,
            'name' => 'Crunches',
            'description' => 'Perform crunches to target your abs.',
            'gif' => 'path/to/crunches.gif',
        ]);

        Exercise::create([
            'workout_id' => $absWorkout->id,
            'name' => 'Planks',
            'description' => 'Hold a plank position for core stability.',
            'gif' => 'path/to/planks.gif',
        ]);

        // Create exercises for Cardio Blast workout
        Exercise::create([
            'workout_id' => $cardioWorkout->id,
            'name' => 'Jumping Jacks',
            'description' => 'Do jumping jacks for a full-body cardio workout.',
            'gif' => 'path/to/jumping_jacks.gif',
        ]);

        Exercise::create([
            'workout_id' => $cardioWorkout->id,
            'name' => 'Burpees',
            'description' => 'Perform burpees to get your heart rate up.',
            'gif' => 'path/to/burpees.gif',
        ]);

        // Create exercises for Strength Training workout
        Exercise::create([
            'workout_id' => $strengthWorkout->id,
            'name' => 'Push-Ups',
            'description' => 'Build upper body strength with push-ups.',
            'gif' => 'path/to/pushups.gif',
        ]);

        Exercise::create([
            'workout_id' => $strengthWorkout->id,
            'name' => 'Squats',
            'description' => 'Strengthen your legs with squats.',
            'gif' => 'path/to/squats.gif',
        ]);
    }
}

