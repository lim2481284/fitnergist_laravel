<!DOCTYPE html>

<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title> Login page </title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<link rel="stylesheet" href="assets/css/main.css">
	<link rel="stylesheet" type="text/css" href="assets/css/responsive/main.css" media="screen and (max-width : 768px)">
</head>

<body>

<!-- Loader, not necessary because too fast
	<div class='loader'>
		<img src='assets/img/logo.png'/>
		<label class='loader-label'> Loading ... </label>
	</div>
-->



	<div id='bodyContent' class='fade-out'>
		<img class='cover'/>
		<div class='loginBox'>
			<div class='logoArea'>
				<center>
					<img class='logo' src='assets/img/logo.png'/>
				</center>
			</div>
			<div class='bannerArea'>
				<center>
					<img class='banner' src='assets/img/banner.png'/>
				</center>
			</div>
			<div class='buttonArea'>
				<center>
					<img class='button startBtn' src='assets/img/button.png'/>
				</center>
			</div>
		</div>
		<div class='dotBox'>
			<center>
				<div class='dot' src=""/>

			</center>
		</div>
		<div class='formBox'>
			<div class='formArea'>
				<center>
					<img class='form' src="assets/img/form.png"/>
					<div class='formInput loginForm formToggle'>
						<input class='loginUsername' required placeholder='username'/>
						<br><br>
						<input  type='password' class='loginPass' required placeholder='password'/>
						<br><br><br>
						<button class='loginBtn active' type='button'> Login </button>
						<br>
						<button class='inactive formToggleBtn' type='button'> Register </button>
					</div>
					<div class='formInput registerForm formToggle'>
						<input class='registerUser' required placeholder='username'/>
						<br><br>
						<input class='email' required placeholder='email'/>
						<br><br>
						<input  type='password' class='registerPass' required placeholder='password'/>
						<br><br>
						<input  type='password' class='registerConPass' required placeholder='confirm password'/>
						<br><br><br>
						<button class='createUserBtn active'   type='button'> Register </button>
						<br>
						<button class='inactive formToggleBtn' type='button'> Login </button>
					</div>
				</center>
			</div>
		</div>
		<div class='navigate'></div>
	</div>
</body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="assets/js/dashboard/js.cookie.js"></script>
<script src="assets/js/dashboard/main-api.js"></script>
<script src="assets/js/dashboard/main-api-action.js"></script>
<script src="assets/js/dashboard/main-api-response.js"></script>
<script src="assets/js/dashboard/utility.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/6.11.0/sweetalert2.all.min.js"></script>
<script type="text/javascript" src="assets/js/main.js"></script>
<script type="text/javascript" src="assets/js/dashboard/page-js/login.js"></script>
</html>
