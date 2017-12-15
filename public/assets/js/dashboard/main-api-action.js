$(document).ready(function () {


	/*=============================================	
	
			  Achievement API action section 	
		
	===============================================*/
	
	//Remove blog action 
	 $(document).on('click','.deleteChallengeBtn',function () {		
		var postId= $(this).attr('value');		
		tutorAPI.deleteBlogAPI(postId);				
	});
	
	//Edit blog action 
	$(document).on("click", ".editChallengeBtn", function(){
		
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
	$(document).on("click", ".createAchievementBtn", function(){
		var achievementName = $('.achievementName').val();
		var achievementDescription = $('.achievementDescription').val();
		var achievementPoint = $('.achievementPoint').val();
		var achievementImg = $('.achievementImg').val();		
		if(!achievementImg)
			achievementImg='default';
		
		//validate input field
		if(!achievementName || !achievementDescription || !achievementPoint)
			swal('Please fill in all the field' ,'','error');
		else 
			fitnergistAPI.createAchievementAPI(achievementImg,achievementDescription,achievementName,achievementPoint);
		
	});
	
	
	//Upload picture on change
	$(".achievementFileUpload").change(function(){
		
		var image = $('#image')[0].files[0];
		var form = new FormData();		
		
		//Get totol product number to generate image name 
		$.get(fitnergistAPI.url+'api/achievement/total/', function(data, status){
			var total = data.total+1;
			var imageName = "image_"+ total;
			form.append('image', image);
			form.append('name', imageName);			
			//Upload image 
			$.ajax({
				url: fitnergistAPI.url+'api/achievement/image',
				data: form,
				crossDomain: false,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success:function(response) {
					console.log(response);
					$('.achievementImg').attr('value',imageName);
				}
			});	
						
		});
		
	});
	


	
	


	/*=============================================	
	
			  Challenge API action section 	
		
	===============================================*/
	
	//Remove blog action 
	 $(document).on('click','.deleteChallengeBtn',function () {		
		var postId= $(this).attr('value');		
		tutorAPI.deleteBlogAPI(postId);				
	});
	
	//Edit blog action 
	$(document).on("click", ".editChallengeBtn", function(){
		
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
	$(document).on("click", ".createChallengeBtn", function(){
		var challengeName = $('.challengeName').val();
		var challengeDescription = $('.challengeDescription').val();
		var challengePoint = $('.challengePoint').val();
		var challengeImg = $('.challengeImg').val();		
		if(!challengeImg)
			challengeImg='default';
		
		//validate input field
		if(!challengeName || !challengeDescription || !challengePoint)
			swal('Please fill in all the field' ,'','error');
		else 
			fitnergistAPI.createChallengeAPI(challengeImg,challengeDescription,challengeName,challengePoint);
		
	});
	
	
	//Upload picture on change
	$(".challengeFileUpload").change(function(){
		
		var image = $('#image')[0].files[0];
		var form = new FormData();		
		
		//Get totol product number to generate image name 
		$.get(fitnergistAPI.url+'api/challenge/total/', function(data, status){
			var total = data.total+1;
			var imageName = "image_"+ total;
			form.append('image', image);
			form.append('name', imageName);			
			//Upload image 
			$.ajax({
				url: fitnergistAPI.url+'api/challenge/image',
				data: form,
				crossDomain: false,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success:function(response) {
					console.log(response);
					$('.challengeImg').attr('value',imageName);
				}
			});	
						
		});
		
	});
	





	/*=============================================	
	
			  Forum API action section 	
		
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

	//Create forum comment action 
	$(document).on("click", ".createCommentBtn", function(){
		var commentInputField = $('.commentInputField').val();
		var userID = 1;
		var forumID = $('.forumID').attr('value');

		fitnergistAPI.createCommentAPI(forumID,userID,commentInputField);
		
	});
	

	
	//Create forum action 
	$(document).on("click", ".createForumBtn", function(){
		var forumTitle = $('.forumTitle').val();
		var forumContent = $('.forumContent').val();
		var forumImg = $('.forumImg').val();
		var forumUserID = $('.forumUserID').val();		
		if(!forumImg)
			forumImg='default';
		
		if(!forumTitle || !forumContent)
			swal('Please fill in all the field' ,'','error');
		else 
			fitnergistAPI.createForumAPI(forumTitle,forumContent,forumUserID,forumImg);
		
	});
	
	
	//Upload picture on change
	$(".forumFileUpload").change(function(){
		
		var image = $('#image')[0].files[0];
		var form = new FormData();		
		
		//Get totol product number to generate image name 
		$.get(fitnergistAPI.url+'api/forum/total/', function(data, status){
			var total = data.total+1;
			var imageName = "image_"+ total;
			form.append('image', image);
			form.append('name', imageName);			
			//Upload image 
			$.ajax({
				url: fitnergistAPI.url+'api/forum/image',
				data: form,
				crossDomain: false,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success:function(response) {
					console.log(response);
					$('.forumImg').attr('value',imageName);
				}
			});	
						
		});
		
	});
	







	/*=============================================	
	
			  Fitcamp  API action section 	
		
	===============================================*/
	
	//Remove blog action 
	 $(document).on('click','.deleteFitcampBtn',function () {		
		var postId= $(this).attr('value');		
		tutorAPI.deleteBlogAPI(postId);				
	});
	
	//Edit blog action 
	$(document).on("click", ".editFitcampBtn", function(){
		
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
	$(document).on("click", ".createFitcampBtn", function(){
		var fitcampName = $('.fitcampName').val();
		var fitcampDescription = $('.fitcampDescription').val();
		var fitcampLocation = $('.fitcampLocation').val();
		var fitcampPrice = $('.fitcampPrice').val();
		var fitcampStartDate = $('.fitcampStartDate').val();
		var fitcampEndDate = $('.fitcampEndDate').val();
		var fitcampImg = $('.fitcampImg').val();
		if(!fitcampImg)
			fitcampImg='default';
		
		if(!fitcampName || !fitcampDescription || !fitcampLocation || !fitcampPrice || !fitcampStartDate|| !fitcampEndDate)
			swal('Please fill in all the field' ,'','error');
		else 
			fitnergistAPI.createFitcampAPI(fitcampImg,fitcampDescription,fitcampName,fitcampLocation,fitcampPrice,fitcampStartDate,fitcampEndDate);
		
	});
	
	
	//Upload picture on change
	$(".profileFileUpload").change(function(){
		
		var image = $('#image')[0].files[0];
		var form = new FormData();		
		
		//Get totol product number to generate image name 
		$.get(fitnergistAPI.url+'api/fitcamp/total/', function(data, status){
			var total = data.total+1;
			var imageName = "image_"+ total;
			form.append('image', image);
			form.append('name', imageName);			
			//Upload image 
			$.ajax({
				url: fitnergistAPI.url+'api/fitcamp/image',
				data: form,
				crossDomain: false,
				cache: false,
				contentType: false,
				processData: false,
				type: 'POST',
				success:function(response) {
					console.log(response);
					$('.fitcampImg').attr('value',imageName);
				}
			});	
						
		});
		
	});
	

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
		if(!productImg)
			productImg='default';
		
		if(!productName || !productDescription || !productPrice || !productQuantity)
			swal('Please fill in all the field' ,'','error');
		else 
			fitnergistAPI.createProductAPI(productName,productImg,productDescription,productPrice,productQuantity);
		
	});
	
	
	//Upload picture on change
	$(".profileFileUpload").change(function(){
		
		var image = $('#image')[0].files[0];
		var form = new FormData();		
		
		//Get totol product number to generate image name 
		$.get(fitnergistAPI.url+'api/product/total/', function(data, status){
			var total = data.total+1;
			var imageName = "image_"+ total;
			form.append('image', image);
			form.append('name', imageName);			
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
					$('.productImg').attr('value',imageName);
				}
			});	
						
		});
		
	});
	
	
	
});

