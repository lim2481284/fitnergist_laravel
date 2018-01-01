<?php


namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Users_goal;
use App\Users;
use Cookie;
use Illuminate\Http\Response;
class userController extends Controller
{



	/*

		Controller for the user profile section

	*/
    public function getUserCount()
    {
        $user = Users::all()->count();
        return response()->json(['success'=>true,'total'=>$user]);
    }

    public function ajaxImageUploadPost(Request $request)
		{
			$imageName = $request->name . '.jpg';

			$request->file('image')->move(
				base_path() . '/public/assets/img/profile/', $imageName
			);

			return response()->json(['success'=>true,'message'=>'Image uploaded']);
    }


		public function loginAPI(Request $request,$username)
		{
				$pass =  $request->input('pass');
				$user = Users::where('username',$username)
									->where('password',$pass)
									->get();
				if ($user->count()) {
					$userRole = $user->first()->value('roleID');
					$profiled = $user->first()->value('profiled');
					Cookie::make('profile',$profiled,9999);
					return response()->json(['success'=>true,'message'=>"Login success", 'body'=>$user])->withCookie(cookie('userRole', $userRole, 3600));;
				}
				else
					return response()->json(['success'=>false,'message'=>"Wrong password or username", 'body'=>$user]);
		}



    public function getProfile()
    {
        $user = Users::all();
				return response()->json(['success'=>true,'message'=>'','body'=>$user]);
    }

    public function getUserProfile($id)
    {
				$user = Users::where('userID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$user]);
    }

    public function createUserProfile(Request $request)
    {
        $user= Users::create($request->all());
        return response()->json(['success'=>true,'message'=>'Track created','body'=>$user]);
    }

    public function editUserProfile	(Request $request, $id)
    {

				$user = Users::where('userID',$id);
        $user->update($request->all());
        return response()->json(['success'=>true,'message'=>'Tracked','body'=>$user]);
    }

    public function deleteUser($id)
    {
		$user = Users::find($id);
        $user->delete();
        return response()->json(['success'=>true,'message'=>$user->title.' deleted']);
    }


	/*

		Controller for the user goal section

	*/
    public function getGoal()
    {
        $user = Users_goal::all();
		return response()->json(['succeass'=>true,'message'=>'','body'=>$user]);
    }

    public function getUserGoal($id)
    {
		$user = Users_goal::where('userID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$user]);
    }

    public function createGoal(Request $request)
    {
        $user= Users_goal::create($request->all());
        return response()->json(['success'=>true,'message'=>'Track created','body'=>$user]);
    }

    public function editGoal(Request $request, $id)
    {
		$user = Users_goal::where('userID',$id);
        $user->update($request->all());
       return response()->json(['success'=>true,'message'=>'Tracked','body'=>$user]);
    }


}
