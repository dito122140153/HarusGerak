<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkoutList extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'goal',
        'schedule',
        'difficulty',
    ];

    // Hide these fields in JSON responses
    protected $hidden = ['created_at', 'updated_at'];
}
