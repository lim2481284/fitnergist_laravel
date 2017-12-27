<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitcamp extends Model
{
	protected $primaryKey = 'fitcampID';
    protected $fillable = ['img_url', 'description','title','location','limit','start_date','end_date','price','point','closed'];
	protected $table = 'fitcamp';
}
