<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Achievement extends Model
{
	protected $primaryKey = 'achievementID';
    protected $fillable = ['description', 'img_url','title','score_point'];
	protected $table = 'achievement';
}
