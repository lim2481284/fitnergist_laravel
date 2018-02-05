<?php

use Illuminate\Http\Request;
use App\Users;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
*/

  Route::middleware('auth:api')
  ->get('/usera', function (Request $request) {
    return $request->user();
  });

  Route::get('/users', function() {
    return Users::all();
  });
  Route::get('/ranking', function() {

    $user = Users::all()->sortBy("point")->reverse();
    return  array_values($user->toArray());
  });

  Route::post('/users/ranking', 'userController@ranking');
  Route::post('/register', 'Auth\RegisterController@register');
  Route::post('/login', 'Auth\LoginController@login');
  Route::group(['middleware' => ['web']], function () {
    Route::post('/logout', 'Auth\LoginController@logout');
  });
/*
|--------------------------------------------------------------------------
| Other section
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| Redeem section
|--------------------------------------------------------------------------
*/


/*

Redeem API section

*/
Route::get('redeem/total/', 'API\redeemController@getTotal');
Route::get('redeem/', 'API\redeemController@getRedeem');
Route::get('redeem/{id}', 'API\redeemController@findRedeem');
Route::post('redeem/', 'API\redeemController@createRedeem');
Route::put('redeem/{id}', 'API\redeemController@editRedeem');
Route::delete('redeem/{id}', 'API\redeemController@deleteRedeem');
Route::post('redeem/image/', 'API\redeemController@ajaxImageUploadPost');

/*

User Redeem API section

*/

Route::get('redeem/user/{id}', 'API\redeemController@getUserRedeem');
Route::post('redeem/user/', 'API\redeemController@createUserRedeem');
Route::put('redeem/user/{id}', 'API\redeemController@editUserRedeem');
Route::delete('redeem/user/{id}', 'API\redeemController@deleteUserRedeem');





/*
|--------------------------------------------------------------------------
| Auth section
|--------------------------------------------------------------------------
*/


/*

Register API section

*/
Route::post('register/', 'API\RegisterController@createAccount');




/*

Comment API section

*/

Route::get('comment/{id}', 'API\forumController@getComment');
Route::post('comment/', 'API\forumController@createComment');
Route::put('comment/{id}', 'API\forumController@updateComment');
Route::delete('comment/{id}', 'API\forumController@deleteComment');






/*
|--------------------------------------------------------------------------
| User section
|--------------------------------------------------------------------------
*/


/*

User goal API section

*/
Route::get('users/goal/', 'API\userController@getGoal');
Route::get('users/goal/{id}', 'API\userController@getUserGoal');
Route::post('users/goal/', 'API\userController@createGoal');
Route::put('users/goal/{id}', 'API\userController@editGoal');


/*

user profile API section

*/

Route::get('users/{user_id}', 'API\userController@loginAPI');
Route::get('users/profile/', 'API\userController@getProfile');
Route::get('users/profile/{id}', 'API\userController@getUserProfile');
Route::post('users/', 'API\userController@createUserProfile');
Route::put('users/{id}', 'API\userController@editUserProfile');
Route::delete('users/{id}', 'API\userController@deleteUser');
Route::get('users/total/', 'API\userController@getUserCount');
Route::post('users/image/', 'API\userController@ajaxImageUploadPost');



/*
|--------------------------------------------------------------------------
| Tracking section
|--------------------------------------------------------------------------
*/


/*

Tracking history API section

*/

Route::get('tracking/history/{id}', 'API\trackingController@getTrackHistory');
Route::post('tracking/history/', 'API\trackingController@createTrackHistory');
Route::delete('tracking/history/{id}', 'API\trackingController@deleteTrackHistory');


/*

Tracking attribute API section

*/
Route::get('tracking/', 'API\trackingController@getTracking');
Route::get('track/{id}', 'API\trackingController@findTracking');
Route::post('tracking/', 'API\trackingController@createTracking');
Route::put('tracking/{id}', 'API\trackingController@editTracking');




/*
|--------------------------------------------------------------------------
| Product section
|--------------------------------------------------------------------------
*/


/*

Product API section

*/
Route::get('product/total/', 'API\productController@getProductCount');
Route::get('product/', 'API\productController@getProduct');
Route::get('product/{id}', 'API\productController@searchProduct');
Route::post('product/', 'API\productController@createProduct');
Route::put('product/{id}', 'API\productController@editProduct');
Route::delete('product/{id}', 'API\productController@deleteProduct');
Route::post('product/image/', 'API\productController@ajaxImageUploadPost');




/*
|--------------------------------------------------------------------------
| Challenge section
|--------------------------------------------------------------------------
*/


/*

Challenge API section

*/

Route::get('challenge/total/', 'API\challengeController@getTotal');
Route::get('challenge/', 'API\challengeController@getChallenge');
Route::get('challenge/{id}', 'API\challengeController@findChallenge');
Route::post('challenge/', 'API\challengeController@createChallenge');
Route::put('challenge/{id}', 'API\challengeController@editChallenge');
Route::delete('challenge/{id}', 'API\challengeController@deleteChallenge');
Route::post('challenge/image/', 'API\challengeController@ajaxImageUploadPost');

