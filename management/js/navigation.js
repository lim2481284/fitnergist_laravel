
$(document).ready(function(){
	  $("#bodyContent").load("home.html");
	  
	  
	  $("#home").click(function(){
		    $("#bodyContent").empty();
			 $("#bodyContent").load("home.html");
			$("#home").css("color", "#0ba39c");
			$("#about").css("color", "#252525");
			$("#programme").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
	  $("#about").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("about.html");
			$("#about").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#programme").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
	  $("#programme").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("programme.html");
			$("#programme").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#about").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
	  $("#contact").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("contact.html");
			$("#contact").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#about").css("color", "#252525");
			$("#gallery").css("color", "#252525");
			$("#programme").css("color", "#252525");
	  });
	  $("#gallery").click(function(){
		    $("#bodyContent").empty();
			$("#bodyContent").load("gallery.html");
			$("#gallery").css("color", "#0ba39c");
			$("#home").css("color", "#252525");
			$("#about").css("color", "#252525");
			$("#programme").css("color", "#252525");
			$("#contact").css("color", "#252525");
	  });
		$(document).on('click', '#join' ,function(){
		   location.href = "login.html"; 
	  });

	  $("#loginBack").click(function(){
		    location.href = "index.html"; 
	  });
	  $("#login").click(function(){
		    location.href = "login.html"; 
	  });

});