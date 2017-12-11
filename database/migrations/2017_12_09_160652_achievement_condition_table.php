<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AchievementConditionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
		Schema::create('achievement_condition', function (Blueprint $table) {
            $table->increments('conditionID');
            $table->integer('achievementID')->unsigned();
			$table->double('goal_value')->unsigned();
			$table->string('description',150);
			$table->string('goal_condition',150);
			$table->string('goal_operate',150);
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
        Schema::dropIfExists('achievement_condition');
    }
}
