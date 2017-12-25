
@extends('layouts.dashboard_layout_user')


@section('css')

@stop



@section('content')


<div class='loader'>
	<img src='assets/img/logo.png'/>
	<label class='loader-label'> Loading ... </label>
</div>
<div id='bodyContent' class='fade-out'>
	<div class='col-sm-12 topBannerSection'>
		<div class='col-sm-12 bannerLogo'>
			<img class='logo' src='assets/img/logo.png'/>
		</div>
		<div class='col-sm-12 bannerScore'>
		</div>
	</div>
	<div class='col-sm-12  vectorArea'>
		<center>
			<div class='col-sm-12' >
				<img class='vector' src='assets/img/homeVector.png'/>
			</div>
			<div class='col-sm-12' >
				<div class=' vector soilArea'>
						<div class='dotBox'>
							<center>
								<img class='dot' src=""/>
								<img class='dot_progress' src=""/>
							</center>
						</div>
						<img  class='treasure' src='assets/img/treasure.png'/>
				</div>
			</div>
		<center>
	</div>
	<img class='goalArrow_mobile' src='assets/img/GoalArrow_mobile.png'/>
	<img class='scoreArrow_mobile' src='assets/img/ScoreArrow_mobile.png'/>

	<img class='goalArrow' src='assets/img/GoalArrow.png'/>
	<img class='scoreArrow' src='assets/img/ScoreArrow.png'/>


	<div class="ship-wrap">
		<div class="wave1 wave"></div>
		<div class="wave2 wave"></div>

	</div>
	<div class='sea'>

			<div id="content-wrapper">
				<div class='timelineLabel'>Your Timeline</div>
				<div id="timeline" class="timeCube"></div>
				<div id="swipe"></div>
				<a href="#" onclick="return false;" id="next-link"></a> <a href="#" onclick="return false;" id="prev-link" class="disabled"></a>
			</div>
		</div>
</div>
@stop




@section('javascript')
<script type="text/javascript" src="assets/js/dashboard/timecube.jquery.js"></script>
<script type="text/javascript" src="assets/js/dashboard/timecube.example.js"></script>

@stop


<!DOCTYPE html>
