<?php

namespace Database\Seeders;

use App\Models\TrainingDay;
use App\Models\User;
use App\Models\Workout;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TrainingDaySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Fetch all users and workouts
         $users = User::all();
         $workouts = Workout::all();
 
         // List of possible days
         $possibleDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
 
         // Loop through each user
         foreach ($users as $user) {
             // Assign training days for each workout
             foreach ($workouts as $workout) {
                 // Randomly select a subset of days (e.g., 3 random days)
                 $selectedDays = collect($possibleDays)->random(3)->toArray();
 
                 // Create training days entry
                 TrainingDay::updateOrCreate(
                     [
                         'user_id' => $user->id,
                         'workout_id' => $workout->id,
                     ],
                     [
                         'days' => json_encode($selectedDays)
                     ]
                 );
             }
         }
     
    }
}
