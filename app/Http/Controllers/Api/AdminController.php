<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\PaymentType;
use App\Transaction;
use App\User;
use App\Vihara;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function getAllUser(Request $request)
    {
        $page = $request['filter']['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        $user = User::query();

        if ($request['filter']['name'] != null) $user->where("name", 'LIKE', '%' . $request['filter']['name'] . '%');

        return $user->paginate($request['filter']['per_page']);
    }

    public function findUser($id)
    {
        return User::where("id", $id)->first();
    }

    public function deleteUser($id)
    {
        $user = User::find($id);
        $user->delete();

        return 1;
    }

    public function addUser(Request $request)
    {
        return User::create([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['phone_number']),
            'role' => $request['role'],
            'phone_number' => $request['phone_number'],
            'npwp' => $request['npwp']
        ]);
    }

    public function userCheck(Request $request)
    {
        if ($request['email']) {
            $user = User::where("email", $request['email'])->first();
            if ($user == null) return 0;
            else {
                if ($request['id'] == $user->id) {
                    return 0;
                } else return 1;
            }
        }

        if ($request['phone_number']) {
            $user = User::where("phone_number", $request['phone_number'])->first();
            if ($user == null) return 0;
            else {
                if ($request['id'] == $user->id) {
                    return 0;
                } else return 1;
            }
        }

    }

    public function updateUser(Request $request)
    {
        $user = User::find($request['id']);

        $user->update([
            'name' => $request['name'],
            'email' => $request['email'],
            'password' => Hash::make($request['phone_number']),
            'role' => $request['role'],
            'phone_number' => $request['phone_number'],
            'npwp' => $request['npwp']
        ]);

        return 1;
    }

    public function getAllPaymentType(Request $request)
    {
        $page = $request['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        return PaymentType::paginate($request['per_page']);
    }

    public function findPaymentType($id)
    {
        return PaymentType::where('id', $id)->first();
    }

    public function deletePaymentType($id)
    {
        $paymentType = PaymentType::find($id);

        $paymentType->delete();

        return 1;
    }

    public function updatePaymentType(Request $request)
    {
        $paymentType = PaymentType::find($request['id']);
        $paymentType->update([
            'name' => $request['name'],
            'is_installment' => $request['is_installment']
        ]);

        return 1;
    }

    public function addPaymentType(Request $request)
    {
        return PaymentType::create([
            "name" => $request['name'],
            "is_installment" => $request['is_installment']
        ]);
    }

    public function getAllVihara(Request $request)
    {
        $page = $request['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        return Vihara::paginate($request['per_page']);
    }

    public function findVihara($id)
    {
        return Vihara::where('id', $id)->first();
    }

    public function deleteVihara($id)
    {
        $vihara = Vihara::find($id);
        $vihara->delete();

        return 1;
    }

    public function updateVihara(Request $request)
    {
        $vihara = Vihara::find($request['id']);

        $vihara->update([
            'name' => $request['name'],
            'limit' => $request['limit'],
            'is_active' => $request['is_active']
        ]);

        return 1;
    }

    public function addVihara(Request $request)
    {
        return Vihara::create([
            'name' => $request['name'],
            'limit' => $request['limit'],
            'is_active' => $request['is_active']
        ]);
    }

    public function getAllTransaction(Request $request)
    {
        $page = $request['filter']['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        $transaction = Transaction::query();

        if ($request['filter']['donors_name'] != null) $transaction->where("donors_name", 'LIKE', '%' . $request['filter']['donors_name'] . '%');

        return $transaction->with('vihara', 'user', 'paymentType')->paginate($request['filter']['per_page']);
    }

    public function findTransaction($id)
    {
        return Transaction::where('id', $id)->first();
    }

    public function deleteTransaction($id)
    {
        $transaction = Transaction::find($id);
        $transaction->delete();

        return 1;
    }

    public function updateTransaction(Request $request)
    {
        $transaction = Transaction::find($request['id']);

        $transaction->update([
            "user_id" => $transaction->user_id,
            "accepted_by_admin_id" => $transaction->accepted_by_admin_id,
            "is_email_sent" => $transaction->is_email_sent,
            "is_payment_success" => $transaction->is_payment_success,
            "vihara_id" => $request['vihara_id'],
            "payment_type_id" => $request['payment_type_id'],
            "nominal" => $request['nominal'],
            "donors_name" => $request['donors_name']
        ]);

        return 1;
    }

    public function getVihara()
    {
        return Vihara::get();
    }

    public function getPaymentType()
    {
        return PaymentType::get();
    }

}
