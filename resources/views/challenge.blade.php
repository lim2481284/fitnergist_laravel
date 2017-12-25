@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/admin/page-css/challenge.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/admin/responsive/challenge.css" rel="stylesheet" type="text/css" media="screen and (max-width : 768px)"/>

@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addChallenge"> <button class='btn btn-default'> Add challenge</button></a>
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
  				<tbody class='challengeListSection'>
  				</tbody>
  			</table>
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
						<img id="uploadedImage" src="assets/img/challenge/default.jpg" />
					</div>
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload Challenge Image</button>
					  <input  id='image' type="file" name="image"  class='challengeFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>
        <br>
				<div class="form-group form-group-input col-sm-12">
					<label class="control-label col-sm-2" >Challenge title</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control challengeName" placeholder="Enter Challenge Name">
					</div>
				 </div>
				 <div class="form-group form-group-input col-sm-12">
					<label class="control-label col-sm-2" >Challenge description</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control challengeDescription" placeholder="Enter Description">
					</div>
				 </div>
				 <div class="form-group form-group-input col-sm-12">
					<label class="control-label col-sm-2">Score point</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control challengePoint"  placeholder="Enter Point">
					</div>
				 </div>

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='challengeImg'/>
					<button type='button' class='createChallengeBtn btn btn-info'>Create challenge</button>
          <a href='#'><button type='button' class=' btn btn-default'>Cancel</button></a>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>

    		<!-----------------------------------------------

    					Edit Challenge popup section

    		-------------------------------------------------->

            	   <div id="editChallenge" class="overlay">
            			<div class="popout">
            				<div class="box">
            			 	  <h3> Edit challenge </h3>
            					<form action="#" enctype="multipart/form-data" method="POST">
            						<div class='imageSection'>
            							<img id="uploadedImage_edit" class='editChallengeImg' src="assets/img/challenge/default.jpg" />
            						</div>
            						<div class="file-input-wrapper">
            						  <button class="btn btn-default" type="button">Upload challenge image</button>
            						  <input  id='image_edit' type="file" name="image"  class='challengeFileUpload_edit' accept="image/*" onchange="readURL_edit(this);"/>
            						</div>
            					</form>
                      <br>
                      <div class="form-group form-group-input col-sm-12">
              					<label class="control-label col-sm-2" >Challenge title</label>
              					<div class="col-sm-10">
              					  <input type="text" class="form-control editChallengeName" placeholder="Enter Challenge Name">
              					</div>
              				 </div>
              				 <div class="form-group form-group-input col-sm-12">
              					<label class="control-label col-sm-2" >Challenge description</label>
              					<div class="col-sm-10">
              					  <input type="text" class="form-control editChallengeDescription" placeholder="Enter Description">
              					</div>
              				 </div>
              				 <div class="form-group form-group-input col-sm-12">
              					<label class="control-label col-sm-2">Score point</label>
              					<div class="col-sm-10">
              					  <input type="number" class="form-control editChallengePoint"  placeholder="Enter Point">
              					</div>
              				 </div>


            					 <div class='col-sm-12'>
            						<br><br><br>
            						<input type='hidden' class='challengeImg_edit'/>
            						<input type='hidden' class='challengeID'/>
            						<button type='button' class='editChallenge btn btn-info'>Edit challenge</button>
            						<a href='#'><button type='button' class='closeBtn btn btn-default'>Cancel</button></a>
            						<br><br><br><br><br><br><br><br><br>
            					 </div>
            				</div>
            			</div>
            		</div>
@stop




@section('javascript')
 <script src="assets/js/admin/page-js/challenge.js"></script>
@stop
