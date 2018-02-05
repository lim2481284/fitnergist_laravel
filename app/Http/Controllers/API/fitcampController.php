<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Fitcamp;
use App\Fitcamp_attendance;
use App\Fitcamp_register;
use App\Fitcamp_coach;

class fitcampController extends Controller
{

	/*

		Controller for the fitcamp section

	*/
    public function ajaxImageUploadPost(Request $request)
	{
		$imageName = $request->name . '.jpg';

		$request->file('image')->move(
			base_path() . '/public/assets/img/fitcamp/', $imageName
		);

		return response()->json(['success'=>true,'message'=>'Image uploaded']);
    }

    public function confirmRegister(Request $request, $id)
    {
          $userID = $request->userID;
          $fitcamp = Fitcamp_register::where('fitcampID',$id)->where("userID",$userID);
          $fitcamp->update($request->all());
          return response()->json(['success'=>true,'message'=>'Fitcamp edited','body'=>$fitcamp]);
    }

    public function getTotal()
    {
        $fitcamp = Fitcamp::all()->count();
		return response()->json(['success'=>true,'total'=>$fitcamp]);
    }


    public function getFitcamp()
    {

        $fitcamp = Fitcamp::all();
		return response()->json(['success'=>true,'message'=>'','body'=>$fitcamp]);
    }

    public function findFitcamp($id)
    {
		$fitcamp = Fitcamp::find($id);
        return response()->json(['success'=>true,'message'=>'','body'=>$fitcamp]);

    }

    public function createFitcamp(Request $request)
    {

        $fitcamp= Fitcamp::create($request->all());
        return response()->json(['success'=>true,'message'=>'Fitcamp created','body'=>$fitcamp]);

    }

    public function updateFitcamp(Request $request, $id)
    {
		$fitcamp = Fitcamp::find($id);
        $fitcamp->update($request->all());
        return response()->json(['success'=>true,'message'=>'Fitcamp edited','body'=>$fitcamp]);
    }

    public function deleteFitcamp($id)
    {
		$fitcamp = Fitcamp::find($id);
        $fitcamp->delete();
        return response()->json(['success'=>true,'message'=>$fitcamp->title.' deleted']);
    }



	/*

		Controller for the fitcamp attendance section

	*/
    public function getFitcampAttendance(Request $request, $id)
    {
        $attendance = Fitcamp_attendance::where('fitcampID',$id)->orderBy('created_at','DESC')->get();
		return response()->json(['success'=>true,'message'=>'Here is it','body'=>$attendance]);
    }

    public function getUserAttendance($id)
    {
		$attendance = Fitcamp_attendance::where('userID',$id)->orderBy('created_at','DESC')->get();
		return response()->json(['success'=>true,'message'=>'','body'=>$attendance]);
    }

    public function addAttendance(Request $request)
    {

        $attendance= Fitcamp_attendance::create($request->all());
        return response()->json(['success'=>true,'message'=>'Attendance created','body'=>$attendance]);

    }


    public function deleteAttendance(Request $request,$id)
    {
		if($request->has('userID'))
		{
			 $userID = $request->userID;
			 $attendance = Fitcamp_attendance::where('fitcampID',$id)->where('userID',$userID);
			 $attendance->delete();
			 return response()->json(['success'=>true,'message'=>' deleted']);
		}
		else
		{
			 return response()->json(['success'=>false,'message'=>'Invalid request: userID not found.']);
		}

    }


	/*

		Controller for the fitcamp coach section

	*/
    public function getFitcampCoach(Request $request, $fitcamp_id) //Get all the coach from that fitcamp
    {
        $coach = Fitcamp_coach::where('fitcampID',$fitcamp_id)->orderBy('created_at','DESC')->get();
		return response()->json(['success'=>true,'message'=>'','body'=>$coach]);
    }

    public function getCoachFitcamp(Request $request, $coach_id)	//Get all the fitcamp of that coach
    {
		$coach = Fitcamp_coach::where('coachID',$coach_id)->orderBy('created_at','DESC')->get();
		return response()->json(['success'=>true,'message'=>'','body'=>$coach]);
    }

    public function createCoach(Request $request)
    {

        $coach= Fitcamp_coach::create($request->all());
        return response()->json(['success'=>true,'message'=>'Coach created','body'=>$coach]);

    }


    public function deleteCoach(Request $request,$id)
    {
		if($request->has('userID'))
		{
			 $userID = $request->userID;
			 $coach = Fitcamp_coach::where('fitcampID',$id)->where('coachID',$userID);
			 $coach->delete();
			 return response()->json(['success'=>true,'message'=>' deleted']);
		}
		else
		{
			 return response()->json(['success'=>false,'message'=>'Invalid request: userID not found.']);
		}

    }



	/*

		Controller for the fitcamp register section

	*/
    public function getFitcampRegister($id) //Get all register from that fitcamp
    {
        $register = Fitcamp_register::where('fitcampID',$id)->orderBy('created_at','DESC')->get();
		return response()->json(['success'=>true,'message'=>'','body'=>$register]);
    }

    public function getUserRegister($id) // get all registered fitcamp from that user
    {
		$register = Fitcamp_register::where('userID',$id)->orderBy('created_at','DESC')->get();
		return response()->json(['success'=>true,'message'=>'','body'=>$register]);
    }

    public function addRegister(Request $request)
    {

        $register= Fitcamp_register::create($request->all());
        return response()->json(['success'=>true,'message'=>'Register created','body'=>$register]);

    }

    public function deleteRegister(Request $request,$id)
    {
		if($request->has('userID'))
		{
			 $userID = $request->userID;
			 $attendance = Fitcamp_register::where('fitcampID',$id)->where('userID',$userID);
			 $attendance->delete();
			 return response()->json(['success'=>true,'message'=>' deleted']);
		}
		else
		{
			 return response()->json(['success'=>false,'message'=>'Invalid request: userID not found.']);
		}

    }

}
