<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Transaction;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\Facades\Auth;

class CashierController extends Controller
{
    public function getTransaction() {

    }

    public function getAllDonors(Request $request) {
        $page = $request['filter']['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        $user = User::where('role', 'user');

        if ($request['filter']['name'] != null) $user->where("name", 'LIKE', '%' . $request['filter']['name'] . '%');

        return $user->paginate($request['filter']['per_page']);
    }

    public function getUserTransaction(Request $request) {
        $page = $request['filter']['page'];

        Paginator::currentPageResolver(function () use ($page) {
            return $page;
        });

        $transaction = Transaction::query();

        return $transaction->where('user_id', $request['filter']['user_id'])->with('vihara', 'user', 'paymentType')->paginate($request['filter']['per_page']);
    }

    public function getTransactionDetail(Request $request) {
        return Transaction::where('id', $request['filter']['transaction_id'])->first();
    }

    public function approveTransaction(Request $request) {
        $transaction = Transaction::find($request['id']);

        $transaction->update([
            'user_id' => $transaction->user_id,
            'vihara_id' => $request['vihara_id'],
            'payment_type_id' => $request['payment_type_id'],
            'accepted_by_admin_id' => Auth::user()->id,
            'nominal' => $request['nominal'],
            'donors_name' => $request['donors_name'],
            'is_payment_success' => true
        ]);

        return 1;
    }

    public function checkTransaction(Request $request) {
        $transaction = Transaction::find($request['id']);

        if($transaction == null) return 0;
        else return 1;
    }
}
