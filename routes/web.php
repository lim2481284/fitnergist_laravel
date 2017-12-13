<?php


Route::get('/', function () {
	
    return view("auth/register");
});


Route::get('/user', function () {
	
    return view("dashboard_user/dashboard_user");
});


//Route::post('/login','AuthController@register');
//Route::get('/login','AuthController@displayForm');



Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
