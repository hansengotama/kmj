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
    Route::post('register', 'AuthController@register');

    //Route::group(['middleware' => 'auth:api'], function(){
        Route::get('user', 'AdminController@getAllUser');
        Route::get('user/{id}', 'AdminController@findUser');
        Route::get('user/delete/{id}', 'AdminController@deleteUser');
        Route::post('user/check', 'AdminController@userCheck');
        Route::post('user/create', 'AdminController@addUser');
        Route::post('user/update', 'AdminController@updateUser');

        Route::get('payment-type', 'AdminController@getAllPaymentType');
        Route::get('payment-type/{id}', 'AdminController@findPaymentType');
        Route::get('payment-type/delete/{id}', 'AdminController@deletePaymentType');
        Route::post('payment-type/create', 'AdminController@addPaymentType');
        Route::post('payment-type/update', 'AdminController@updatePaymentType');

        Route::get('vihara', 'AdminController@getAllVihara');
        Route::get('vihara/{id}', 'AdminController@findVihara');
        Route::get('vihara/delete/{id}', 'AdminController@deleteVihara');
        Route::post('vihara/create', 'AdminController@addVihara');
        Route::post('vihara/update', 'AdminController@updateVihara');
    //});

    Route::get('register', 'UserController@register');
    Route::post('asuser/user/check', 'UserController@userCheck');
    Route::get('asuser/payment-type', 'UserController@getPaymentType');
    Route::get('asuser/vihara', 'UserController@getVihara');
});
