<?php
   


   	
	if ( $_SERVER['REQUEST_METHOD'] == 'POST' ) {	
			
			if(isset($_POST['trackUser']))
			{	
				
				$weight = $_POST['weight'];
				$userId = $_POST['user'];
			
				$sql = "select * from users where id = $userId";
				$result = mysqli_query($conn,$sql);				
				$row = mysqli_fetch_assoc($result);							
				$currentWeight = $row['weight'];
				
				$sql = "select * from usergoal where userId = $userId";
				$result = mysqli_query($conn,$sql);				
				$row = mysqli_fetch_assoc($result);							
				$cValue = $row['currentValue'];
				
				$change = $currentWeight - $weight;
				$cValue = $cValue + $change;
			
				$sql="update  users set `weight` = $weight where id = $userId";	
				
				if(!mysqli_query($conn,$sql))
				{
					echo("Error description: " . mysqli_error($conn));
				}
			
				$sql="update  usergoal set `currentValue` = $cValue where userId = $userId";		
				if(mysqli_query($conn,$sql))
				{
					echo"
					<script> 
						alert('Tracked');
						header('Refresh:0'); 
					</script>";
					
				}else 
				{
					echo("Error description: " . mysqli_error($conn));
				}

				
			}	
				
		}
 
   	//Grab user data sql 
	$sql = "select * from users";
	$result = mysqli_query($conn,$sql);			
	while($row = mysqli_fetch_assoc($result))
	{
	
		$name = $row['username'];
		$id = $row['id'];
		$weight=$row['weight'];
		
		
		echo "
			<script>
			
				var list = `
					<option value='$id' weight='$weight'> $name </option>						  
				`;				
				$('.userList').append(list);
			</script>									
		";

																			
		
	}
	  
   
   
?>
