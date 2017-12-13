$(document).ready(function () {





	/*=============================================		
	
				Product API response section 	
		
	==============================================*/
	
	// Edit qualification API response 
    $(document).off('createProductResponse').on('createProductResponse', function (e, data, status) {		   
		swal('Create Blog Success', "" ,"success").then(() => {
			location.reload();	
		});			  	          
    });

	

	
});