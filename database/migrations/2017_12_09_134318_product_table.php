<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ProductTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->increments('productID');
			$table->string('name',150);
			$table->string('img_url',150)->default("default");
			$table->string('description',150);
			$table->double('price');
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
        Schema::dropIfExists('products');
    }
}
