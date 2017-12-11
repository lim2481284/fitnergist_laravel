<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Achievement_condition extends Model
{
	protected $primaryKey = 'conditionID';
    protected $fillable = ['conditionID','goal_condition', 'achievementID','goal_value','description','goal_operate'];
	protected $table = 'achievement_condition';
}
