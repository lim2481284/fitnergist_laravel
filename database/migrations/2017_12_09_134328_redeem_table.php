<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class RedeemTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('redeem', function (Blueprint $table) {
            $table->increments('redeemID');
			$table->string('img_url',150);
			$table->string('description',150);
			$table->string('title',150);
			$table->double('point');
            $table->integer('quantity')->unsigned();
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
        Schema::dropIfExists('redeem');
    }
}
