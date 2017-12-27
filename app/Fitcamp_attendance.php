<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitcamp_attendance extends Model
{
    protected $fillable = ['userID','fitcampID'];
    protected $table = 'fitcamp_attendance';
}
