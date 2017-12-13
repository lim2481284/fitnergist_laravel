<?php 
	
	include("assets/php/mysql_connect.inc.php"); 	
	include("assets/php/user_function.php"); 
?>


<!DOCTYPE html>

<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title> Fitnergist </title>
	<link rel="stylesheet" href="assets/css/login.css"> 
	<script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>

</head>

<body>
<center>
	<img id='loginBack' src='assets/img/back.png'> </img>
	<div class="login-page">
		  <div class="form">
				<form action ="#" method = "post" class="register-form" onsubmit="return check()">					
					  <div id="test">
						  <label style='font-size:20px;'> Create Account </label>
						  <br><br>
						  <input type="text" placeholder="Username" name="username" required/>
						  <input id="pass" type="password" placeholder="Password" name="password" required onkeyup="checkPass(); return false;"/>
						  <input  id="confirmpass" type="password" placeholder="Confirm password" required  onkeyup="checkPass(); return false;"/>
						  <input type="email" name="email" placeholder="Email address" required/>				  
						  <button id='register' name="register">create</button>
					  </div>
					  <p class="message">Already registered? <a href="#">Sign In</a></p>
				</form>
			
				
				<form action ="#" method = "post"  class="login-form">
					   <center><img src = 'assets/img/logo.png' class='logo'> </center>
						<!--  <h1 style='color:#76b852; border-color:grey;margin:3%;'> i-PreDi </h1> -->
					  <input type="text" name="username" placeholder="Username / email"  required/>
					  <input type="password" name="password" placeholder="Password"  required/>
					  <button name="login">login</button>
					  <p class="message">Not registered? <a href="#">Create an account</a></p>
				</form>
				
			
				
		  </div>
	</div>

</body>
</html>

<script type="text/javascript" src="assets/js/navigation.js"></script>
<script type="text/javascript" src="assets/js/login.js"></script>



