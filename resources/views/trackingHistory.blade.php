@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/trackinghistory.css" rel="stylesheet" type="text/css" media="all"/>	
<link href="assets/css/dashboard/responsive/trackinghistory.css" rel="stylesheet" type="text/css" media="all"/>	
 
@stop



@section('content')

	<div class='col-sm-11 container container-top-menu '>		
		<table >
		  <tr class='actionRow'>
			<th>Action</th>						
		  </tr> 	
		  <tr class='noRow'>
			<th>No</th>						
		  </tr> 
		  <tr class='coachRow'>
			<th>Coach name</th>						
		  </tr>
		  <tr class='userRow'>
			<th>User name</th>			
		  </tr>
		  <tr class='heightRow'>
			<th>Height</th>			
		  </tr>
		  <tr class='weightRow'>
			<th>Weight</th>			
		  </tr>
		  <tr class='fatRow'>
			<th>Fat</th>			
		  </tr>
		  <tr class='waterRow'>
			<th>Water</th>			
		  </tr>
		  <tr class='visceralRow'>
			<th>Visceral</th>			
		  </tr>
		  <tr class='bmrRow'>
			<th>BMR</th>			
		  </tr>
		  <tr class='prRow'>
			<th>PR</th>			
		  </tr>
		  <tr class='dateRow'>
			<th>Tracking Date </th>			
		  </tr>
		</table>

	</div>

@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/trackinghistory.js"></script> 
 
@stop