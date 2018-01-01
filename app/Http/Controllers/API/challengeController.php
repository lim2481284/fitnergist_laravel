<?php


namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Challenge;
use App\Users_challenge;

class challengeController extends Controller
{
	/*

		Controller for the challenge section

	*/

    public function ajaxImageUploadPost(Request $request)
	{
		$imageName = $request->name . '.jpg';

		$request->file('image')->move(
			base_path() . '/public/assets/img/challenge/', $imageName
		);

		return response()->json(['success'=>true,'message'=>'Image uploaded']);
    }


    public function getTotal()
    {
        $challenge = Challenge::all()->count();
		return response()->json(['success'=>true,'total'=>$challenge]);
    }


    public function getChallenge()
    {
        $challenge = Challenge::all();
		return response()->json(['success'=>true,'message'=>'','body'=>$challenge]);
    }

    public function findChallenge($id)
    {
		$challenge = Challenge::find($id);
        return response()->json(['success'=>true,'message'=>'','body'=>$challenge]);

    }

    public function createChallenge(Request $request)
    {

        $challenge= Challenge::create($request->all());
        return response()->json(['success'=>true,'message'=>'Challenge created','body'=>$challenge]);

    }

    public function editChallenge(Request $request, $id)
    {
		$challenge = Challenge::find($id);
        $challenge->update($request->all());
       return response()->json(['success'=>true,'message'=>'Challenge edited','body'=>$challenge]);
    }

    public function deleteChallenge($id)
    {
		$challenge = Challenge::find($id);
        $challenge->delete();
        return response()->json(['success'=>true,'message'=>$challenge->title.' deleted']);
    }



	/*

		Controller for the user challenge record section

	*/

    public function getUserChallenge($id)
    {
		$userChallenge = Users_challenge::where('userID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$userChallenge]);

    }

    public function createUserChallenge(Request $request)
    {

        $userChallenge= Users_challenge::create($request->all());
        return response()->json(['success'=>true,'message'=>'User challenge created','body'=>$userChallenge]);

    }

    public function updateUserChallenge(Request $request, $id)
    {
		$userChallenge = Users_challenge::find($id);
        $userChallenge->update($request->all());
       return response()->json(['success'=>true,'message'=>'User challenge edited','body'=>$userChallenge]);
    }

    public function deleteUserChallenge($id)
    {
		$userChallenge = Users_challenge::find($id);
        $userChallenge->delete();
        return response()->json(['success'=>true,'message'=>$userChallenge->title.' deleted']);
    }



}
