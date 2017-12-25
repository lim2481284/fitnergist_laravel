@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/admin/page-css/forum.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/admin/responsive/forum.css" rel="stylesheet" type="text/css" media="screen and (max-width : 768px)"/>

@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addForum"> <button class='btn btn-default createForum '> Create Forum</button></a>
	</div>

	<div style='width:96%' class='col-sm-12 container container-top-menu '>
			<div class="table-responsive ">
				<table class="table">
			    <thead>
			      <tr>
			        <th>#</th>
			        <th>Image</th>
							<th>Title</th>
			        <th>Content</th>
			        <th>Date</th>
			        <th>Action</th>
			      </tr>
			    </thead>
			    <tbody class='forumListSection'>
					</tbody>
				</table>
			</div>

		  <div class='forumContentSection'>
				<a href="/forum"> <button class='btn btn-default backBtn'> back</button></a>
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
						<img id="uploadedImage" src="assets/img/forum/default.jpg" />
					</div>
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload forum image</button>
					  <input  id='image' type="file" name="image"  class='forumFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>
				<br>
				<div class="form-group form-group-input  col-sm-12">
					<label class="control-label col-sm-2" >Forum title </label>
					<div class="col-sm-10">
					  <input type="text" class="form-control forumTitleInput" placeholder="Enter Forum Name">
					</div>
				 </div>
				 <div class="form-group form-group-input col-sm-12">
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
          <button type='button' class='closeBtn btn btn-default'>Cancel</button>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>


		<!-----------------------------------------------

					Edit Forum popup section

		-------------------------------------------------->

	   <div id="editForum" class="overlay">
			<div class="popout">
				<div class="box">
			 	  <h3> Edit forum </h3>
					<form action="#" enctype="multipart/form-data" method="POST">
						<div class='imageSection'>
							<img id="uploadedImage_edit" class='editForumImg' src="assets/img/forum/default.jpg" />
						</div>
						<div class="file-input-wrapper">
						  <button class="btn btn-default" type="button">Upload forum image</button>
						  <input  id='image_edit' type="file" name="image"  class='forumFileUpload_edit' accept="image/*" onchange="readURL_edit(this);"/>
						</div>
					</form>
					<div class="form-group form-group-input">
						<div class="col-sm-12">
							<p class="" >Forum title </p>
						</div>
						<div class="col-sm-12">
						  <input type="text" class="form-control editForumTitleInput" placeholder="Enter Forum Name">
						</div>
					 </div>
					 <br><br>
					 <div class="form-group form-group-input">
						<div class="col-sm-12">
							<p class="" >Forum content</p>
						</div>
						<div class="col-sm-12">
						  <textarea type="text" class="form-control editForumContent" placeholder="Enter Description"></textarea>
						</div>
					 </div>

					 <div class='col-sm-12'>
						<br><br><br>
						<input type='hidden' class='forumImg_edit'/>
						<input type='hidden' class='forumID'/>
						<button type='button' class='editForum btn btn-info'>Edit forum</button>
						<button type='button' class='closeBtn btn btn-default'>Cancel</button>
						<br><br><br><br><br><br><br><br><br>
					 </div>
				</div>
			</div>
		</div>


@stop




@section('javascript')
 <script src="assets/js/admin/page-js/forum.js"></script>
@stop
