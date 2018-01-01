@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/admin/page-css/challenge.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/admin/responsive/challenge.css" rel="stylesheet" type="text/css" media="screen and (max-width : 768px)"/>

@stop



@section('content')



  	<div style='width:96%' class='col-sm-12 container container-top-menu '>
      <div class="form-group userListSection">
         <select class="form-control userListSelect"  >
            <option value='' disabled selected>Choose user </option>
         </select>
         <br><hr>
      </div>
      <br>
      <h4>Challenge List </h4>
      <br>
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

@stop




@section('javascript')
 <script src="assets/js/admin/page-js/verify.js"></script>
@stop
