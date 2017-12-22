@extends('layouts.dashboard_layout_user')

@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/redeem.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/dashboard/responsive/redeem.css" rel="stylesheet" type="text/css" media="all"/>

@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addRedeem"> <button class='btn btn-default'> Add redeem</button></a>
	</div>

	<div class='col-sm-11 container container-top-menu redeemListSection'>
	</div>

	<!-----------------------------------------------

				Add product popup section

	-------------------------------------------------->

   <div id="addRedeem" class="overlay">
		<div class="popout">
			<a class="close" href="#">&times;</a>
			<div class="box">
		 	  <h3> Add redeem </h3>
				<form action="#" enctype="multipart/form-data" method="POST">
					<div class='imageSection'>
						<img id="uploadedImage" src="#" />
					</div>
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload Redeem Image</button>
					  <input  id='image' type="file" name="image"  class='redeemFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>
				<div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Redeem name :</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control redeemName"placeholder="Enter Product Name">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Description:</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control redeemDescription" placeholder="Enter Description">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2">Point:</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control redeemPoint"  placeholder="Enter point to redeem">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Stock quantity:</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control redeemQuantity" placeholder="Enter Quantity">
					</div>
				 </div>

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='redeemImg'/>
					<button type='button' class='createRedeemBtn btn btn-info'>Create redeem</button>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>


@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/redeem.js"></script>
@stop
