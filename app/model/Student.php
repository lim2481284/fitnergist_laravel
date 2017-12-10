<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
  protected $fillable = [
    'studentID'
  ];

  //relationship

  public function Project()
  {
    return $this->belongsTo('App\Project');
  }
}
