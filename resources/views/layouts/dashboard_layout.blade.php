<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">           
    <title>Fitnergist</title>   
	
	<!-- css for all page -->
    <link href="assets/css/dashboard/bootstrap.css" rel="stylesheet">    
    <link href="assets/font-awesome/css/font-awesome.css" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="assets/css/dashboard/lineicons.css">           
    <link href="assets/css/dashboard/style.css" rel="stylesheet">
    <link href="assets/css/dashboard/style-responsive.css" rel="stylesheet">
	<link href="assets/css/dashboard/main.css" rel="stylesheet">
	<link href="assets/css/dashboard/responsive/main.css" rel="stylesheet">
	
	<!-- css for this page -->
	@yield("css")
	
	
  </head>

  <body>

  <section id="container" >

      <!--------------------------------- 	  
				    Top menu		
	  ---------------------------------->
      <header class="header black-bg">
			<div class="sidebar-toggle-box">
                  <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
			</div>            
            <a href="index.html" class="logo"><b>FITNERGIST</b></a>                       
            <div class="top-menu">
            	<ul class="nav pull-right top-menu">
                    <li><a class="logout" href="login.html">Logout</a></li>
            	</ul>
            </div>
        </header>
      
      
       <!--------------------------------- 	  
				    Side menu							
	  ---------------------------------->
	  
	  	<!-- 
				@if (Auth::guest())
						a
				@else
					 {{ Auth::user()->roleID }}
				@endif
		-->
	  
	  
      <aside>
          <div id="sidebar"  class="nav-collapse ">
              <!-- sidebar menu start-->
              <ul class="sidebar-menu" id="nav-accordion">
				  <br>
              	  <p class="centered"><a href="profile.html"><img src="assets/img/ui-sam.jpg" class="img-circle" width="60"></a></p>
              	  <h5 class="centered"></h5>
              	  <br>	
                  <li class="mt">
                      <a class="dashboardMenu" href="/dashboard">
                          <i class="fa fa-dashboard"></i>
                          <span>Dashboard</span>
                      </a>
                  </li>

                  <li class="sub-menu">
                      <a class='userMenu' href="javascript:;" >
                          <i class="fa fa-desktop"></i>
                          <span>User</span>
                      </a>
                      <ul class="sub">
						  <li><a  href="/profile">Profile</a></li>	
                          <li><a  href="/challenge">Challenge</a></li>
                          <li><a  href="/ranking">Ranking</a></li>
                          <li><a  href="/achievement">Achievement</a></li>
						  <li><a  href="/redeem">Redeem</a></li>
                      </ul>
                  </li>
				  
				  <li class="sub-menu">
                      <a class='productMenu' href="/product">
                          <i class="fa fa-dashboard"></i>
                          <span>Product</span>
                      </a>
                  </li>
	
				  <li class="sub-menu">
                      <a class='fitcampMenu' href="/fitcamp">
                          <i class="fa fa-dashboard"></i>
                          <span>Fitcamp</span>
                      </a>
                  </li>
				  
				  <li class="sub-menu">
                      <a class='forumMenu' href="/forum">
                          <i class="fa fa-dashboard"></i>
                          <span>Forum</span>
                      </a>
                  </li>

				  <li class="sub-menu">
                      <a class='trackingMenu' href="/tracking">
                          <i class="fa fa-dashboard"></i>
                          <span>Tracking</span>
                      </a>
                  </li>		

                  <li class="sub-menu">
                      <a class='historyMenu' href="javascript:;" >
                          <i class="fa fa-desktop"></i>
                          <span>History</span>
                      </a>
                      <ul class="sub">
						  <li><a  href="/trackinghistory">Tracking</a></li>	
                          <li><a  href="/redeem/history">Redeem</a></li>
                      </ul>
                  </li>		
				  
              </ul>              
          </div>
      </aside>
     
	  <!--------------------------------- 	  
				  Main content		
	  ---------------------------------->	 
      <section id="main-content">
          <section class="wrapper">
              <div class="row">
					@yield("content")
              </div>
          </section>
      </section>

	</section>

    <!-- js for all page -->
    <script src="assets/js/dashboard/jquery.js"></script>
    <script src="assets/js/dashboard/jquery-1.8.3.min.js"></script>    
    
    <script src="assets/js/dashboard/jquery.scrollTo.min.js"></script>
    <script src="assets/js/dashboard/jquery.nicescroll.js" type="text/javascript"></script>
    <script src="assets/js/dashboard/common-scripts.js"></script>
    <script src="assets/js/dashboard/main.js"></script>
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
