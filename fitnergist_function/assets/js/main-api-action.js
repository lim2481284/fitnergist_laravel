$(document).ready(function () {



	/*=============================================	
	
			  Product API action section 	
		
	===============================================*/
	
	//Remove blog action 
	 $(document).on('click','.deleteBlog',function () {		
		var postId= $(this).attr('value');		
		tutorAPI.deleteBlogAPI(postId);				
	});
	
	//Edit blog action 
	$(document).on("click", ".editBlogBtn", function(){
		
		 var blogId = $('.editBlogBtn').attr('value');
		 var blogTagArray = [];
		 var blogTag = $(".blogTag");
		 if(blogTag)
		 {
			for(var i = 0; i < blogTag.length; i++){
				var tagName = $(blogTag[i]).val();
				blogTagArray.push(tagName);
				console.log(tagName);
			}

		 }
		 //Get text editor value 
		 var blogContent = $("#editor").Editor("getText");		 
		 
		 
		 //Get blog title 
		 var blogTitle = $('.blogTitle').val();
		 
		 tutorAPI.modifyBlogAPI(blogId,blogTitle,blogContent,blogTagArray);	
		
	});

	
	//Create product action 
	$(document).on("click", ".createProductBtn", function(){
		var productName = $('.productName').val();
		var productImg = $('.productImg').val();
		var productDescription = $('.productDescription').val();
		var productPrice = $('.productPrice').val();
		var productQuantity = $('.productQuantity').val();
		fitnergistAPI.createProductAPI(productName,productImg,productDescription,productPrice,productQuantity);
		
	});
	
	
	//Upload picture on change
	$(".profileFileUpload").change(function(){
		
		var image = $('#image')[0].files[0];
		var form = new FormData();		
		
		//Get totol product number to generate image name 
		$.get(fitnergistAPI.url+'api/product/total/', function(data, status){
			var total = data.total+1;
			form.append('image', image);
			form.append('name', "image_"+ total);
			//Upload image 
			$.ajax({
				url: fitnergistAPI.url+'api/product/image',
				data: form,
				crossDomain: false,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success:function(response) {
					console.log(response);
				}
			});	
						
		});
		
	});
	
	
	
});

