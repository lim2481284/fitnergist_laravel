<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class FitcampTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fitcamp', function (Blueprint $table) {
			
            $table->increments('fitcampID');
			$table->string('img_url',150);
			$table->string('description',150);
			$table->string('title',150);
			$table->string('location',150);
			$table->double('price');	
            $table->integer('limit')->unsigned()->nullable($value = true);						
			$table->string('start_date');
			$table->string('end_date');
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
        Schema::dropIfExists('fitcamp');
    }
}
