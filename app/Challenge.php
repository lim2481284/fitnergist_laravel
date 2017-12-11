<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Challenge extends Model
{
	protected $primaryKey = 'challengeID';
    protected $fillable = ['title', 'img_url','description','score_point'];
	protected $table = 'challenge';
}
