<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/login', 'VueController@view');
Route::get('/register', 'VueController@view');
Route::get('/register-verification', 'VueController@view');

Route::get('/admin/user', 'VueController@view');
Route::get('/admin/add-user', 'VueController@view');
Route::get('/admin/edit-user', 'VueController@view');

Route::get('/admin/transaction', 'VueController@view');

Route::get('/admin/vihara', 'VueController@view');
Route::get('/admin/add-vihara', 'VueController@view');
Route::get('/admin/edit-vihara', 'VueController@view');

Route::get('/admin/payment-type', 'VueController@view');
Route::get('/admin/add-payment-type', 'VueController@view');
Route::get('/admin/edit-payment-type', 'VueController@view');

Route::get('/', 'VueController@view');
Route::get('/user/home', 'VueController@view');
Route::get('/user/donation-form', 'VueController@view');
Route::get('/user/vihara-form', 'VueController@view');
Route::get('/user/verification-form', 'VueController@view');
Route::get('/user/how-to-use', 'VueController@view');
Route::get('/user/how-to-pay', 'VueController@view');

Route::get('/cashier/home', 'VueController@view');
