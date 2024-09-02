<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = [
        'titel',
        'description',
        'image',
    ];
    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function Tag()
    {
        return $this->belongsToMany(Tag::class);
    }
}
