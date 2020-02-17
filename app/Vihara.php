<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vihara extends Model
{
    protected $fillable = [
        'name', 'limit', 'is_active'
    ];
}
