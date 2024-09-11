<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\WorkoutList;
use Illuminate\Database\Seeder;

class WorkoutListSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        WorkoutList::create([
            'name' => 'Cardio Blast',
            'description' => 'Intense cardio workout for weight loss.',
            'goal' => 'Weight Loss',
            'schedule' => '3 times a week',
            'difficulty' => 'Intermediate',
        ]);

        WorkoutList::create([
            'name' => 'Strength Training',
            'description' => 'Build muscle and strength with resistance exercises.',
            'goal' => 'Muscle Gain',
            'schedule' => '4 times a week',
            'difficulty' => 'Advanced',
        ]);

        // Add more workout programs as needed...
    }

    }
