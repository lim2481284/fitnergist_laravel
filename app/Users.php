<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticableTrait;

class Users extends \Eloquent implements Authenticatable
{
	use AuthenticableTrait;
	
	
    protected $fillable = [
		'img_url', 'password' ,'name' ,'email', 'age', 'roleId', 'address', 'gender', 'contact', 'username' ,'profiled'
	];
	protected $primaryKey = 'userID';
	protected $table = 'users';
	
	//To generate token for api token
	public function generateToken()
    {
        $this->api_token = str_random(60);
        $this->save();
        return $this->api_token;
    }
}
