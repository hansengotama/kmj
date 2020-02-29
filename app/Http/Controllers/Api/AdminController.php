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
        $page = $request['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        $user = User::query();

        if($request['filter']['name'] != null) $user->where("name", 'LIKE', '%'.$request['filter']['name'].'%');

        return $user->paginate($request['per_page']);
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
            'name' => $request['name']
        ]);

        return 1;
    }

    public function addPaymentType(Request $request)
    {
        return PaymentType::create([
            "name" => $request['name']
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
        $page = $request['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        return Transaction::paginate($request['per_page']);
    }

}
