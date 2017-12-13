<div class="sidebar-menu">
	<div class="logo"> 	
		 <img class='logo_img' src='assets/images/logo_w.png'>
	</div>		  
	<br><br>
	<div class="menu">
	  <ul id="menu" >
		<li id="menu-home" class='menu-icon' >
			<a href="index.php">
				<i class="fa fa-tachometer"></i>
					<span>Dashboard</span>
			</a>
		</li>
		<li id="menu-comunicacao"   class='menu-icon trainerSection'>
			<a href="track.php">
				<i class="fa fa-book nav_icon"></i>
				<span>Tracker</span>				
			</a>
		</li>	
		<li id="menu-comunicacao"   class='menu-icon trainerSection'>
			<a href="track.php">
				<i class="fa fa-book nav_icon"></i>
				<span>User</span>				
			</a>
		</li>		
		<li  class='menu-icon userSection' >
			<a href="#">
				<i class="fa fa-cogs"></i>
				<span>User</span>				
			</a>
		    <ul>
				<li><a href="profile.php"><i class="fa fa-tachometer"></i><span>Profile</span></a></li>
				<li><a href="challenge.php"><i class="fa fa-tachometer"></i><span>Challenge</span></a></li>
				<li><a href="ranking.php"><i class="fa fa-tachometer"></i><span>Ranking </span></a></li>
				<li><a href="achievement.php"><i class="fa fa-tachometer"></i><span>Achievement </span></a></li>
				<li><a href="redeem.php"><i class="fa fa-tachometer"></i><span>Redeem</span></a></li>				          
			</ul>
		</li>
		<li id="menu-comunicacao"   class='menu-icon'>
			<a href="fitcamp.php">
				<i class="fa fa-book nav_icon"></i>
				<span>Fitcamp</span>				
			</a>
		</li>
		<li id="menu-comunicacao"   class='menu-icon trainerSection'>
			<a href="report.php">
				<i class="fa fa-book nav_icon"></i>
				<span>Report </span>				
			</a>
		</li>

		<li  class='menu-icon userSection'>
			<a href="social.php"  class='menu-icon '>
				<i class="fa fa-map-marker"></i>
				<span>Forum</span>
			</a>
		</li>
		<li id="menu-academico"   class='menu-icon'>
			<a href="product.php">
				<i class="fa fa-file-text"></i>
				<span>Product </span>				
			</a>
		</li>		
		<li  class='menu-icon userSection'>
			<a href="setting.php" >
				<i class="fa fa-bar-chart "></i>
				<span>Setting </span>
			</a>
		</li>
	  </ul>
	</div>
</div>	


<!-- change menu sturcutre based on role -->
<?php
	session_start();
	$userRole = $_SESSION['role'];
	if($userRole == 1)
	{
		echo "
		<script>
			$('.userSection').show();
			$('.trainerSection').hide();
		</script>
		";
	}
	else 
	{
		echo "
		<script>
			$('.userSection').hide();
			$('.trainerSection').show();
		</script>
		";
	}

?>