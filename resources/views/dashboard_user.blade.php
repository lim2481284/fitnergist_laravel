
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
				<div class=' vector soilArea'></div>
			</div>
		<center>
	</div>
	<img class='goalArrow_mobile' src='assets/img/GoalArrow_mobile.png'/>
	<img class='scoreArrow_mobile' src='assets/img/ScoreArrow_mobile.png'/>

	<img class='goalArrow' src='assets/img/GoalArrow.png'/>
	<img class='scoreArrow' src='assets/img/ScoreArrow.png'/>
</div>
@stop




@section('javascript')

@stop


<!DOCTYPE html>
