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
  			$table->string('password',150);
  			$table->string('name',150)->nullable($value = true);	;
  			$table->string('email',150)->unique();
  			$table->string('address',150)->nullable($value = true);	;
  			$table->string('gender',150)->nullable($value = true);	;
  			$table->string('username',150)->unique();
        $table->string('contact',150)->nullable($value = true);	;
        $table->integer('age')->unsigned()->nullable($value = true);	;
  			$table->integer('roleID')->unsigned()->default(1);
        $table->integer('point')->unsigned()->default(0);
        $table->double('exp')->unsigned()->default(0);
        $table->integer('level')->unsigned()->default(1);
  			$table->integer('profiled')->unsigned()->default(0);
  			$table->dateTime('updated_at');
  			$table->string('api_token', 60)->unique()->nullable();
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
