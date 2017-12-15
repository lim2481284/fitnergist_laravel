@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/forum.css" rel="stylesheet" type="text/css" media="all"/>	
<link href="assets/css/dashboard/responsive/forum.css" rel="stylesheet" type="text/css" media="all"/>	
 
@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addForum"> <button class='btn btn-default createForum'> Create New Forum</button></a>
		<a href="/forum"> <button class='btn btn-default backBtn'> back</button></a>
	</div>

	<div style='width:96%' class='col-sm-12 container container-top-menu '>
	
		<div>
		  <ul class='forumList forumListSection'>					
		  </ul>
		  <div class='forumContentSection'>
			  <input type='hidden' class='forumID'/>
			  <div class='col-sm-12 imgArea'>				
			  </div>
			  <div class='col-sm-12 titleArea'>				
			  </div>
			  <div class='col-sm-12 authorDateArea'>
				<label class='author'></label>
				<label class='date'></label>
			  </div>
			  <div class='col-sm-12 contentArea'>				
			  </div>
			  <div class='col-sm-12 commentArea'>
					<br><br>
					<b>Forum Comment</b>
					<div class='col-sm-12 commentInput'>
						<br><br>
						<div class="input-group">
						  <input type="text" class="form-control commentInputField" placeholder="Comment here ... ">
						  <span class="input-group-btn">
							<button class="btn btn-default createCommentBtn" type="button">Comment</button>
						  </span>						  
						</div>						
					</div>
					<div class='commentSection'>						
					</div>
			  </div>
		  </div>
		</div>
	</div>
	
	<!-----------------------------------------------
	
				Add product popup section 
	
	-------------------------------------------------->
	
   <div id="addForum" class="overlay">
		<div class="popout">
			<a class="close" href="#">&times;</a>
			<div class="box">					  
		 	  <h3> Create new forum </h3>
				<form action="#" enctype="multipart/form-data" method="POST">
					<div class='imageSection'>
						<img id="uploadedImage" src="#" />
					</div>			
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload forum image</button>
					  <input  id='image' type="file" name="image"  class='forumFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>	
				<div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Forum title </label>
					<div class="col-sm-10">
					  <input type="text" class="form-control forumTitle"placeholder="Enter Product Name">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Forum content</label>
					<div class="col-sm-10">
					  <textarea type="text" class="form-control forumContent" placeholder="Enter Description"></textarea>
					</div>
				 </div>

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='forumUserID' value='1'/>
					<input type='hidden' class='forumImg'/>
					<button type='button' class='createForumBtn btn btn-info'>Create forum</button>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>		

	
@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/forum.js"></script> 
@stop