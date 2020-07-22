<?php

use Illuminate\Support\Facades\Route;

//Public routes
Route::get('/', 'PublicController@index');

Route::post('/new-password', 'PasswordController@GeneratePassword');
