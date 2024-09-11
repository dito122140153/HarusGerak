<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('workout_lists', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('goal');
            $table->string('schedule');
            $table->string('difficulty');
            $table->timestamps();
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('workout_lists');
    }
};
