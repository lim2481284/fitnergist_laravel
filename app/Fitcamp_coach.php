<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitcamp_coach extends Model
{
    protected $fillable = ['coachID','fitcampID'];
	protected $table = 'fitcamp_coach';
}
