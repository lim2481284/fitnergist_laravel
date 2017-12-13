

<?php

	session_start();
	
	
	// Grab menu data 
	$username  =  $_SESSION['username'];
    
	echo "
		<script>
			$('.usernameHeader').html('$username');
		</script>	
	";
			
 ?>
