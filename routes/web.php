<?php


Route::get('/', function () {
    return view("homepage");
});


Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

