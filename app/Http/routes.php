<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/student/index', ['uses' => 'StudentController@index']);
Route::get('/student/show/{id}', ['uses' => 'StudentController@show']);
Route::post('/student/store', ['uses' => 'StudentController@store']);
Route::post('/student/update/{id}', ['uses' => 'StudentController@update']);
Route::get('/student/enable/{id}', ['uses' => 'StudentController@activate']);
Route::get('/student/disable/{id}', ['uses' => 'StudentController@deactivate']);
