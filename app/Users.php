<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
	
    protected $fillable = [
		'img_url', 'userPass' ,'name' ,'email', 'age', 'roleId', 'address', 'gender', 'contact', 'username' ,'profiled'
	];
	protected $primaryKey = 'userID';
	protected $table = 'users';
}
