@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/fitcamp.css" rel="stylesheet" type="text/css" media="all"/>	
<link href="assets/css/dashboard/responsive/fitcamp.css" rel="stylesheet" type="text/css" media="all"/>	
 
@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addFitcamp"> <button class='btn btn-default'> Add Fitcamp</button></a>
	</div>

	<div class='col-sm-11 container container-top-menu fitcampListection'>
	
	
	</div>
	
	<!-----------------------------------------------
	
				Add fitcamp popup section 
	
	-------------------------------------------------->
	
   <div id="addFitcamp" class="overlay">
		<div class="popout">
			<a class="close" href="#">&times;</a>
			<div class="box">					  
		 	  <h3> Add Fitcamp </h3>
				<form action="#" enctype="multipart/form-data" method="POST">
					<div class='imageSection'>
						<img id="uploadedImage" src="#" />
					</div>			
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload Fitcamp Image</button>
					  <input  id='image' type="file" name="image"  class='profileFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>	
				<div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Fitcamp title</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control fitcampName"placeholder="Enter fitcamp title">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Description</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control fitcampDescription" placeholder="Enter description">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2">Location</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control fitcampLocation"  placeholder="Enter location">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2">Price</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control fitcampPrice"  placeholder="Enter price">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Start date</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control fitcampStartDate" placeholder="Enter start date ">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >End date</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control fitcampEndDate" placeholder="Enter end date">
					</div>
				 </div>				 			
				 

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='fitcampImg'/>
					<button type='button' class='createFitcampBtn btn btn-info'>Create fitcamp</button>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>		

	
@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/fitcamp.js"></script> 
@stop