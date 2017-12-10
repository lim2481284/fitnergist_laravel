<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TrackingHistoryTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tracking_history', function (Blueprint $table) {  
			$table->integer('userID')->unsigned();
			$table->integer('coachID')->unsigned();
			$table->double('height')->unsigned();
			$table->double('weight')->unsigned();
			$table->double('fat')->unsigned();
			$table->double('water')->unsigned();
			$table->double('visceral')->unsigned();
			$table->double('bmr')->unsigned();
			$table->double('pr')->unsigned();			
            $table->increments('historyID');
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
        Schema::dropIfExists('tracking_history');
    }
}
