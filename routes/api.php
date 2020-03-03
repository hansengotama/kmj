<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::namespace('Api')->group(function () {
    Route::post('login', 'AuthController@login');
    Route::post('register', 'UserController@register');
    Route::post('asuser/user/check', 'UserController@userCheck');

    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('check/user-from-access-token', 'UserController@checkUserFomAccessToken');
        Route::get('asuser/payment-type', 'UserController@getPaymentType');
        Route::get('asuser/vihara', 'UserController@getVihara');
        Route::post('asuser/create-transaction', 'UserController@createTransaction');
        Route::get('asuser/get-transaction', 'UserController@getTransaction');
        Route::get('asuser/get-transaction-detail/{transaction_id}', 'UserController@getTransactionDetail');

        Route::group(['middleware' => 'checkIsAdmin'], function () {
            Route::get('user', 'AdminController@getAllUser');
            Route::get('user/delete/{id}', 'AdminController@deleteUser');
            Route::post('user/check', 'AdminController@userCheck');
            Route::post('user/create', 'AdminController@addUser');
            Route::post('user/update', 'AdminController@updateUser');

            Route::get('payment-type', 'AdminController@getAllPaymentType');
            Route::get('payment-type/delete/{id}', 'AdminController@deletePaymentType');
            Route::post('payment-type/create', 'AdminController@addPaymentType');
            Route::post('payment-type/update', 'AdminController@updatePaymentType');
            Route::get('payment-type/{id}', 'AdminController@findPaymentType');

            Route::get('transaction', 'AdminController@getAllTransaction');
            Route::get('transaction/delete/{id}', 'AdminController@deleteTransaction');
            Route::post('transaction/update', 'AdminController@updateTransaction');

            Route::get('vihara', 'AdminController@getAllVihara');
            Route::get('vihara/{id}', 'AdminController@findVihara');
            Route::get('vihara/delete/{id}', 'AdminController@deleteVihara');
            Route::post('vihara/create', 'AdminController@addVihara');
            Route::post('vihara/update', 'AdminController@updateVihara');
        });

        Route::group(['middleware' => 'checkIsCashier'], function () {
            Route::get('ascashier/transaction', 'CashierController@getTransaction');
            Route::get('ascashier/donors', 'CashierController@getAllDonors');
            Route::get('ascashier/user-transaction', 'CashierController@getUserTransaction');
            Route::get('ascashier/detail-transaction', 'CashierController@getTransactionDetail');
            Route::post('ascashier/approve-transaction', 'CashierController@approveTransaction');
            Route::post('ascashier/check-transaction', 'CashierController@checkTransaction');

            Route::get('get-vihara', 'AdminController@getVihara');
            Route::get('get-payment-type', 'AdminController@getPaymentType');
            Route::get('transaction/{id}', 'AdminController@findTransaction');
            Route::get('user/{id}', 'AdminController@findUser');
        });
    });
});
