<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Marks extends Model
{
  protected $fillable = [
    'project_id'
  ];

  public function Project()
  {
    return $this->belongsTo('App\Project');
  }

}
