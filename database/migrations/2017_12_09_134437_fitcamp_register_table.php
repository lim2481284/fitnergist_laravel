<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FitcampRegisterTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fitcamp_register', function (Blueprint $table) {
			$table->dateTime('updated_at');
			$table->dateTime('created_at');
            $table->integer('fitcampID')->unsigned();
			$table->integer('userID')->unsigned();
      $table->integer('attendance')->unsigned()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fitcamp_register');
    }
}
