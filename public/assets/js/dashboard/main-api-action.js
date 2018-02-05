$(document).ready(function () {


	/*=============================================

	Tracking API action section

	===============================================*/


		//Update user tracking Btn action
		$(document).on('click','.updateTrackBtn',function () {
			var userID = $(this).val();
			var pr =$('.pr').val();
			var  bmr =$('.bmr').val();
			var fat =$('.fat').val();
			var visceral =$('.visceral').val();
			var height =$('.height').val();
			var water =$('.water').val();
			var weight =$('.weight').val();
			fitnergistAPI.editTrackingAPI(userID,height,weight,water,visceral,fat,bmr,pr);
		});


	//Confirm user goal btn action
	$(document).on('click','.confirmGoalBtn',function () {
		var userID = $(this).val();
		setupAttribute(userID);

	});


	// Reset goal / Create new goal btn action
	$(document).on('click','.createNewGoalBtn',function () {
		swal({
			title: 'Create new user goal',
			allowOutsideClick: false,
			showCancelButton: true,
			html:`
			<p class='swal-label'>Goal condition</p>

			<select  class='swal2-input goalCondition' >
			<option value ='lose' >Lose</option>
			<option value='gain'>Gain</option>
			<option value='maintain'>Maintain</option>
			</select>

			<p class='swal-label'>Goal Type</p>

			<select class='goalTarget swal2-input' >
			<option value ='weight' >Weight</option>
			<option value='fat'>Fat</option>
			<option value='water'>Water</option>
			<option value='muscle'>Muscle</option>
			<option value='visceral'>Visceral</option>
			<option value='bmr'>BMR</option>
			<option value='pr'>PR</option>
			</select>

			<p class='swal-label'>Goal value</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge goalValue swal2-input">
			`,
			focusConfirm: false
		}).then(function (result) {
				var goalCondition = $('.goalCondition').val();
				var goalTarget = $('.goalTarget').val();
				var goalValue = $('.goalValue').val();
				fitnergistAPI.resetUserGoal(goalCondition,goalTarget,goalValue);
		}).catch(swal.noop)
	});

	//Reject user goal Btn action
	$(document).on('click','.rejectGoalBtn',function () {
		var userID = $(this).val();
		swal({
			title: 'Edit user goal',
			allowOutsideClick: false,
			showCancelButton: true,
			html:`
			<p class='swal-label'>Goal condition</p>

			<select  class='swal2-input goalCondition' >
			<option value ='lose' >Lose</option>
			<option value='gain'>Gain</option>
			<option value='maintain'>Maintain</option>
			</select>

			<p class='swal-label'>Goal Type</p>

			<select class='goalTarget swal2-input' >
			<option value ='weight' >Weight</option>
			<option value='fat'>Fat</option>
			<option value='water'>Water</option>
			<option value='muscle'>Muscle</option>
			<option value='visceral'>Visceral</option>
			<option value='bmr'>BMR</option>
			<option value='pr'>PR</option>
			</select>

			<p class='swal-label'>Goal value</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge goalValue swal2-input">
			`,
			focusConfirm: false
		}).then(function (result) {
		    var goalCondition = $('.goalCondition').val();
				var goalTarget = $('.goalTarget').val();
				var goalValue = $('.goalValue').val();
				fitnergistAPI.updateUserGoal(userID,goalCondition,goalTarget,goalValue);
				setupAttribute(userID);
		}).catch(swal.noop)
	});

	function setupAttribute(userID){
		swal({
			title: 'Setup user attribute',
			allowOutsideClick: false,
			showCancelButton: true,
			customClass:'customSwal',
			html:`
			<p class='swal-label'>Weight</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge weight swal2-input">

			<p class='swal-label'>Water</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge water swal2-input">

			<p class='swal-label'>Height</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge height swal2-input">

			<p class='swal-label'>Visceral</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge visceral swal2-input">

			<p class='swal-label'>Fat</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge fat swal2-input">

			<p class='swal-label'>BMR</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge bmr swal2-input">

			<p class='swal-label'>PR</p>
			<input  name="goalValue" type="text" placeholder="" class="input-xlarge pr swal2-input">
			`,
			focusConfirm: false
		}).then(function (result) {
			var pr =$('.pr').val();
			var  bmr =$('.bmr').val();
			var fat =$('.fat').val();
			var visceral =$('.visceral').val();
			var height =$('.height').val();
			var water =$('.water').val();
			var weight =$('.weight').val();
			fitnergistAPI.createTrackingAPI(userID,height,weight,water,visceral,fat,bmr,pr);
			fitnergistAPI.updateUserGoalVerified(userID);
		}).catch(swal.noop)

	}


	/*=============================================

	Redeem API action section

	===============================================*/


	//User redeem ction
	$(document).on('click','.redeemButtonArea',function () {
		var redeemID= $(this).attr('value');
		var point = 0;
		var currentPoint = $.cookie.get("point");
		$.get(fitnergistAPI.url+'api/redeem/' + redeemID , function(data, status){
				point = data.body.point;
				if(currentPoint<point){
					swal('You need more point to redeem this item ! ','','warning');
				}
				else {
					swal({
						title: 'Are you sure you want to redeem this item?',
						type: 'info',
						showCancelButton: true,
						confirmButtonText: 'Yes!'
					}).then((result) => {
						var newPoint = currentPoint - point ;
						Cookies.set('point', newPoint, { expires: 999 });
						fitnergistAPI.createUserRedeemAPI(redeemID);
						fitnergistAPI.editUserPointAPI(newPoint);
					})

				}
		});




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

	//Remove blog action
	$(document).on('click','.deleteRedeemBtn',function () {
		swal({
			title: 'Are you sure?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			var redeemID= $(this).attr('value');
			fitnergistAPI.deleteRedeemAPI(redeemID);
		})

	});

	//Edit redeem action
	$(document).on("click", ".editRedeem", function(){
		var redeemID = $('.redeemID').val();
		var redeemName = $('.editRedeemName').val();
		var redeemImg = $('.editRedeemImg').val();
		var redeemDescription = $('.editRedeemDescription').val();
		var redeemPoint = $('.editRedeemPoint').val();
		if(!redeemImg)
		redeemImg='default';

		if(!redeemName || !redeemDescription || !redeemPoint)
		swal('Please fill in all the field' ,'','error');
		else
		fitnergistAPI.editRedeemAPI(redeemID,redeemImg,redeemDescription,redeemName,redeemPoint);

	});


	//Create redeem action
	$(document).on("click", ".createRedeemBtn", function(){
		var redeemName = $('.redeemName').val();
		var redeemImg = $('.redeemImg').attr('value');
		var redeemDescription = $('.redeemDescription').val();
		var redeemPoint = $('.redeemPoint').val();
		if(!redeemImg)
		redeemImg='default';

		if(!redeemName || !redeemDescription || !redeemPoint)
		swal('Please fill in all the field' ,'','error');
		else
		fitnergistAPI.createRedeemAPI(redeemName,redeemImg,redeemDescription,redeemPoint,1);

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



	//Setup user profile  action
	$(document).on("click", ".updateProfile", function(){

		var name = $('.name').val();
		var email = $('.email').val();
		var contact = $('.contact').val();
		var age = $('.age').val();
		var gender = $('.genderInput').val();
		var address = $('.address').val();
		var img_url = $('.userImg').val();
		var goalCondition = $('.goalCondition').val();
		var goalTarget = $('.goalTarget').val();
		var goalValue = $('.goalValue').val();

		if(!name || !email || !contact || !age || !gender || !address || !goalCondition || ! goalTarget || !goalValue)
		{
			console.log(name + '+' + email   + '+' + contact   + '+' + age   + '+' + gender  + '+' +address + '+' +goalCondition + '+' + goalTarget  + '+' + goalValue );
			swal('Please fill in all the field' ,'','error');
		}else
		{
			fitnergistAPI.editUserAPI(name,email,contact,age,gender,address,img_url);
			fitnergistAPI.createUserGoal(goalCondition,goalTarget,goalValue);
		}


	});



	//Login user action
	$(document).on("click", ".loginBtn", function(){

		//Get user input
		var username = $('.loginUsername').val();
		var pass = $('.loginPass').val();

		//validate input field
		if(!username || !pass )
			swal('Please fill in all the field' ,'','error');	//Pop up error message
		else
			fitnergistAPI.loginAPI(username,pass);	//Call login API

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

	//Remove achievement action
	$(document).on('click','.deleteAchievementBtn',function () {
		swal({
			title: 'Are you sure?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			var achievementID= $(this).attr('value');
			fitnergistAPI.deleteAchievementAPI(achievementID);
		})
	});

	//Edit achievemnet  action
	$(document).on("click", ".editAchievement", function(){
		var achievementID = $('.achievementID').val();
		var achievementName = $('.editAchievementName').val();
		var achievementDescription = $('.editAchievementDescription').val();
		var achievementPoint = $('.editAchievementPoint').val();
		var achievementImg = $('.editAchievementImg').val();
		if(!achievementImg)
		achievementImg='default';

		//validate input field
		if(!achievementName || !achievementDescription || !achievementPoint)
		swal('Please fill in all the field' ,'','error');
		else
		fitnergistAPI.editAchievementAPI(achievementID,achievementImg,achievementDescription,achievementName,achievementPoint);

	});


	//Create achievement action
	$(document).on("click", ".createAchievementBtn", function(){
		var achievementName = $('.achievementName').val();
		var achievementDescription = $('.achievementDescription').val();
		var achievementPoint = $('.achievementPoint').val();
		var achievementImg = $('.achievementImg').attr('value');
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


	//Complete challenge BTN action
	$(document).on('click','.completeChallengeBtn',function () {

			//Get user detail and challenge score point
			var userID = $('.userListSelect').val();
			var challengeID =$(this).val();
			var thisBtn = $(this);
			var challengePoint = $(this).parent().parent().find('.challengePointForEdit').html();

			//Get user detail API call
		  $.get(fitnergistAPI.url+'api/users/profile/' +userID , function(data, status){

					//Add user point
					var point = data.body[0].point;
					var newPoint =parseInt(point) + parseInt(challengePoint) ;
					fitnergistAPI.editUserPointAPI(newPoint,userID);

					//Create user completed challenge record
					thisBtn.parent().parent().remove();
					fitnergistAPI.createUserChallengeAPI(userID,challengeID);
			});
	});

	//Remove achievement action
	$(document).on('click','.deletechallengeBtn',function () {
		swal({
			title: 'Are you sure?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			var challengeID= $(this).attr('value');
			fitnergistAPI.deleteChallengeAPI(challengeID);
		})
	});

	//Edit blog action
	$(document).on("click", ".editChallenge", function(){
		var challengeID = $('.challengeID').val();
		var challengeName = $('.editChallengeName').val();
		var challengeDescription = $('.editChallengeDescription').val();
		var challengePoint = $('.editChallengePoint').val();
		var challengeImg = $('.editChallengeImg').val();
		if(!challengeImg)
		challengeImg='default';

		//validate input field
		if(!challengeName || !challengeDescription || !challengePoint)
		swal('Please fill in all the field' ,'','error');
		else
		fitnergistAPI.editChallengeAPI(challengeID,challengeImg,challengeDescription,challengeName,challengePoint);

	});


	//Create challenge action
	$(document).on("click", ".createChallengeBtn", function(){
		var challengeName = $('.challengeName').val();
		var challengeDescription = $('.challengeDescription').val();
		var challengePoint = $('.challengePoint').val();
		var challengeImg = $('.challengeImg').attr('value');
		if(!challengeImg)
		challengeImg='default';

		console.log(challengeName + ' '  + challengeDescription + ' ' + challengePoint);
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

		if(!forumImg)
		forumImg='default';

		if(!forumTitle || !forumContent)
		swal('Please fill in all the field' ,'','error');
		else
		{
			fitnergistAPI.editForumAPI(forumID,forumTitle,forumContent,forumImg);
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
		var forumImg = $('.forumImg').attr('value');
		var forumUserID = $('.forumUserID').val();
		if(!forumImg){
			forumImg='default';
		}


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

	//Close  fitcamp action
	$(document).on('click','.closeFitcampBtn',function () {
		swal({
			title: 'Are you sure?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, close it!'
		}).then((result) => {
			var fitcampID = $('.fitcampListection').val();
			fitnergistAPI.closeFitcampAPI(fitcampID);
		})
	});


	//Confirm attendance fitcamp action
	$(document).on('click','.confirmAttendanceBtn',function () {
		$(this).html('Cancel');
		$(this).attr('class','btn btn-default cancelAttendanceBtn')
		var userID= $(this).attr('value');
		var fitcampID= $('.fitcampIDHidden').attr('value');
		fitnergistAPI.confirmFitcampRegisterAPI(fitcampID,userID);
	});


	//Cancel attendance fitcamp action
	$(document).on('click','.cancelAttendanceBtn',function () {
		$(this).html('Attended');
		$(this).attr('class','btn btn-default confirmAttendanceBtn')
		var userID= $(this).attr('value');
		var fitcampID= $('.fitcampIDHidden').attr('value');
		fitnergistAPI.cancelFitcampRegisterAPI(fitcampID,userID);
	});



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
		swal({
			title: 'Are you sure?',
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			var fitcampID= $(this).attr('value');
			fitnergistAPI.deleteFitcampAPI(fitcampID);
		})

	});


	//Edit fitcamp action
	$(document).on("click", ".editFitcamp", function(){
		var fitcampID = $('.fitcampID').val();
		var fitcampName = $('.editFitcampName').val();
		var fitcampDescription = $('.editFitcampDescription').val();
		var fitcampLocation = $('.editFitcampLocation').val();
		var fitcampPrice = $('.editFitcampPrice').val();
		var fitcampStartDate = $('.editFitcampStartDate').val();
		var fitcampEndDate = $('.editFitcampEndDate').val();
		var fitcampPoint = $('.editFitcampPoint').val();
		var fitcampImg = $('.fitcampImg_edit').val();
		if(!fitcampImg)
		fitcampImg='default';

		if(!fitcampPoint|| !fitcampName || !fitcampDescription || !fitcampLocation || !fitcampPrice || !fitcampStartDate|| !fitcampEndDate)
		swal('Please fill in all the field' ,'','error');
		else
		fitnergistAPI.editFitcampAPI(fitcampImg,fitcampDescription,fitcampName,fitcampLocation,fitcampPrice,fitcampStartDate,fitcampEndDate,fitcampID, fitcampPoint);

	});



	//Create fitcamp action
	$(document).on("click", ".createFitcampBtn", function(){
		var fitcampName = $('.fitcampName').val();
		var fitcampDescription = $('.fitcampDescription').val();
		var fitcampLocation = $('.fitcampLocation').val();
		var fitcampPrice = $('.fitcampPrice').val();
		var fitcampStartDate = $('.fitcampStartDate').val();
		var fitcampEndDate = $('.fitcampEndDate').val();
		var fitcampImg = $('.fitcampImg').attr('value');
		var fitcampPoint = $('.fitcampPoint').val();
		if(!fitcampImg)
		fitcampImg='default';

		if(!fitcampPoint|| !fitcampName || !fitcampDescription || !fitcampLocation || !fitcampPrice || !fitcampStartDate|| !fitcampEndDate)
		swal('Please fill in all the field' ,'','error');
		else
		fitnergistAPI.createFitcampAPI(fitcampImg,fitcampDescription,fitcampName,fitcampLocation,fitcampPrice,fitcampStartDate,fitcampEndDate,fitcampPoint);

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
