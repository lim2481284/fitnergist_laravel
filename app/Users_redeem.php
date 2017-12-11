<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users_redeem extends Model
{
    protected $fillable = ['userID', 'redeemID','quantity'];
	protected $table = 'user_redeem';
}
