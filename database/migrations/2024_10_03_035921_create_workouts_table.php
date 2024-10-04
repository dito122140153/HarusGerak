<?php

// database/migrations/xxxx_xx_xx_create_workouts_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateWorkoutsTable extends Migration
{
    public function up()
    {
        Schema::create('workouts', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->enum('level', ['beginner', 'intermediate', 'advanced']);
            $table->text('description')->nullable();
            $table->string('image')->nullable(); // Image path for each workout
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('workouts');
    }
}
