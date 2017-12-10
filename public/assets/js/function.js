
$(document).ready(function(){
	
		// enlarge image 
	   $(document).on('click' ,".imageEnlarge", function(){
		   var src = $(this).find('img').attr('src');
		  
		   
		   $("#bodyContent").append("<div id='imageLoader'> <img  src='"+ src +  "'> </img> </div>");
	  });	  
	  
	  
	  // remove image enlarge
	  $(document).on('click' ,"#imageLoader", function(){

		   $("#imageLoader").remove();
	  });	  
	  
	  
	  
});