<?php


namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Users_goal;
use App\Users;

class userController extends Controller
{

	
	
	/*
		
		Controller for the user profile section 
	
	*/
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
