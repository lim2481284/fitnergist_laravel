<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class ForumCommentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('forum_comment', function (Blueprint $table) {
            $table->increments('forumID');
			$table->string('content',150);
            $table->integer('commentID')->unsigned();
			$table->integer('userId')->unsigned();
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
        Schema::dropIfExists('forum_comment');
    }
}