/*

User Challenge API section

*/

Route::get('challenge/user/{id}', 'API\challengeController@getUserChallenge');
Route::post('challenge/user/', 'API\challengeController@createUserChallenge');
Route::put('challenge/user/{id}', 'API\challengeController@updateUserChallenge');
Route::delete('challenge/user/{id}', 'API\challengeController@deleteUserChallenge');




/*
|--------------------------------------------------------------------------
| Achievement section
|--------------------------------------------------------------------------
*/


/*

Acheivement API section

*/
Route::get('achievement/total/', 'API\achievementController@getTotal');
Route::get('achievement/', 'API\achievementController@getAchievement');
Route::get('achievement/{id}', 'API\achievementController@findAchievement');
Route::post('achievement/', 'API\achievementController@createAchievement');
Route::put('achievement/{id}', 'API\achievementController@editAchievement');
Route::delete('achievement/{id}', 'API\achievementController@deleteAchievement');
Route::post('achievement/image/', 'API\achievementController@ajaxImageUploadPost');
/*

User achievement API section

*/

Route::get('achievement/user/{id}', 'API\achievementController@getUserAchieve');
Route::post('achievement/user/', 'API\achievementController@createUserAchieve');
Route::put('achievement/user/{id}', 'API\achievementController@editUserAchieve');
Route::delete('achievement/user/{id}', 'API\achievementController@deleteUserAchieve');


/*

Achievement condition API section

*/

Route::get('achievement/condition/{id}', 'API\achievementController@getAchieveCondition');
Route::post('achievement/condition/', 'API\achievementController@createAchieveConditon');
Route::put('achievement/condition/{id}', 'API\achievementController@editAchieveCondition');
Route::delete('achievement/condition/{id}', 'API\achievementController@deleteAchieveCondition');





/*
|--------------------------------------------------------------------------
| Fitcamp section
|--------------------------------------------------------------------------
*/


/*

Fitcamp API section

*/
Route::get('fitcamp/total/', 'API\fitcampController@getTotal');
Route::get('fitcamp/', 'API\fitcampController@getFitcamp');
Route::get('fitcamp/{id}', 'API\fitcampController@findFitcamp');
Route::post('fitcamp/', 'API\fitcampController@createFitcamp');
Route::put('fitcamp/{id}', 'API\fitcampController@updateFitcamp');
Route::delete('fitcamp/{id}', 'API\fitcampController@deleteFitcamp');
Route::post('fitcamp/image/', 'API\fitcampController@ajaxImageUploadPost');

/*

Fitcamp attendance API section

*/
Route::get('fitcamp/attendance/fitcampID/{fitcamp_id}', 'API\fitcampController@getFitcampAttendance');
Route::get('fitcamp/attendance/userID/{user_id}', 'API\fitcampController@getUserAttendance');
Route::post('fitcamp/attendance/', 'API\fitcampController@addAttendance');
Route::delete('fitcamp/attendance/{id}', 'API\fitcampController@deleteAttendance');

/*

Fitcamp coach API section

*/
Route::get('fitcamp/coach/fitcampID/{fitcamp_id}', 'API\fitcampController@getFitcampCoach');
Route::get('fitcamp/coach/userID/{coach_id}', 'API\fitcampController@getCoachFitcamp');
Route::post('fitcamp/coach/', 'API\fitcampController@createCoach');
Route::delete('fitcamp/coach/{id}', 'API\fitcampController@deleteCoach');

/*

Fitcamp register API section

*/
Route::get('fitcamp/register/fitcampID/{fitcamp_id}', 'API\fitcampController@getFitcampRegister');
Route::get('fitcamp/register/userID/{user_id}', 'API\fitcampController@getUserRegister');
Route::post('fitcamp/register/', 'API\fitcampController@addRegister');
Route::put('fitcamp/register/fitcampID/{fitcamp_id}', 'API\fitcampController@confirmRegister');
Route::delete('fitcamp/register/{id}', 'API\fitcampController@deleteRegister');



/*
|--------------------------------------------------------------------------
| Forum section
|--------------------------------------------------------------------------
*/


/*

Forum comment API section

*/

Route::get('comment/{id}', 'API\forumController@getComment');
Route::post('comment/', 'API\forumController@createComment');
Route::put('comment/{id}', 'API\forumController@updateComment');
Route::delete('comment/{id}', 'API\forumController@deleteComment');



/*

Forum API section

*/
Route::get('forum/total/', 'API\forumController@getTotal');
Route::post('forum/image/', 'API\forumController@ajaxImageUploadPost');
Route::get('forum', 'API\forumController@getForum');
Route::get('forum/{id}', 'API\forumController@searchForum');
Route::post('forum', 'API\forumController@createForum');
Route::put('forum/{id}', 'API\forumController@updateForum');
Route::delete('forum/{id}', 'API\forumController@deleteForum');
