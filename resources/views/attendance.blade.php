@extends('layouts.dashboard_layout')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<link href="assets/css/admin/page-css/attendance.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/admin/responsive/attendance.css" rel="stylesheet" type="text/css" media="all"/>
<link rel='stylesheet prefetch' href='https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css'>
<link rel='stylesheet' href='assets/css/admin/datepicker.css'>

@stop



@section('content')


<div style='width:96%' class='col-sm-12 container container-top-menu '>
      <div class="form-group">
         <select class="form-control fitcampListection"  >
            <option value='' disabled selected>Choose fitcamp </option>
         </select>
      </div>
      <div class='closeBtnSection col-sm-12'>
        <button class='btn btn-info closeFitcampBtn'>Close fitcamp </button>
      </div>
      <div class='tableSection col-sm-12'>
        <div class="table-responsive ">
          <table class="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class='attendanceList'>
            </tbody>
          </table>
        </div>
      </div>
</div>


@stop




@section('javascript')

	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<script src="assets/js/admin/page-js/attendance.js"></script>
@stop
