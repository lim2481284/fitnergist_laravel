<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users_challenge extends Model
{
	protected $primaryKey = 'userChallengeID';
    protected $fillable = ['userID', 'challengeID','notification'];
	protected $table = 'user_challenge';
}
