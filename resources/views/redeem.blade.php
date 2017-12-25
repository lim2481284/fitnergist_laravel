@extends('layouts.dashboard_layout')

@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/admin/page-css/redeem.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/admin/responsive/redeem.css" rel="stylesheet" type="text/css" media="screen and (max-width : 768px)"/>

@stop



@section('content')
<div class='col-sm-11 container container-top-menu'>
	<a href="#addRedeem"> <button class='btn btn-default'> Add redeem</button></a>
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
			<tbody class='redeemListSection'>
			</tbody>
		</table>
	</div>
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
					<img id="uploadedImage" src="assets/img/redeem/default.jpg" />
				</div>
				<div class="file-input-wrapper">
					<button class="btn btn-default" type="button">Upload Redeem Image</button>
					<input  id='image' type="file" name="image"  class='redeemFileUpload' accept="image/*" onchange="readURL(this);"/>
				</div>
			</form>
			<br>
			<div class="form-group form-group-input col-sm-12">
				<label class="control-label col-sm-2" >Redeem name :</label>
				<div class="col-sm-10">
					<input type="text" class="form-control redeemName"placeholder="Enter Product Name">
				</div>
			</div>
			<div class="form-group form-group-input col-sm-12">
				<label class="control-label col-sm-2" >Description:</label>
				<div class="col-sm-10">
					<input type="text" class="form-control redeemDescription" placeholder="Enter Description">
				</div>
			</div>
			<div class="form-group form-group-input col-sm-12">
				<label class="control-label col-sm-2">Point:</label>
				<div class="col-sm-10">
					<input type="number" class="form-control redeemPoint"  placeholder="Enter point to redeem">
				</div>
			</div>


			<div class='col-sm-12'>
				<br><br><br>
				<input type='hidden' class='redeemImg'/>
				<button type='button' class='createRedeemBtn btn btn-info'>Create redeem</button>
				<a href='#'><button type='button' class=' btn btn-default'>Cancel</button></a>
				<br><br><br><br><br><br><br><br><br>
			</div>
		</div>
	</div>
</div>


<!-----------------------------------------------

Edit redeem popup section

-------------------------------------------------->

<div id="editRedeem" class="overlay">
	<div class="popout">
		<div class="box">
			<h3> Edit redeem </h3>
			<form action="#" enctype="multipart/form-data" method="POST">
				<div class='imageSection'>
					<img id="uploadedImage_edit" class='editRedeemImg' src="assets/img/redeem/default.jpg" />
				</div>
				<div class="file-input-wrapper">
					<button class="btn btn-default" type="button">Upload redeem image</button>
					<input  id='image_edit' type="file" name="image"  class='redeemFileUpload_edit' accept="image/*" onchange="readURL_edit(this);"/>
				</div>
			</form>
		<br>
		<div class="form-group form-group-input col-sm-12">
			<label class="control-label col-sm-2" >Redeem name :</label>
			<div class="col-sm-10">
				<input type="text" class="form-control editRedeemName"placeholder="Enter Product Name">
			</div>
		</div>
		<div class="form-group form-group-input col-sm-12">
			<label class="control-label col-sm-2" >Description:</label>
			<div class="col-sm-10">
				<input type="text" class="form-control editRedeemDescription" placeholder="Enter Description">
			</div>
		</div>
		<div class="form-group form-group-input col-sm-12">
			<label class="control-label col-sm-2">Point:</label>
			<div class="col-sm-10">
				<input type="number" class="form-control editRedeemPoint"  placeholder="Enter point to redeem">
			</div>
		</div>



			<div class='col-sm-12'>
				<br><br><br>
				<input type='hidden' class='redeemImg_edit'/>
				<input type='hidden' class='redeemID'/>
				<button type='button' class='editRedeem btn btn-info'>Edit redeem</button>
				<a href='#'><button type='button' class='closeBtn btn btn-default'>Cancel</button></a>
				<br><br><br><br><br><br><br><br><br>
			</div>
		</div>
	</div>
</div>
@stop




@section('javascript')
<script src="assets/js/admin/page-js/redeem.js"></script>
@stop
