<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdminPost extends Model
{
    protected $guarded = [];

    public function images() {
        return $this->hasMany(PetImage::class);
    }
}
