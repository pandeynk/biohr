<?php

namespace app\Models;

use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    protected $table = 'students';

    protected $fillable = ['name', 'email', 'school', 'class', 'status'];
}
