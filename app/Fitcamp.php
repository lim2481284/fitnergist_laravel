<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fitcamp extends Model
{
	protected $primaryKey = 'fitcampID';
    protected $fillable = ['img_url', 'description','title','location','limit','expired_date','start_date','end_date'];
	protected $table = 'fitcamp';
}
