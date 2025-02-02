<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketModel extends Model
{
    use HasFactory;

    protected $table = 'ticket';

    protected $fillable = [
        'name',
        'email',
        'phone',
        'status',
        'amount_tickets',
        'subject',
        'description',
        'id_user',
    ];

    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'id_user');
    }
}
