<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Forum extends Model
{
	protected $primaryKey = 'forumID';
    protected $fillable = ['content', 'img_url','title','userID'];
	protected $table = 'forum';
}
