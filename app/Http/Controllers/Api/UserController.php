<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\PaymentType;
use App\Transaction;
use App\User;
use App\Vihara;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Request $request)
    {
        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['phone_number']),
            'role' => "user",
            'phone_number' => $request['phone_number'],
            'npwp' => $request['npwp']
        ]);
    }

    public function checkUserFomAccessToken()
    {
        return Auth::user();
    }

    public function userCheck(Request $request)
    {
        if($request['email']) {
            $user = User::where("email", $request['email'])->first();
            if($user == null) return 0;
            else {
                if($request['id'] == $user->id) {
                    return 0;
                }else return 1;
            }
        }

        if($request['phone_number']) {
            $user = User::where("phone_number", $request['phone_number'])->first();
            if($user == null) return 0;
            else {
                if($request['id'] == $user->id) {
                    return 0;
                }else return 1;
            }
        }
    }

    public function getPaymentType()
    {
        return PaymentType::get();
    }

    public function getVihara()
    {
        return Vihara::get();
    }

    public function createTransaction(Request $request) {
        return Transaction::create([
            'user_id' => Auth::user()->id,
            'vihara_id' => $request->vihara_id,
            'payment_type_id' => $request->payment_type_id,
            'donors_name' => $request->donors_name,
            'nominal' => $request->nominal,
        ]);
    }

    public function getTransaction() {
        $user_id = Auth::user()->id;

        return Transaction::where('user_id', $user_id)->with('vihara', 'user', 'paymentType')->get();
    }

    public function getTransactionDetail($transaction_id) {
        return Transaction::where('id', $transaction_id)->with('vihara', 'paymentType', 'user')->first();
    }
}
