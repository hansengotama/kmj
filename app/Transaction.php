<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'user_id', 'vihara_id', 'payment_type_id', 'accepted_by_admin_id', 'is_email_sent', 'is_payment_success', 'nominal'
    ];

    public function vihara() {
        return $this->hasOne(Vihara::class);
    }

    public function paymentType() {
        return $this->hasOne(PaymentType::class);
    }

    public function user() {
        return $this->hasOne(User::class);
    }

    public function acceptedByAdmin() {
        return $this->hasOne(User::class);
    }
}
