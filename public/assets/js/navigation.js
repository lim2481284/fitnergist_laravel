
$(document).ready(function(){
	  $("#bodyContent").load("home.html");
	  
	  
	  $("#home").click(function(){
		    $("#bodyContent").empty();
			 $("#bodyContent").load("assets/html/home.html");
			$("#home").css("color", "#0ba39c");
			$("#about").css("color", "#252525");
			$("#programme").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
	  $("#about").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("assets/html/about.html");
			$("#about").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#programme").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
	  $("#programme").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("assets/html/programme.html");
			$("#programme").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#about").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
	  $("#contact").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("assets/html/contact.html");
			$("#contact").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#about").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#programme").css("color", "#252525");
	  });
	  $("#gallery").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("assets/html/gallery.html");
			$("#gallery").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#about").css("color", "#252525");
			$("#programme").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
		$(document).on('click', '#join' ,function(){
		   location.href = "login.php"; 
	  });

	  $("#loginBack").click(function(){
		    location.href = "/"; 
	  });
	  $("#login").click(function(){
		    location.href = "/login"; 
	  });

});