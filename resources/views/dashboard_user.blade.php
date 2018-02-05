
@extends('layouts.dashboard_layout_user')


@section('css')

<link href="assets/css/pnotify.custom.min.css" rel="stylesheet">
@stop



@section('content')


<!-- firework -->
<div class='firework'>
	<div class='fireworkContent'>
			<img src='assets/img/congrats.png'/>
			<p> You have achieved your goal </p>
			<button class='btn btn-success createNewGoalBtn'>Create new goal now !</button>
	</div>
	<div class="pyro">
	  <div class="before"></div>
	  <div class="after"></div>
	</div>
</div>

<div class='loader'>
	<img src='assets/img/logo.png'/>
	<label class='loader-label'> Loading ... </label>
</div>
<div id='bodyContent' class='fade-out'>
	<div class='deactivate'>
			<div class='text'>
				<img src='/assets/img/deactivated.png'/>
				<p>Deactivated</p>
				<small>
				Please join a fitcamp and verify your goal by trainer.
			</small><br>
				<a href='#'>Need help?</a>
			</div>
	</div>
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
						<div class="tooltip">
								<img  class='treasure' src='assets/img/treasure.png'/>
								<span class="tooltiptext">

								</span>

						</div>
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
<script src="assets/js/pnotify.custom.min.js"></script>
<script src="assets/js/dashboard/page-js/dashboard.js"></script>
<script>
	fitnergistAPI.viewUserGoal('dashboard');
	fitnergistAPI.getUserChallengeAPI('dashboard');
	fitnergistAPI.getUserAchievementAPI('dashboard');
</script>

@stop


<!DOCTYPE html>
