@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="assets/css/admin/page-css/tracking.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/admin/responsive/tracking.css" rel="stylesheet" type="text/css" media="all"/>
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>
<link rel='stylesheet' href='assets/css/admin/datepicker.css'>

@stop



@section('content')

<div class='loader'>
	<img src='assets/img/logo.png'/>
	<label class='loader-label'> Loading ... </label>
</div>
<div id='bodyContent' class='fade-out'>
  <div style='width:96%' class='col-sm-12 container container-top-menu '>
        <div class="form-group">
           <select class="form-control fitcampListection"  >
              <option value='' disabled selected>Choose fitcamp </option>
           </select>
        </div>
  			<div class="form-group userListSection">
           <select class="form-control userListSelect"  >
              <option value='' disabled selected>Choose user </option>
           </select>
  				 <br><hr>
        </div>
  			<div class='attributeSection'>

  			</div>

  </div>
</div>

@stop




@section('javascript')

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="assets/js/admin/page-js/tracking.js"></script>
@stop
