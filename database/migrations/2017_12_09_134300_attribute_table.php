<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AttributeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('attribute', function (Blueprint $table) {
			$table->double('height')->default(0);
			$table->double('weight')->default(0);
			$table->double('water')->default(0);
			$table->double('visceral')->default(0);
			$table->double('fat')->default(0);
			$table->double('bmr')->default(0);
			$table->double('pr')->default(0);			
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
        Schema::dropIfExists('attribute');
    }
}
