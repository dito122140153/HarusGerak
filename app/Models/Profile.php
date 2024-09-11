<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    use HasFactory;
    protected $table = 'profile';
    protected $fillable = ['user_id','jenis_kelamin', 'umur', 'tinggi', 'berat','bmi', 'body_fat_percentage'];
    protected $hidden = ['created_at', 'updated_at'];
}