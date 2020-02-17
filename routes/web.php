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

Route::get('/login', 'VueController@loginView');
Route::get('/admin/user', 'VueController@loginView');
Route::get('/admin/transaction', 'VueController@loginView');
Route::get('/admin/transaction-type', 'VueController@loginView');
Route::get('/admin/vihara', 'VueController@loginView');


