<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ConditionListTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('condition_list', function (Blueprint $table) {
            $table->increments('conditionID');
			$table->string('condition',150);
			$table->string('description',150);
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
        Schema::dropIfExists('condition_list');
    }
}
