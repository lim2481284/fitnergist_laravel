<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lecturers extends Model
{
  protected $fillable = [
    'staffID'
  ];
  public function Project()
  {
    return $this->hasMany('App\Project');
  }
}
