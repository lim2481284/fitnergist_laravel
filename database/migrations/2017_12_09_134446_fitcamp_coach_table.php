<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FitcampCoachTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fitcamp_coach', function (Blueprint $table) {
			$table->dateTime('updated_at');
			$table->dateTime('created_at');
            $table->integer('coachID')->unsigned();
			$table->integer('fitcampID')->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fitcamp_coach');
    }
}
