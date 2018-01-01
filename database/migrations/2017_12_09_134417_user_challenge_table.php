<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserChallengeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_challenge', function (Blueprint $table) {
            $table->increments('userChallengeID');
            $table->integer('userID')->unsigned();
			$table->integer('challengeID')->unsigned();
			$table->dateTime('updated_at');
			$table->dateTime('created_at');
                  $table->integer('notification')->unsigned()->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('user_challenge');
    }
}
