<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Forum;
use App\Comment;


class forumController extends Controller
{
	
	
	/*
		
		Controller for the forum section 
	
	*/
	
    public function ajaxImageUploadPost(Request $request)
	{
		$imageName = $request->name . '.jpg';

		$request->file('image')->move(
			base_path() . '/public/assets/img/forum/', $imageName
		);
		
		return response()->json(['success'=>true,'message'=>'Image uploaded']); 
    }
		
	
    public function getTotal()
    {		
        $forum = Forum::all()->count();
		return response()->json(['success'=>true,'total'=>$forum]);
    }
	
		
    public function getForum()
    {
		
        $forum = Forum::all();
		return response()->json(['success'=>true,'message'=>'','body'=>$forum]);
    }
 
    public function searchForum($id)
    {
		$forum = Forum::find($id);		
        return response()->json(['success'=>true,'message'=>'','body'=>$forum]);

    }

    public function createForum(Request $request)
    {

        $forum= Forum::create($request->all());
        return response()->json(['success'=>true,'message'=>'Forum created','body'=>$forum]);

    }

    public function updateForum(Request $request, $id)
    {
		$forum = Forum::find($id);
        $forum->update($request->all());
       return response()->json(['success'=>true,'message'=>'Forum edited','body'=>$forum]);
    }

    public function deleteForum($id)
    {
		$forum = Forum::find($id);
        $forum->delete();
        return response()->json(['success'=>true,'message'=>$forum->title.' deleted']);
    }
	
	
	/*
		
		Controller for the comment section 
	
	*/	
    public function getComment($id)
    {
		//Get comment of specific fourm 
		$comment = Comment::where('forumID',$id)->orderBy('created_at','DESC')->get();
        return response()->json(['success'=>true,'message'=>'','body'=>$comment]);
    }
 
    public function createComment(Request $request)
    {
		
		//Create comment 
		$comment= Comment::create($request->all());	
        return response()->json(['success'=>true,'message'=>'Comment created','body'=>$comment]);

    }

    public function updateComment(Request $request, $id)
    {

        $comment = Comment::find($id);
        $comment->update($request->all());
        return response()->json(['success'=>true,'message'=>'Update success','body'=>$comment]);

    }

    public function deleteComment(Request $request, $id)
    {
		$comment = Comment::find($id);
        $comment->delete();
        return response()->json(['success'=>true,'message'=>$comment->commentID.' deleted']);
    }


	
	
	
	
	
	
}
