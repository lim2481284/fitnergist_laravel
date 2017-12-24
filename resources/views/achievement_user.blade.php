@extends('layouts.dashboard_layout_user')


@section('css')

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<link href="assets/css/dashboard/page-css/achievement.css" rel="stylesheet" type="text/css" media="all"/>
<link href="assets/css/dashboard/responsive/achievement.css" rel="stylesheet" type="text/css" media="screen and (max-width : 768px)"/>

@stop



@section('content')

<div class='loader'>
	<img src='assets/img/logo.png'/>
	<label class='loader-label'> Loading ... </label>
</div>
<div id='bodyContent' class='fade-out'>


	  <div class="tab">

				<ul class="tabs">
					<li>
						<a class='target' href="#">
		            <div class='tabTitle'>
		    					<p class='tabNumber'>0 </p>
		    					<p class='tabLabel'>Incomplete </p>
		            </div>
						</a>
						<span class="targetArrow tabArrow glyphicon glyphicon-triangle-bottom"></span>
					</li>
					<li>
						<a href="#">
		          <div class='tabTitle'>
		            <p class='tabNumber_completed'> 0</p>
		            <p class='tabLabel'>Completed </p>
		          </div>
						</a>
						<span  class="tabArrow tabArrow_second  glyphicon glyphicon-triangle-bottom"></span>
					</li>
				</ul> <!-- / tabs -->




		  <!-----------------------------------------------

						Acheivement Content

			-------------------------------------------------->
		  <div class="tab_content">

		     <!-- first tabs_item -->
		    <div class="tabs_item">
					<div class="cards achievementListSection">
				  </div>
		    </div>
		     <!-- second tabs_item -->
		    <div class="tabs_item">
					<div class="cards achievedAchievementListSection">
				  </div>
		    </div>

		  </div>
		</div>

</div>

@stop




@section('javascript')
 <script src="assets/js/dashboard/page-js/achievement.js"></script>
@stop
