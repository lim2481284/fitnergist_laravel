@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/achievement.css" rel="stylesheet" type="text/css" media="all"/>	
<link href="assets/css/dashboard/responsive/achievement.css" rel="stylesheet" type="text/css" media="all"/>	
 
@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addAchievement"> <button class='btn btn-default'> Add achievement</button></a>
	</div>


	<div class="wrapper">
	  <div class="cards achievementListSection">	  			
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
						<img id="uploadedImage" src="#" />
					</div>			
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload Achievement Image</button>
					  <input  id='image' type="file" name="image"  class='achievementFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>	
				<div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Achievement title</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control achievementName" placeholder="Enter Challenge Name">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Achievement description</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control achievementDescription" placeholder="Enter Description">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2">Score point</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control achievementPoint"  placeholder="Enter Point">
					</div>
				 </div>

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='achievementImg'/>
					<button type='button' class='createAchievementBtn btn btn-info'>Create achievement</button>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>		
	
@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/achievement.js"></script> 
@stop