<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('userID');
			$table->string('img_url',150)->nullable($value = true);	;
			$table->string('user_pass',150);
			$table->string('name',150)->nullable($value = true);	;
			$table->string('email',150);
			$table->string('address',150)->nullable($value = true);	;
			$table->string('gender',150)->nullable($value = true);	;
			$table->string('username',150);
			$table->string('contact',150)->nullable($value = true);	;
            $table->integer('age')->unsigned()->nullable($value = true);	;
			$table->integer('roleID')->unsigned();
			$table->integer('profiled')->unsigned()->default(0);
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
        Schema::dropIfExists('users');
    }
}
