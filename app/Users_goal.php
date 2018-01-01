<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users_goal extends Model
{
	protected $primaryKey = 'goalID';
    protected $fillable = ['goal_condition', 'description','userID','status','verified','goal_value','current_value','notification'];
	protected $table = 'user_goal';
}
