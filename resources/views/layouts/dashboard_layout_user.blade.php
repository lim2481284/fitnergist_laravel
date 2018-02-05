<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fitnergist</title>

	<!-- css for all page -->
    <link href="assets/css/dashboard/bootstrap.css" rel="stylesheet">
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />

    <link href="assets/css/dashboard/style.css" rel="stylesheet">
    <link href="assets/css/dashboard/style-responsive.css" rel="stylesheet">
  	<link href="assets/css/dashboard/main.css" rel="stylesheet">
  	<link href="assets/css/dashboard/responsive/main.css" rel="stylesheet"  media="screen and (max-width : 768px)">
  	<link rel="stylesheet" href="assets/css/dashboard/page-css/dashboard.css">
  	<link rel="stylesheet" type="text/css" href="assets/css/dashboard/responsive/dashboard.css" media="screen and (max-width : 768px)">

	<!-- css for this page -->
	@yield("css")


  </head>

  <body>

  <section id="container" >

      <!---------------------------------
				    Top menu
	  ---------------------------------->

		<div class='menuBoxArea'>
			<div class='col-sm-12'>
				<div class='menuBox'>
					<div class="menuIcon icon">
					  <span></span>
					  <span></span>
					  <span></span>
					</div>
				</div>
				<div class='menuLabel'>
					Menu
				</div>
			</div>
			<div class='col-sm-12'>
				<div class='subMenuBox homeIcon'>
					<div class="homeIcon icon">
						<img class='iconImage' src='assets/img/home.png'/>
					</div>
				</div>
				<div class='menuLabel homeIcon'>
					Home
				</div>
			</div>
			<div class='col-sm-12'>
				<div class='subMenuBox profileIcon'>
					<div class="profileIcon icon">
						<img class='iconImage' src='assets/img/profile.png'/>
					</div>
				</div>
				<div class='menuLabel profileIcon'>
					Profile
				</div>
			</div>
			<div class='col-sm-12'>
				<div class='subMenuBox challengeIcon'>
					<div class="challengeIcon icon">
						<img class='iconImage' src='assets/img/challenge.png'/>
					</div>
				</div>
				<div class='menuLabel challengeIcon'>
					Challenge
				</div>
			</div><div class='col-sm-12'>
				<div class='subMenuBox achievementIcon'>
					<div class="achievementIcon icon">
						<img class='iconImage' src='assets/img/achievement.png'/>
					</div>
				</div>
				<div class='menuLabel achievementIcon'>
					Achievement
				</div>
			</div><div class='col-sm-12'>
				<div class='subMenuBox redeemIcon'>
					<div class="redeemIcon icon">
						<img class='iconImage' src='assets/img/redeem.png'/>
					</div>
				</div>
				<div class='menuLabel redeemIcon'>
					Redeem
				</div>
			</div>
			<div class='col-sm-12'>
				<div class='subMenuBox fitcampIcon'>
					<div class="fitcampIcon icon">
						<img class='iconImage' src='assets/img/fitcamp.png'/>
					</div>
				</div>
				<div class='menuLabel fitcampIcon'>
					Fitcamp
				</div>
			</div>
			<div class='col-sm-12'>
				<div class='subMenuBox forumIcon'>
					<div class="forumIcon icon">
						<img class='iconImage' src='assets/img/forum.png'/>
					</div>
				</div>
				<div class='menuLabel forumIcon'>
					Forum
				</div>
			</div>
			<div class='col-sm-12'>
				<div class='subMenuBox logoutIcon'>
					<div class="logoutIcon icon">
						<img class='iconImage' src='assets/img/logout.png'/>
					</div>
				</div>
				<div class='menuLabel logoutIcon'>
					Logout
				</div>
			</div>
		</div>


		@yield("content")


    <!-- js for all page -->
    <script src="assets/js/dashboard/jquery.js"></script>
    <script src="assets/js/dashboard/jquery-1.8.3.min.js"></script>

    <script src="assets/js/dashboard/jquery.scrollTo.min.js"></script>
    <script src="assets/js/dashboard/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="assets/js/dashboard/common-scripts.js"></script>
    <script src="assets/js/dashboard/main.js"></script>
    <script src="assets/js/main.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src="assets/js/dashboard/js.cookie.js"></script>
	<script src="assets/js/dashboard/main-api.js"></script>
	<script src="assets/js/dashboard/main-api-action.js"></script>
	<script src="assets/js/dashboard/main-api-response.js"></script>
	<script src="assets/js/dashboard/utility.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.all.min.js"></script>
	<script class="include" type="text/javascript" src="assets/js/dashboard/jquery.dcjqaccordion.2.7.js"></script>
	<!-- js for this page -->
	@yield("javascript")

  </body>
</html>
