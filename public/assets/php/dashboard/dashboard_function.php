<?php

	$role = $_SESSION['role'];

	if($role == 1 )
	{
			
		$sql = "select * from usergoal where userId = '$USERID' ";
		$result = mysqli_query($conn,$sql);			

		$row = mysqli_fetch_assoc($result);
		$currentValue = $row['currentValue'];
		$goalValue = $row['goalValue'];			
		$progress = $currentValue / $goalValue * 100;
		echo "
		
			<script>
				var val = 0, progress = 0;

				function progressBar() {  
				  var progress = '$progress'+'%';
				  $('.progress-now').css('width', progress);  
				  $('.progress-now').attr('value',$goalValue);
				  
				}
				progressBar();





			</script>
		";
	}
	else 
	{
		echo "
			<script>
				$('.progressSection').html('');
				$('.topic_1').html('Tracker');				
				$('.topic_2').html('Report Management ');
				$('.topic_3').html('Fitcamp');
				$('.topic_4').html('User ');
				$('.desc_1').html('Track user fitness record');
				$('.desc_2').html('View statistic');
				$('.desc_3').html('Create, manage your fitcamp');
				$('.desc_4').html('Edit, delete, view user');
				$('.link_1').attr('href','track.php');
				$('.link_2').attr('href','report.php');
				$('.link_3').attr('href','fitcamp.php');
				$('.link_4').attr('href','user.php');
				
			</script>
		
		";
	}
	
?>
