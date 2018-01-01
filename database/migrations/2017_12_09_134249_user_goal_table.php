<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserGoalTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_goal', function (Blueprint $table) {
            $table->increments('goalID');
			$table->string('goal_condition',150);
			$table->string('description',150);
            $table->integer('userID')->unsigned();
			$table->integer('status')->unsigned();
			$table->integer('verified')->unsigned();
      $table->integer('notification')->unsigned()->default(0);
			$table->double('goal_value');
			$table->double('current_value');
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
        Schema::dropIfExists('user_goal');
    }
}
