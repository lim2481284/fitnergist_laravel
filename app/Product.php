<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	protected $primaryKey = 'productID';
    protected $fillable = ['name', 'img_url','description','price','quantity'];
	protected $table = 'products';
}
