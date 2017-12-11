<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitcamp_register extends Model
{
    protected $fillable = ['userID','fitcampID'];
	protected $table = 'fitcamp_register';
}
