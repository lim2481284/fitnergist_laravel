@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/challenge.css" rel="stylesheet" type="text/css" media="all"/>	
<link href="assets/css/dashboard/responsive/challenge.css" rel="stylesheet" type="text/css" media="all"/>	
 
@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addChallenge"> <button class='btn btn-default'> Add challenge</button></a>
	</div>


	<div class="wrapper">
	  <div class="cards challengeListSection">	  			
	  </div>
	</div>
	
	
	
	<!-----------------------------------------------
	
					popup section 
	
	-------------------------------------------------->
	
		
   <div id="addChallenge" class="overlay">
		<div class="popout">
			<a class="close" href="#">&times;</a>
			<div class="box">					  
		 	  <h3> Add challenge </h3>
				<form action="#" enctype="multipart/form-data" method="POST">
					<div class='imageSection'>
						<img id="uploadedImage" src="#" />
					</div>			
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload Challenge Image</button>
					  <input  id='image' type="file" name="image"  class='challengeFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>	
				<div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Challenge title</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control challengeName" placeholder="Enter Challenge Name">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Challenge description</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control challengeDescription" placeholder="Enter Description">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2">Score point</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control challengePoint"  placeholder="Enter Point">
					</div>
				 </div>

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='challengeImg'/>
					<button type='button' class='createChallengeBtn btn btn-info'>Create challenge</button>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>		
	
@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/challenge.js"></script> 
@stop