<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Tracking;
use App\Tracking_history;


class trackingController extends Controller
{
	/*

		Controller for the tracking section

	*/
    public function getTracking()
    {
        $track = Tracking::all();
	      return response()->json(['success'=>true,'message'=>'','body'=>$track]);
    }

    public function findTracking($id)
    {
		    $track = Tracking::where('userID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$track]);
    }

    public function createTracking(Request $request)
    {
        $track= Tracking::create($request->all());
        $history= Tracking_history::create($request->all());
        return response()->json(['success'=>true,'message'=>'Track created','body'=>$track]);
    }

    public function editTracking(Request $request, $id)
    {
       // Update user current attribute
	     $track = Tracking::where('userID',$id);
       $track->update($request->all());
       $track = Tracking::where('userID',$id)->get();


       //Update history record
       $request->request->add(['userID' => $id]);
       $history= Tracking_history::create($request->all());
       return response()->json(['success'=>true,'message'=>'Tracked','body'=>$track]);
    }




	/*

		Controller for the tracking history  section

	*/

    public function getTrackHistory($id)
    {
		$track = Tracking_history::where('userID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$track]);

    }

    public function createTrackHistory(Request $request)
    {

        $track= Tracking_history::create($request->all());
        return response()->json(['success'=>true,'message'=>'User track created','body'=>$track]);

    }

    public function deleteTrackHistory($id)
    {
		$track = Tracking_history::find($id);
        $track->delete();
        return response()->json(['success'=>true,'message'=>$track->title.' deleted']);
    }

}
