<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users_achievement extends Model
{
	protected $primaryKey = 'userAchieveID';
    protected $fillable = ['userID', 'achieveID','notification'];
	protected $table = 'user_achievement';
}
