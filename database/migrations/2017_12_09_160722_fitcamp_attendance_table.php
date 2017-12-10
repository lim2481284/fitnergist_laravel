<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FitcampAttendanceTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {	
        Schema::create('fitcamp_attendance', function (Blueprint $table) {
            $table->integer('fitcampID')->unsigned();
			$table->integer('userID')->unsigned();
			$table->dateTime('updated_at');
			$table->dateTime('created_at');
        });		
		
		
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fitcamp_attendance');
    }
}
