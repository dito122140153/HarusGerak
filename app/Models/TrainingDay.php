<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TrainingDay extends Model
{
    use HasFactory;


    protected $fillable = ['user_id', 'workout_id', 'days'];

    // Cast the 'days' field to an array automatically
    protected $casts = [
        'days' => 'array',
    ];

    // Relationships (optional)
    public function workout(){
        return $this->belongsTo(Workout::class);
    }

    public function user() { 
        return $this->belongsTo(User::class); 
    }
}

