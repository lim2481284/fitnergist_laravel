@extends('layouts.dashboard_layout_user')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/fitcamp.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/dashboard/responsive/fitcamp.css" rel="stylesheet" type="text/css" media="screen and (max-width : 768px)"/>

@stop



@section('content')
<div class='loader'>
	<img src='assets/img/logo.png'/>
	<label class='loader-label'> Loading ... </label>
</div>
<div id='bodyContent' class='fade-out'>

  <!--------------------------------

        Tab Section

  ------------------------------------>

  <div class="tab">

		<ul class="tabs">
			<li>
				<a href="#">
            <div class='tabTitle'>
    					<p class='tabNumber_upcoming'>0 </p>
    					<p class='tabLabel'>UPCOMING </p>
            </div>
				</a>
				<span class=" tabArrow glyphicon glyphicon-triangle-bottom"></span>
			</li>
			<li>
				<a href="#">
          <div class='tabTitle'>
            <p class='tabNumber_registered'> 0</p>
            <p class='tabLabel'>REGISTERED </p>
          </div>
				</a>
				<span  class="tabArrow tabArrow_second  glyphicon glyphicon-triangle-bottom"></span>
			</li>
		</ul> <!-- / tabs -->




  <!-----------------------------------------------

				Fit camp Content

	-------------------------------------------------->
  <div class="tab_content">

     <!-- first tabs_item -->
    <div class="tabs_item">
      <div class='col-sm-11 container container-top-menu fitcampListection'>
      </div>
    </div>
     <!-- second tabs_item -->
    <div class="tabs_item">
      <div class='col-sm-11 container container-top-menu registeredFitcampListection'>
      </div>
    </div>

  </div>
</div>


</div>

@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/fitcamp.js"></script>
@stop
