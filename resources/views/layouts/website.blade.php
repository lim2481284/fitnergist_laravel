<!doctype html>
<!-- Website Template by freewebsitetemplates.com -->
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Fitnergist</title>
	<link rel="stylesheet" type="text/css" href="assets/css/style.css">
	<link rel="stylesheet" type="text/css" href="assets/css/mobile.css" media="screen and (max-width : 568px)">
	<script type="text/javascript" src="assets/js/mobile.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>
<body>

	<div id="header">
		<center>
		<a href="" class="logo">	
			<img id='logo' src="assets/img/Logo.png" alt="">
		</a>
		</center>
		<ul id="navigation">
			<li class="selected">
				<a id="home" >home</a>
			</li>
			<li>
				<a id="about" >about</a>
			</li>
			<li>
				<a id="programme" >programme</a>
			</li>
				<li>
				<a id="gallery" >gallery</a>
			</li>
			<li>
				<a id="contact" >contact</a>
			</li>
			<li>
				<button type='button' id='login'>login</button>
			</li>
		</ul>
	</div>
	<div id="bodyContent">
		@yield("content")
	
	</div>
	
	<div id="footer">
		<div class="leftSection">
				<h3> Contact US</h3>
				<p> Tel : 011-19291212
					<br>
					email : fitnergist@gmail.com
					<br>
					Address : uniten asd
				</p>
		</div>
		<div class="rightSection">
			<h3 id='rightP'> Social media</h3>
			<br><br><br><br>
			<ul>
				
				<li>
					<a href="#" id="twitter">twitter</a>
				</li>
				<li>
					<a href="#" id="facebook">facebook</a>
				</li>
				<li>
					<a href="#" id="googleplus">googleplus</a>
				</li>
				<li>
					<a href="#" id="pinterest">pinterest</a>
				</li>
			</ul>
		</div>

	</div>
</body>
<script type="text/javascript" src="assets/js/navigation.js"></script>
<script type="text/javascript" src="assets/js/function.js"></script>
</html>
