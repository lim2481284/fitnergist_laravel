@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/admin/page-css/achievement.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/admin/responsive/achievement.css" rel="stylesheet" type="text/css" media="screen and (max-width : 768px)"/>

@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addAchievement"> <button class='btn btn-default'> Add achievement</button></a>
	</div>


	<div style='width:96%' class='col-sm-12 container container-top-menu '>
		<div class="table-responsive ">
			<table class="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Image</th>
						<th>Title</th>
						<th>Description</th>
						<th>Point</th>
						<th>Action</th>
					</tr>
				</thead>
				<tbody class='achievementListSection'>
				</tbody>
			</table>
		</div>
	</div>



	<!-----------------------------------------------

					popup section

	-------------------------------------------------->


   <div id="addAchievement" class="overlay">
		<div class="popout">
			<a class="close" href="#">&times;</a>
			<div class="box">
		 	  <h3> Add achievement </h3>
				<form action="#" enctype="multipart/form-data" method="POST">
					<div class='imageSection'>
						<img id="uploadedImage" src="assets/img/achievement/default.jpg" />
					</div>
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload Achievement Image</button>
					  <input  id='image' type="file" name="image"  class='achievementFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>
        <br>
				<div class="form-group form-group-input col-sm-12">
					<label class="control-label col-sm-2" >Achievement title</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control achievementName" placeholder="Enter Achievement Name">
					</div>
				 </div>
				 <div class="form-group form-group-input col-sm-12">
					<label class="control-label col-sm-2" >Achievement description</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control achievementDescription" placeholder="Enter Description">
					</div>
				 </div>
				 <div class="form-group form-group-input col-sm-12">
					<label class="control-label col-sm-2">Score point</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control achievementPoint"  placeholder="Enter Point">
					</div>
				 </div>

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='achievementImg'/>
					<button type='button' class='createAchievementBtn btn btn-info'>Create achievement</button>
          <a href='#'><button type='button' class=' btn btn-default'>Cancel</button></a>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>

    		<!-----------------------------------------------

    					Edit achievement popup section

    		-------------------------------------------------->

            	   <div id="editAchievement" class="overlay">
            			<div class="popout">
            				<div class="box">
            			 	  <h3> Edit achievement </h3>
            					<form action="#" enctype="multipart/form-data" method="POST">
            						<div class='imageSection'>
            							<img id="uploadedImage_edit" class='editAchievementImg' src="assets/img/achievement/default.jpg" />
            						</div>
            						<div class="file-input-wrapper">
            						  <button class="btn btn-default" type="button">Upload achievement image</button>
            						  <input  id='image_edit' type="file" name="image"  class='achievementFileUpload_edit' accept="image/*" onchange="readURL_edit(this);"/>
            						</div>
            					</form>
                      <br>
                      <div class="form-group form-group-input col-sm-12">
              					<label class="control-label col-sm-2" >Achievement title</label>
              					<div class="col-sm-10">
              					  <input type="text" class="form-control editAchievementName" placeholder="Enter Achievement Name">
              					</div>
              				 </div>
              				 <div class="form-group form-group-input col-sm-12">
              					<label class="control-label col-sm-2" >Achievement description</label>
              					<div class="col-sm-10">
              					  <input type="text" class="form-control editAchievementDescription" placeholder="Enter Description">
              					</div>
              				 </div>
              				 <div class="form-group form-group-input col-sm-12">
              					<label class="control-label col-sm-2">Score point</label>
              					<div class="col-sm-10">
              					  <input type="number" class="form-control editAchievementPoint"  placeholder="Enter Point">
              					</div>
              				 </div>

            					 <div class='col-sm-12'>
            						<br><br><br>
            						<input type='hidden' class='achievementImg_edit'/>
            						<input type='hidden' class='achievementID'/>
            						<button type='button' class='editAchievement btn btn-info'>Edit achievement</button>
            						<a href='#'><button type='button' class='closeBtn btn btn-default'>Cancel</button></a>
            						<br><br><br><br><br><br><br><br><br>
            					 </div>
            				</div>
            			</div>
            		</div>
@stop




@section('javascript')
 <script src="assets/js/admin/page-js/achievement.js"></script>
@stop
