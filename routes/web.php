<?php


/*

	Login routing

*/



Route::get('/', function () {

    return view("login");
});
Route::get('/landing', function () {

    return view("landing");
});




/*

	Dashboard routing

*/
Route::get('/home', 'navigation@dashboard');
Route::get('/profile', 'navigation@profile');
Route::get('/challenge', 'navigation@challenge');
Route::get('/achievement', 'navigation@achievement');
Route::get('/redeem', 'navigation@redeem');
Route::get('/product', 'navigation@product');
Route::get('/fitcamp', 'navigation@fitcamp');
Route::get('/forum', 'navigation@forum');
Route::get('/track', 'navigation@tracking');
Route::get('/ranking', 'navigation@ranking');
Route::get('/attendance', 'navigation@attendance');
Route::get('/verify', 'navigation@verifyChallenge');

Route::get('/trackinghistory', function () {

    return view("trackingHistory");
});

Route::get('/redeem/history', function () {

    return view("redeem_history");
});



//Auth::routes();
