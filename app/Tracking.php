<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tracking extends Model
{
    protected $fillable = ['userID', 'height','weight','water','visceral','fat','bmr','pr'];
	protected $table = 'attribute';
}
