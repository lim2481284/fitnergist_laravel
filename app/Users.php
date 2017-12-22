<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;

class Users extends \Eloquent implements Authenticatable
{
	use AuthenticableTrait;


    protected $fillable = [
		'img_url', 'password' ,'name' ,'email', 'age', 'roleID', 'address', 'gender', 'contact', 'username' ,'profiled','point'
	];
	protected $primaryKey = 'userID';
	protected $table = 'users';

}
