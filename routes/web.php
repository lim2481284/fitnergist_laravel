<?php


Route::get('/', function () {
	
    return view("auth/register");
});

Route::get('/user', function () {
	
    return view("dashboard_user/dashboard_user");
});



/*

	Dashboard routing 

*/

Route::get('/dashboard', function () {
	
    return view("dashboard");
});

Route::get('/product', function () {
	
    return view("product");
});

Route::get('/forum', function () {
	
    return view("forum");
});



Route::get('/tracking', function () {
	
    return view("tracking");
});

Route::get('/fitcamp', function () {
	
    return view("fitcamp");
});

Route::get('/trackinghistory', function () {
	
    return view("trackingHistory");
});

Route::get('/redeem/history', function () {
	
    return view("redeem_history");
});

Route::get('/challenge', function () {
	
    return view("challenge");
});

Route::get('/achievement', function () {
	
    return view("achievement");
});

Route::get('/ranking', function () {
	
    return view("ranking");
});

Route::get('/redeem', function () {
	
    return view("redeem");
});



//Auth::routes();

