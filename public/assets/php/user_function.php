

<?php
	
	if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {	
						

		if(isset($_POST['register']))
		{	

			$username  = $_POST['username'];			
			$email  = $_POST['email'];			
			$pass  = $_POST['password'];		
			$name  = $_POST['name'];		
			$age  = $_POST['age'];		
			$height  = $_POST['height'];		
			$gender = $_POST['gender'];
			$goalType  = $_POST['goalType'];		
			$goalValue = $_POST['goalValue'];
			$weight = $_POST['weight'];
	
			
			$sql="insert into users (`username`,`email`,`pass`,`name`,`age`,`height`,`gender`,`weight`) values ('$username', '$email', '$pass', '$name', '$age', '$height', '$gender','$weight')";
			if(mysqli_query($conn,$sql))
			{
				$sql="select * from users where username = '$username' ";
				$result = mysqli_query($conn,$sql);
				$row = mysqli_fetch_assoc($result);
				$userId = $row['id'];
				
				$sql="insert into userGoal (`userId`,`goalType`,`goalValue`,`currentValue`) values ('$userId', '$goalType', '$goalValue', '0')";				
				mysqli_query($conn,$sql);
				
				echo"<script>
					alert('Register success');
					location.href = '';
				
				</script>";
				
			}else 
			{
				echo"<script> alert('Account already exists');
				</script>";
			}
			
		}	
		if(isset($_POST['login']))
		{	

			$username  = $_POST['username'];							
			$pass  = $_POST['password'];		
			
			$sql = "select * from users where username = '$username' and pass = '$pass' ";
			$result = mysqli_query($conn,$sql);			
			if(mysqli_num_rows($result)==1)
			{
				$row = mysqli_fetch_assoc($result);
				
				$_SESSION['userId'] = $row['id'];				
				$_SESSION['username'] = $username;				
				$_SESSION['pass'] = $pass;
				$_SESSION['role'] = $row['roleId'];				
				
				echo '					
					<script>
						alert("Login success");
						location.href="dashboard";
					</script>
				';		
			}
			else 
			{
				echo '<script>alert("Wrong password or username ");				
				</script>';
			}
						
			
		}		
	}



 ?>
