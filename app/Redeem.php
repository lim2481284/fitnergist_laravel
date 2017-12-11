<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Redeem extends Model
{
	protected $primaryKey = 'redeemID';
    protected $fillable = ['description', 'img_url','title','point','quantity'];
	protected $table = 'redeem';
}
