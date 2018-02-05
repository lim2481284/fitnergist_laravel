<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tracking_history extends Model
{
		protected $primaryKey = 'historyID';
    protected $fillable =['userID', 'height','weight','water','visceral','fat','bmr','pr'];
		protected $table = 'tracking_history';
}
