<?php

// database/seeders/WorkoutSeeder.php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Workout;

class WorkoutSeeder extends Seeder
{
    public function run()
    {
        Workout::create([
            'title' => 'Abs',
            'level' => 'beginner',
            'description' => 'A beginner-friendly abs workout.',
            'image' => 'path/to/abs_image.jpg',
        ]);

        Workout::create([
            'title' => 'Cardio Blast',
            'level' => 'beginner',
            'description' => 'A beginner cardio workout to burn calories.',
            'image' => 'path/to/cardio_image.jpg',
        ]);

        Workout::create([
            'title' => 'Strength Training',
            'level' => 'intermediate',
            'description' => 'Build strength with intermediate exercises.',
            'image' => 'path/to/strength_image.jpg',
        ]);
    }
}
