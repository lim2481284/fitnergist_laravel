$(document).ready(function () {


		/*=============================================

				  Redeem API action section

		===============================================*/


		//User redeem ction
		 $(document).on('click','.redeemButtonArea',function () {
			 swal({
				 title: 'Are you sure you want to redeem this item?',
				 type: 'info',
				 showCancelButton: true,
				 confirmButtonText: 'Yes!'
			 }).then((result) => {
				 var redeemID= $(this).attr('value');
	 				fitnergistAPI.createUserRedeemAPI(redeemID);
			 })

		});



		//Upload picture on change
		$(".redeemFileUpload").change(function(){

			var image = $('#image')[0].files[0];
			var form = new FormData();

			//Get totol redeem number to generate image name
			$.get(fitnergistAPI.url+'api/redeem/total/', function(data, status){
				var total = data.total+1;
				var imageName = "image_"+ total;
				form.append('image', image);
				form.append('name', imageName);
				//Upload image
				$.ajax({
					url: fitnergistAPI.url+'api/redeem/image',
					data: form,
					crossDomain: false,
					cache: false,
					contentType: false,
					processData: false,
					type: 'POST',
					success:function(response) {
						console.log(response);
						$('.redeemImg').attr('value',imageName);
					}
				});

			});
		});

		//Remove redeem action
		 $(document).on('click','.deleteRedeem',function () {
			var postId= $(this).attr('value');
			tutorAPI.deleteBlogAPI(postId);
		});

		//Edit redeem action
		$(document).on("click", ".editRedeemBtn", function(){

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


			 //Get redeem title
			 var blogTitle = $('.gTitle').val();

			 tutorAPI.modifyBlogAPI(blogId,blogTitle,blogContent,blogTagArray);

		});


		//Create product action
		$(document).on("click", ".createRedeemBtn", function(){
			var redeemName = $('.redeemName').val();
			var redeemImg = $('.redeemImg').val();
			var redeemDescription = $('.redeemDescription').val();
			var redeemPoint = $('.redeemPoint').val();
			var redeemQuantity = $('.redeemQuantity').val();
			if(!redeemImg)
				redeemImg='default';

			if(!redeemName || !redeemDescription || !redeemPoint || !redeemQuantity)
				swal('Please fill in all the field' ,'','error');
			else
				fitnergistAPI.createRedeemAPI(redeemName,redeemImg,redeemDescription,redeemPoint,redeemQuantity);

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





		/*=============================================

				  User  API action section

		===============================================*/

		//Upload user profile picture
		$(".userFileUpload").change(function(){

			var image = $('#image')[0].files[0];
			var form = new FormData();

			//Get totol product number to generate image name

				var imageName = "image_"+ fitnergistAPI.userID;
				form.append('image', image);
				form.append('name', imageName);
				//Upload image
				$.ajax({
					url: fitnergistAPI.url+'api/users/image',
					data: form,
					crossDomain: false,
					cache: false,
					contentType: false,
					processData: false,
					type: 'POST',
					success:function(response) {
						console.log(response);
						$('.userImg').attr('value',imageName);
					}


			});

		});


		//Remove user action
		 $(document).on('click','.changePasswordBtn',function () {

		});



		//Edit user  action
		$(document).on("click", ".updateProfile", function(){

			 var name = $('.name').val();
			 var email = $('.email').val();
			 var contact = $('.contact').val();
			 var age = $('.age').val();
			 var gender = $('.gender').val();
			 var address = $('.address').val();
			 var img_url = $('.userImg').val();

			 fitnergistAPI.editUserAPI(name,email,contact,age,gender,address,img_url);

		});



		//Login user action
		$(document).on("click", ".loginBtn", function(){

			var username = $('.loginUsername').val();
			var pass = $('.loginPass').val();

			//validate input field
			if(!username || !pass )
				swal('Please fill in all the field' ,'','error');
			else
				fitnergistAPI.loginAPI(username,pass);

		});

		//Register user action
		$(document).on("click", ".createUserBtn", function(){

			var username = $('.registerUser').val();
			var pass = $('.registerPass').val();
			var confirmPass = $('.registerConPass').val();
			var email = $('.email').val();

			if(pass!=confirmPass){
					swal('Password not same with confirm password' ,'','error');
					return 0;
			}
			//validate input field
			if(!username || !pass || !email)
				swal('Please fill in all the field' ,'','error');
			else
				fitnergistAPI.createUserAPI(username,pass,email);

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

	//Remove forum action
	 $(document).on('click','.deleteForumBtn',function () {
		 swal({
		  title: 'Are you sure?',
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			var forumID= $(this).attr('value');
			fitnergistAPI.deleteForumAPI(forumID);
		})

	});

	//Edit forum action
	$(document).on("click", ".editForum", function(){

		 var forumID = $('.forumID').attr('value');
		 var forumTitle = $('.editForumTitleInput').val();
		 var forumContent = $('.editForumContent').val();
	 		var forumImg = $('.forumImg').val();
	 		var forumUserID = 1;
	 		if(!forumImg)
	 			forumImg='default';

	 		if(!forumTitle || !forumContent)
	 			swal('Please fill in all the field' ,'','error');
	 		else
	 		{
	 			fitnergistAPI.editForumAPI(forumID,forumTitle,forumContent,forumUserID,forumImg);
	 			location.href='#';
	 		}

	});



	//Remove comment action
	 $(document).on('click','.deleteCommentBtn',function () {
		 swal({
		  title: 'Are you sure?',
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			var forumID= $(this).attr('value');
			fitnergistAPI.deleteCommentAPI(forumID);
		})

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
		var forumTitle = $('.forumTitleInput').val();
		var forumContent = $('.forumContent').val();
		var forumImg = $('.forumImg').val();
		var forumUserID = $('.forumUserID').val();
		if(!forumImg)
			forumImg='default';

		if(!forumTitle || !forumContent)
			swal('Please fill in all the field' ,'','error');
		else
		{
			fitnergistAPI.createForumAPI(forumTitle,forumContent,forumUserID,forumImg);
			location.href='#';
		}
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



		//Upload picture on change -- edit
		$(".forumFileUpload_Edit").change(function(){

			var image = $('#image_edit')[0].files[0];
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
						$('.forumImg_edit').attr('value',imageName);
					}
				});

			});

		});






	/*=============================================

			  Fitcamp  API action section

	===============================================*/


	//Register fitcamp action
	 $(document).on('click','.joinFitcampBtn',function () {
		var fitcampID= $(this).attr('value');
		fitnergistAPI.createfitcampRegisterAPI(fitcampID);
	});


	//Delete fitcamp register action
	 $(document).on('click','.quitFitcampBtn',function () {
		var fitcampID= $(this).attr('value');
		fitnergistAPI.deletefitcampRegisterAPI(fitcampID);
	});

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
