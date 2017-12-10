<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserAchievementTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_achievement', function (Blueprint $table) {
			
            $table->increments('userAchieveID');
            $table->integer('userID')->unsigned();
			$table->integer('achieveID')->unsigned();
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
        Schema::dropIfExists('user_achievement');
    }
}
