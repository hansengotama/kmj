<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $fillable = [
        'user_id', 'vihara_id', 'payment_type_id', 'accepted_by_admin_id', 'is_email_sent', 'is_payment_success', 'nominal', 'donors_name'
    ];

    public function vihara() {
        return $this->belongsTo(Vihara::class);
    }

    public function paymentType() {
        return $this->belongsTo(PaymentType::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function acceptedByAdmin() {
        return $this->belongsTo(User::class);
    }
}
