@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/product.css" rel="stylesheet" type="text/css" media="all"/>	
<link href="assets/css/dashboard/responsive/product.css" rel="stylesheet" type="text/css" media="all"/>	
 
@stop



@section('content')
	<div class='col-sm-11 container container-top-menu'>
		<a href="#addProduct"> <button class='btn btn-default'> Add product</button></a>
	</div>

	<div class='col-sm-11 container container-top-menu productListection'>
	</div>
	
	<!-----------------------------------------------
	
				Add product popup section 
	
	-------------------------------------------------->
	
   <div id="addProduct" class="overlay">
		<div class="popout">
			<a class="close" href="#">&times;</a>
			<div class="box">					  
		 	  <h3> Add product </h3>
				<form action="#" enctype="multipart/form-data" method="POST">
					<div class='imageSection'>
						<img id="uploadedImage" src="#" />
					</div>			
					<div class="file-input-wrapper">
					  <button class="btn btn-default" type="button">Upload Product Image</button>
					  <input  id='image' type="file" name="image"  class='profileFileUpload' accept="image/*" onchange="readURL(this);"/>
					</div>
				</form>	
				<div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Product name :</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control productName"placeholder="Enter Product Name">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Description:</label>
					<div class="col-sm-10">
					  <input type="text" class="form-control productDescription" placeholder="Enter Description">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2">Price:</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control productPrice"  placeholder="Enter price">
					</div>
				 </div>
				 <div class="form-group form-group-input">
					<label class="control-label col-sm-2" >Stock quantity:</label>
					<div class="col-sm-10">
					  <input type="number" class="form-control productQuantity" placeholder="Enter Quantity">
					</div>
				 </div>

				 <div class='col-sm-12'>
					<br><br><br>
					<input type='hidden' class='productImg'/>
					<button type='button' class='createProductBtn btn btn-info'>Create product</button>
					<br><br><br><br><br><br><br><br><br>
				 </div>
			</div>
		</div>
	</div>		

	
@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/product.js"></script> 
@stop