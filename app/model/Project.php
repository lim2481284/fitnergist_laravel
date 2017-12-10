<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
  //relationship
  public function Student()
  {
    return $this->belongsTo('App\Student');
  }

  public function Lecturers()
  {
    return $this->belongsTo('App\Lecturers');
  }

  public function Marks()
  {
    return $this->hasOne('App\Marks');
  }
}
