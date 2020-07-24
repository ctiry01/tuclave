<?php

use Illuminate\Support\Facades\Route;

//Public routes
Route::get('/', 'PublicController@index')->name('welcome');

Route::post('/new-password', 'PasswordController@GeneratePassword');
