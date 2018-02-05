<?php
namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Achievement;
use App\Achievement_condition;
use App\Users_achievement;

class achievementController extends Controller
{
	/*

		Controller for the achievement section

	*/

    public function ajaxImageUploadPost(Request $request)
	{
		$imageName = $request->name . '.jpg';

		$request->file('image')->move(
			base_path() . '/public/assets/img/achievement/', $imageName
		);

		return response()->json(['success'=>true,'message'=>'Image uploaded']);
    }

    public function getTotal()
    {
        $achievement = Achievement::all()->count();
		return response()->json(['success'=>true,'total'=>$achievement]);
    }


    public function getAchievement()
    {
        $achieve = Achievement::all();
		return response()->json(['success'=>true,'message'=>'','body'=>$achieve]);
    }

    public function findAchievement($id)
    {
		$achieve = Achievement::find($id);
        return response()->json(['success'=>true,'message'=>'','body'=>$achieve]);
    }

    public function createAchievement(Request $request)
    {
        $achieve= Achievement::create($request->all());
        return response()->json(['success'=>true,'message'=>'Challenge created','body'=>$achieve]);
    }

    public function editAchievement(Request $request, $id)
    {
		$achieve = Achievement::find($id);
        $achieve->update($request->all());
       return response()->json(['success'=>true,'message'=>'Challenge edited','body'=>$achieve]);
    }

    public function deleteAchievement($id)
    {
		$achieve = Achievement::find($id);
        $achieve->delete();
        return response()->json(['success'=>true,'message'=>$achieve->title.' deleted']);
    }



	/*

		Controller for the user achievement record section

	*/

    public function getUserAchieve($id)
    {
		    $achieve = Users_achievement::where('userID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$achieve]);

    }

    public function createUserAchieve(Request $request)
    {

        $achieve= Users_achievement::create($request->all());
        return response()->json(['success'=>true,'message'=>'User achieve created','body'=>$achieve]);

    }

    public function editUserAchieve(Request $request, $id)
    {
		$achieve = Users_achievement::find($id);
        $achieve->update($request->all());
       return response()->json(['success'=>true,'message'=>'User achieve edited','body'=>$achieve]);
    }

    public function deleteUserAchieve($id)
    {
		$achieve = Users_achievement::find($id);
        $achieve->delete();
        return response()->json(['success'=>true,'message'=>$achieve->title.' deleted']);

	}



	/*

		Controller for the achievement condition section

	*/

    public function getAchieveCondition($id)
    {
		$achieve = Achievement_condition::where('achievementID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$achieve]);

    }

    public function createAchieveConditon(Request $request)
    {

        $achieve= Achievement_condition::create($request->all());
        return response()->json(['success'=>true,'message'=>'User achieve created','body'=>$achieve]);

    }

    public function editAchieveCondition(Request $request, $id)
    {
		$achieve = Achievement_condition::find($id);
        $achieve->update($request->all());
       return response()->json(['success'=>true,'message'=>'User achieve edited','body'=>$achieve]);
    }

    public function deleteAchieveCondition($id)
    {
		$achieve = Achievement_condition::find($id);
        $achieve->delete();
        return response()->json(['success'=>true,'message'=>$achieve->title.' deleted']);
    }


}
