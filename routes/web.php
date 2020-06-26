<?php

use Illuminate\Routing\Route as RoutingRoute;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;


Route::get('/', function () {
    return view('app');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');


