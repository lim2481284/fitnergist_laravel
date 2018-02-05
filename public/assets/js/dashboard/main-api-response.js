$(document).ready(function () {


	//	reload
	$(document).off('reload').on('reload', function (e, data, status) {
		location.reload();
	});



	/*=============================================

	Tracking  API response section

	==============================================*/

	$(document).off('editTrackingAPIResponse').on('editTrackingAPIResponse', function (e, data, status,userID) {
		$('.attributeSection').html('');


		swal('Tracked', "" ,"success").then(() => {

		});
	});


	$(document).off('getCurrentUserTrackingAPIResponse').on('getCurrentUserTrackingAPIResponse', function (e, data, status,userID) {
		var track = data.body[0];
		if(track){
			var trackHTML=`
			<div class='circle'>
			<div class='circleLabel'>
			<p>Weight</p>
			<p class='circleValue'>`+track.weight+`</p>
			</div>
			</div>
			<div class='circle'>
			<div class='circleLabel'>
			<p>Height</p>
			<p class='circleValue'>`+track.height+`</p>
			</div>
			</div>
			<div class='circle'>
			<div class='circleLabel'>
			<p>Water</p>
			<p class='circleValue'>`+track.water+`</p>
			</div>
			</div>
			<div class='circle'>
			<div class='circleLabel'>
			<p>Fat</p>
			<p class='circleValue'>`+track.fat+`</p>
			</div>
			</div>
			<div class='circle'>
			<div class='circleLabel'>
			<p>BMR</p>
			<p class='circleValue'>`+track.bmr+`</p>
			</div>
			</div>
			<div class='circle'>
			<div class='circleLabel'>
			<p>PR</p>
			<p class='circleValue'>`+track.pr+`</p>
			</div>
			</div>
			<div class='circle'>
			<div class='circleLabel'>
			<p>Visceral</p>
			<p class='circleValue'>`+track.visceral+`</p>
			</div>
			</div>
			`;
		}
		$('.attributeList').html(trackHTML);
	});


	/*=============================================

	Redeem API response section

	==============================================*/



	//User redeem API response
	$(document).off('createUserRedeemAPIResponse').on('createUserRedeemAPIResponse', function (e, data, status) {
		swal('Redeem Success', "" ,"success").then(() => {
			location.reload();
		});
	});


	//Get current User redeem API response
	$(document).off('getUserRedeemAPIResponse').on('getUserRedeemAPIResponse', function (e, data, status) {


		var userRedeem = data.body;

		for(var i =0 ; i < userRedeem.length; i++ )
		{
			var redeemID = userRedeem[i].redeemID;
			var redeemDate = userRedeem[i].updated_at;
			$.get(fitnergistAPI.url+'api/redeem/'+ redeemID, function(data, status){

				var redeem = data.body;
				var redeemTitle = redeem.title;
				var redeemContent = redeem.description;
				var redeemPoint = redeem.point;
				var redeemImg = redeem.img_url;
				var userRedeemHTML=`
				<div class='redeemHistoryList col-sm-12'>
				<div class='col-sm-2 historyImageSection'>
				<img class='historyImage' src='assets/img/redeem/`+redeemImg+`.jpg'/>
				</div>
				<div class='historyContent col-sm-8'>
				<p class='historyTite'>`+redeemTitle+`  </p>
				<p class='historyDescription'> `+redeemContent+`  </p>
				<p class='historyPoint'>-- `+redeemPoint+` pt -- </p>
				</div>
				<div class='historyDate col-sm-2'>
				`+redeemDate+`
				</div>
				</div>
				`;

				$('.redeemHistory').append(userRedeemHTML);

			});
		}
	});

	// create redeem API response
	$(document).off('createRedeemAPIResponse').on('createRedeemAPIResponse', function (e, data, status) {
		swal('Create Redeem Success', "" ,"success").then(() => {
			location.href='/redeem';
		});
	});

	// edit redeem API response
	$(document).off('editRedeemAPIResponse').on('editRedeemAPIResponse', function (e, data, status) {
		swal('Edit Redeem Success', "" ,"success").then(() => {
			location.href='/redeem';
		});
	});

	// get redemm API response for admin
	$(document).off('getAllRedeemAPIResponse_admin').on('getAllRedeemAPIResponse_admin', function (e, data, status) {
		var redeemList = data.body;

		var count =redeemList.length;
		for(var i =0;i <redeemList.length;i++)
		{
			var redeem = redeemList[i];
			var img = "assets/img/redeem/"+redeem.img_url+".jpg";
			var redeemHTML = `
			<tr >
			<td>`+count+`</td>
			<td><img class='redeemImg' src="`+img+`" /></td>
			<td class='redeemTitleForEdit'>`+redeem.title+`</td>
			<td class='redeemDescriptionForEdit'>`+redeem.description+`</td>
			<td class='redeemPointForEdit'>`+redeem.point+`</td>
			<td>
			<button class='btn btn-default editRedeemBtn'  value='`+redeem.redeemID+`'>Edit </button>
			<button class='btn btn-danger deleteRedeemBtn' value='`+redeem.redeemID+`'>Delete </button>
			<td>
			</tr>

			`;
			count --;
			$('.redeemListSection').prepend(redeemHTML);
		}

	});

	// get product API response
	$(document).off('getAllRedeemAPIResponse').on('getAllRedeemAPIResponse', function (e, data, status) {
		var redeemList = data.body;

		for(var i =0;i <redeemList.length;i++)
		{
			var redeem = redeemList[i];

			var redeemHTML = `
			<div class="redeemCard col-sm-12">
			<div class="redeemImgSection col-sm-12">
			<center>
			<img class='redeemImg' src="assets/img/redeem/`+redeem.img_url+`.jpg" alt="" />
			</center>
			</div>
			<div class="redeemContent col-sm-12">
			<div class='redeemTitle'>`+redeem.title+`</div>
			<div class='redeemDescription'>`+redeem.description+`</div>
			</div>
			<div class="redeemScorePoint col-sm-12">
			<div class='redeemScore'>-- `+redeem.point+`PT  --</div>
			</div>
			<div class="redeemButtonArea col-sm-12" value='`+redeem.redeemID+`'>
			REDEEM
			</div>
			</div>

			`;
			$('.redeemListSection').append(redeemHTML);
		}

	});




	/*=============================================

	User API response section

	==============================================*/


	//Get all user for challenge verify
	$(document).off('editUserPointAPIResponse').on('editUserPointAPIResponse', function (e, data, status,newPoint) {
		Cookies.set('point', newPoint, { expires: 999 });
	});


	//Get all user for challenge verify
	$(document).off('getAllUserAPIResponse_challenge').on('getAllUserAPIResponse_challenge', function (e, data, status) {

		var users= data;
		for(var i = 0; i<users.length;i++)
		{
			if(users[i].profiled==1&& users[i].roleID==1)
			{
				var userHTML = `
				<option value='`+users[i].userID+`'>`+users[i].name+`</option>
				`;
				$('.userListSelect').append(userHTML);
			}
		}

	});

	//reset user goal response
	$(document).off('resetUsersGoalResponse').on('resetUsersGoalResponse', function (e, data, status) {
		swal('Goal updated','','success').then(() => {
			location.reload();

		});
	});

	//Get user goal for profile response
	$(document).off('viewUserGoalResponse_profile').on('viewUserGoalResponse_profile', function (e, data, status) {

		var goal = data.body[0];
		if(goal){
			if(goal.verified==0)
			$('.attributeSection').hide();
			var measurement = 'KG';
			$('.goal').html('I want to '+ goal.goal_condition+ ' ' + goal.goal_value+ ' ' + measurement+' of ' + goal.description);
		}
	});

	//Get user goal for dashbaord response
	$(document).off('viewUserGoalResponse_dashboard').on('viewUserGoalResponse_dashboard', function (e, data, status) {
		var goal = data.body[0];

		//If user goal havent verified yet
		if(goal.verified==0)
		{
			$('.deactivate').fadeTo( "slow" , 1);
			$('.menuBoxArea').css('z-index',101);
			$('.createNewGoalBtn').hide();

		}
		else {

			//Calculate goal percentage
			var goal_condition = goal.goal_condition;
			var goal_value = goal.goal_value;
			var goal_status =goal.status;

			// release firework if acheive goal
			if(goal_status==1){
				$('.firework').css('opacity',1);
				//fitnergistAPI.updateUserGoalStatus(2);

			}
			else {
				$('.firework').hide();

			}

			if(goal_condition =='lose')
			{
				goal_value= -(goal_value);


			}

			var current_goal_value = goal.current_value;
			var goal_progress =current_goal_value/goal_value*100;

			//Update goal progress
			if(goal_progress<=2){
				$('.dot_progress').css('height','2%');
			}
			else
			{
				$('.dot_progress').css('height',goal_progress+'%');
			}


			$('.deactivate').css('z-index',0);
			//if user didnt receive notification yet
			if(goal.notification==0){
				new PNotify({
					title: 'Success!',
					addclass: 'notification',
					text: 'Your goal has been verified.',
					type: 'success'
				});
				fitnergistAPI.updateUserGoalNotification();
			}

			$('.tooltiptext').html(`
				`+goal.goal_condition+` `+ goal.goal_value +` ` + goal.description+`
				<p> `+goal_progress+` %</p>
				`);
			}
		});


		//Get specific user goal response
		$(document).off('getSpecificUserGoalResponse').on('getSpecificUserGoalResponse', function (e, data, status) {

			var user = data.body[0];

			$('.attributeSection').html('');
			//If user is first time user
			if(user.verified==0){
				var measurement = 'KG ';
				var attirbuteHTML =`
				<h2> First time user </h2>
				<p> User goal : `+user.goal_condition+`  `+user.description+` `+user.goal_value+` `+measurement+` </p>
				<br><br>
				<button class='btn btn-success confirmGoalBtn' value='`+user.userID+`'>Confirm </button>
				<button class='btn btn-danger rejectGoalBtn' value='`+user.userID+`'>Reject </button>
				`;


			}
			else
			{
				var attirbuteHTML =`
				<div class="control-group">
				<label class="control-label">Weight</label>
				<div class="controls">
				<input  name="goalValue" type="text" placeholder="" class="form-control weight">
				</div>
				</div>
				<br>
				<div class="control-group">
				<label class="control-label">Height</label>
				<div class="controls">
				<input  name="goalValue" type="text" placeholder="" class="form-control height">
				</div>
				</div>
				<br>
				<div class="control-group">
				<label class="control-label">Water</label>
				<div class="controls">
				<input  name="goalValue" type="text" placeholder="" class="form-control water">
				</div>
				</div>
				<br>
				<div class="control-group">
				<label class="control-label">Visceral</label>
				<div class="controls">
				<input  name="goalValue" type="text" placeholder="" class="form-control visceral">
				</div>
				</div>
				<br>
				<div class="control-group">
				<label class="control-label">Fat</label>
				<div class="controls">
				<input  name="goalValue" type="text" placeholder="" class="form-control fat">
				</div>
				</div>
				<br>
				<div class="control-group">
				<label class="control-label">BMR</label>
				<div class="controls">
				<input  name="goalValue" type="text" placeholder="" class="form-control bmr">
				</div>
				</div>
				<br>
				<div class="control-group">
				<label class="control-label">PR</label>
				<div class="controls">
				<input  name="goalValue" type="text" placeholder="" class="form-control pr">
				</div>
				</div>
				<br><br>
				<button class='btn btn-info updateTrackBtn' value='`+user.userID+`'>Track</button>
				`;
			}
			$('.attributeSection').html(attirbuteHTML);
		});


		//Create user goal
		$(document).off('createUsersGoalResponse').on('createUsersGoalResponse', function (e, data, status) {
			swal('Profile Updated', "" ,"success").then(() => {
				location.reload();
			});
		});

		//Edit  user goal verified response
		$(document).off('editUsersGoalVerifiedResponse').on('editUsersGoalVerifiedResponse', function (e, data, status,userID) {
			$('.attributeSection').html('');
			swal('Tracked', "" ,"success").then(() => {

			});
		});


		$(document).off('getUserProfileAPIResponse').on('getUserProfileAPIResponse', function (e, data, status) {

			var user = data.body[0];
			var name = user.name;
			var email = user.email;
			var contact = user.contact;
			var age = user.age;
			var gender = user.gender;
			var address= user.address;
			var img = user.img_url;

			if(!img)
			img = 'default';

			$('.name').html(name);
			$('.age').html(age);
			$('.email').html(email);
			$('.contact').html(contact);
			$('.address').html(address);
			$('.gender').html(gender);
			$('.profilePictureImg').attr('src',"assets/img/profile/"+img+".jpg");

		});



		$(document).off('getUserSetupProfileAPIResponse').on('getUserProfileAPIResponse', function (e, data, status) {
			var user = data.body[0];
			var name = user.name;
			var email = user.email;
			var contact = user.contact;
			var age = user.age;
			var gender = user.gender;
			var address= user.address;
			var img = user.img_url;

			if(!img)
			img = 'default';

			$('.name').val(name);
			$('.age').val(age);
			$('.email').val(email);
			$('.contact').val(contact);
			$('.address').val(address);
			$('.gender').val(gender);
			$('.gender').change();
			$('#uploadedImage').attr('src',"assets/img/profile/"+img+".jpg");

		});



		$(document).off('createUserAPIResponse').on('createUserAPIResponse', function (e, data, status) {
			swal('Register Success', "" ,"success").then(() => {
				location.reload();
			});
		});


		//Edit user profile  response
		$(document).off('editUserAPIResponse').on('editUserAPIResponse', function (e, data, status) {
			Cookies.set('profiled', 1, { expires: 999 });
		});


		//Login response
		$(document).off('getUserAPIResponse').on('getUserAPIResponse', function (e, data, status) {

			if(data.success==false){
				swal('Wrong username or password', "" ,"error").then(() => {
					$('.loginUsername').val('');
					$('.loginPass').val('');
				});
			}
			else	{
				var user = data.body[0];
				var userID = user.userID;
				var profiled = user.profiled;
				var roleID = user.roleID;
				var username = user.username;
				var userScore = user.point;

				Cookies.set('userID', userID, { expires: 999 });
				Cookies.set('point', userScore, { expires: 999 });
				Cookies.set('username', username, { expires: 999 });
				Cookies.set('profiled', profiled, { expires: 999 });
				Cookies.set('roleID', roleID, { expires: 999 });
				swal('Login success', "" ,"success").then(() => {
					if(profiled == 0 )
					window.location.href='/landing';
					else
					window.location.href='/home';
				});

			}
		});


		/*=============================================

		Achievement API response section

		==============================================*/

		// create achievement API response
		$(document).off('createAchievementAPIResponse').on('createAchievementAPIResponse', function (e, data, status) {
			swal('Create Achievement Success', "" ,"success").then(() => {
				location.href='/achievement';
			});
		});


		// edit achievement API response
		$(document).off('editAchievementAPIResponse').on('editAchievementAPIResponse', function (e, data, status) {
			swal('Edit Achievement Success', "" ,"success").then(() => {
				location.href='/achievement';
			});
		});

		// get current user acheivement
		$(document).off('getUserAchievementAPIResponse').on('getUserAchievementAPIResponse', function (e, data, status) {

			var acheivement= data.body;
			for(var i =0; i < acheivement.length; i++)
			{
				userAchievement.push(acheivement[i].achieveID);
			}
		});


		// get current user acheivement for dashboard notificaiton
		$(document).off('getUserAchievementAPIResponse_dashboard').on('getUserAchievementAPIResponse_dashboard', function (e, data, status) {

			var achievement= data.body;
			for(var i =0; i < achievement.length; i++)
			{
				if(achievement[i].notification ==0 ){

					var userAchievementID = achievement[i].userAchieveID;
					var achievementID =  achievement[i].achieveID;
					$.get(fitnergistAPI.url+'api/achievement/' + achievementID , function(data, status){
						var detail = data.body;

						new PNotify({
							title: 'Achievement achieved!',
							addclass: 'notification',
							text: detail.title +' has been completed with the point of ' + detail.score_point + ' !',
							type: 'success'
						});
						fitnergistAPI.updateAchievementNotificationAPI(userAchievementID);
					});

				}
			}
		});
		// get all achievement API response
		$(document).off('getAllAchievementAPIResponse_admin').on('getAllAchievementAPIResponse_admin', function (e, data, status) {
			var achievementList = data.body;
			var count =achievementList.length;
			for(var i =0;i <achievementList.length;i++)
			{
				var achievement = achievementList[i];
				var img = "assets/img/achievement/"+achievement.img_url+".jpg";
				var achievementHTML = `
				<tr >
				<td>`+count+`</td>
				<td><img class='achievementImg' src="`+img+`" /></td>
				<td class='achievementTitleForEdit'>`+achievement.title+`</td>
				<td class='achievementDescriptionForEdit'>`+achievement.description+`</td>
				<td class='achievementPointForEdit'>`+achievement.score_point+`</td>
				<td>
				<button class='btn btn-default editAchievementBtn'  value='`+achievement.achievementID+`'>Edit </button>
				<button class='btn btn-danger deleteAchievementBtn' value='`+achievement.achievementID+`'>Delete </button>
				<td>
				</tr>

				`;
				count --;
				$('.achievementListSection').prepend(achievementHTML);
			}
		});

		// get all achievement API response
		$(document).off('getAllAchievementAPIResponse').on('getAllAchievementAPIResponse', function (e, data, status) {
			var achievementList = data.body;


			var count =0;
			var achieved_count = 0;
			for(var i =0;i <achievementList.length;i++)
			{
				var achievement = achievementList[i];
				var achievementHTML = `
				<div class=" card [ is-collapsed ] ">
				<div class="card__inner [ js-expander ]">
				<div class='col-sm-12 imgSection'>
				<img class='achievementIconImg' src="assets/img/achievement/`+achievement.img_url+`.jpg" />
				</div>
				<div class='col-sm-12'>
				<span>`+achievement.title+`</span>
				</div>


				</div>
				<div class="card__expander">
				`+achievement.description+`
				<label class='scorePoint'> `+achievement.score_point+`PT</label>
				</div>
				</div>

				`;

				var check = 0;
				//Check if user register the fitcamp
				for(var j =0; j <userAchievement.length;j++)
				{
					if(achievement.achievementID == userAchievement[j]){
						check++;
						break;
					}

				}

				// if user didnt register yet
				if(check == 0){
					$('.achievementListSection').append(achievementHTML);
					count++;
				}
				else{
					$('.achievedAchievementListSection').append(achievementHTML);
					achieved_count++;
				}

			}
			$('.tabNumber').html(count);
			$('.tabNumber_completed').html(achieved_count);


			$(document).ready(function () {
				// dynamic created card function
				var $cell = $('.card');


				//open and close card when clicked on card
				$cell.find('.js-expander').click(function() {

					var $thisCell = $(this).closest('.card');

					if ($thisCell.hasClass('is-collapsed')) {
						$cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
						$thisCell.removeClass('is-collapsed').addClass('is-expanded');

						if ($cell.not($thisCell).hasClass('is-inactive')) {
							//do nothing
						} else {
							$cell.not($thisCell).addClass('is-inactive');
						}

					} else {
						$thisCell.removeClass('is-expanded').addClass('is-collapsed');
						$cell.not($thisCell).removeClass('is-inactive');
					}
				});

				//close card when click on cross
				$cell.find('.js-collapser').click(function() {

					var $thisCell = $(this).closest('.card');

					$thisCell.removeClass('is-expanded').addClass('is-collapsed');
					$cell.not($thisCell).removeClass('is-inactive');

				});

			});
		});




		/*=============================================

		Fitcamp API response section

		==============================================*/





		// get all fitcmap attedane API response for trakcing
		$(document).off('getAllFitcampRegisterAPIResponse_track').on('getAllFitcampRegisterAPIResponse_track', function (e, data, status) {
			var fitcampList = data.body;
			var count =fitcampList.length;
			for(var i =0;i <fitcampList.length;i++)
			{
				var fitcamp = fitcampList[i];
				var userID = fitcamp.userID;
				$.get(fitnergistAPI.url+'api/users/profile/' + userID , function(data, status){
					var user = data.body[0];

					var fitcampHTML = `
					<option value='`+user.userID+`'>`+user.name+`</option>
					`;
					$('.userListSelect').append(fitcampHTML);
				});

			}
			$('.loader').hide();

		});


		// get all fitcmap attedane API response
		$(document).off('getAllFitcampRegisterAPIResponse').on('getAllFitcampRegisterAPIResponse', function (e, data, status) {
			var fitcampList = data.body;
			var count =fitcampList.length;
			$('.attendanceList').empty();
			for(var i =0;i <fitcampList.length;i++)
			{
				var fitcamp = fitcampList[i];
				var userID = fitcamp.userID;
				$.get(fitnergistAPI.url+'api/users/profile/' + userID , function(data, status){
					var user = data.body[0];
					var fitcampHTML = `
					<tr >
					<td>`+count+`</td>
					<td class='username'>`+user.username+`</td>
					<td class='name'>`+user.name+`</td>
					<td class='contact'>`+user.contact+`</td>
					<td>
					<input type='hidden' class='fitcampIDHidden' value='`+fitcamp.fitcampID+`'/>
					`;
					if(fitcamp.attendance == 1){
						fitcampHTML+=`
						<button class='btn btn-default cancelAttendanceBtn'  value='`+user.userID+`'>Cancel </button>
						`;
					}
					else {
						fitcampHTML+=`
						<button class='btn btn-default confirmAttendanceBtn'  value='`+user.userID+`'>Attended </button>
						`;
					}


					fitcampHTML+=`
					<td>
					</tr>

					`;
					count --;
					$('.attendanceList').prepend(fitcampHTML);
				});

			}



		});



		// register fitcmap API response
		$(document).off('createfitcampRegisterAPIResponse').on('createfitcampRegisterAPIResponse', function (e, data, status) {
			swal('Fitcamp registered', "" ,"success").then(() => {
				location.reload();
			});
		});

		// edit fitcmap API response
		$(document).off('editFitcampAPIResponse').on('editFitcampAPIResponse', function (e, data, status) {
			swal('Fitcamp updated', "" ,"success").then(() => {
				location.href='/fitcamp';
			});
		});


		// Get current user reigster fitcamp API repsonse
		$(document).off('getAllUserRegisterAPIResponse').on('getAllUserRegisterAPIResponse', function (e, data, status) {

			var fitcamp= data.body;
			for(var i =0; i < fitcamp.length; i++)
			{
				userRegisterFitcampID.push(fitcamp[i].fitcampID);
			}
		});

		// close fitcmap API response
		$(document).off('closeFitcampAPIResponse').on('closeFitcampAPIResponse', function (e, data, status) {
			var fitcampID = data.body.fitcampID;
			var point = data.body.point;
			swal('Fitcamp Closed', "" ,"success").then(() => {
				$.get(fitnergistAPI.url+'api/fitcamp/register/fitcampID/' + fitcampID, function(data, status){
					var userList = data.body;

					for(var i =0; i <userList.length;i++){
						var userID = userList[i].userID;
						if(userList[i].attendance==1){
							$.get(fitnergistAPI.url+'api/users/profile/' + userID , function(data, status){
								var current_point = data.body[0].point;

								point = current_point+point;
								fitnergistAPI.updateFitcampPointForUserAPI(userID,point);
							});

						}
					}
				});


			});
		});


		// create fitcmap API response
		$(document).off('createFitcampAPIResponse').on('createFitcampAPIResponse', function (e, data, status) {
			swal('Create Fitcamp Success', "" ,"success").then(() => {
				location.href='/fitcamp';
			});
		});


		// get all fitcmap API response for attendance
		$(document).off('getAllFitcampAPIResponse_admin_attendance').on('getAllFitcampAPIResponse_admin_attendance', function (e, data, status) {
			$('#bodyContent').removeClass('fade-out');
			// Turn off loader
			$('.loader').hide();

			var fitcampList = data.body;

			for(var i =0;i <fitcampList.length;i++)
			{
				var fitcamp = fitcampList[i];
				if(fitcamp.closed == 0 )
				{
					var fitcampHTML = `
					<option value='`+fitcamp.fitcampID+`'>`+fitcamp.title+`</option>
					`;
					$('.fitcampListection').append(fitcampHTML);
				}
			}

		});

		// get all fitcmap API response for admin
		$(document).off('getAllFitcampAPIResponse_admin').on('getAllFitcampAPIResponse_admin', function (e, data, status) {
			var fitcampList = data.body;
			var count =fitcampList.length;
			for(var i =0;i <fitcampList.length;i++)
			{
				var fitcamp = fitcampList[i];
				var img = fitcamp.img_url;
				if(img =='default')
				img = "assets/img/fitcamp/"+fitcamp.img_url+".gif";
				else
				img = "assets/img/fitcamp/"+fitcamp.img_url+".jpg";
				var fitcampHTML = `
				<tr >
				<td>`+count+`</td>
				<td><img class='fitcampImg' src="`+img+`" /></td>
				<td class='fitcampTitleForEdit'>`+fitcamp.title+`</td>
				<td class='fitcampDescriptionForEdit'>`+fitcamp.description+`</td>
				<td class='fitcampLocationForEdit'>`+fitcamp.location+`</td>
				<td class='fitcampPriceForEdit'>`+fitcamp.price+`</td>
				<td class='fitcampPointForEdit'>`+fitcamp.point+`</td>
				<td class='fitcampStartDateForEdit'>`+fitcamp.start_date+`</td>
				<td class='fitcampEndDateForEdit'>`+fitcamp.end_date+`</td>
				<td>
				<button class='btn btn-default editFitcampBtn'  value='`+fitcamp.fitcampID+`'>Edit </button>
				<button class='btn btn-danger deleteFitcampBtn' value='`+fitcamp.fitcampID+`'>Delete </button>
				<td>
				</tr>

				`;
				count --;
				$('.fitcampListection').prepend(fitcampHTML);
			}

		});

		// get all fitcmap API response
		$(document).off('getAllFitcampAPIResponse').on('getAllFitcampAPIResponse', function (e, data, status) {
			var fitcampList = data.body;
			var count = 0;
			var count_register=0;
			for(var i =0;i <fitcampList.length;i++)
			{
				var fitcamp = fitcampList[i];
				var check = 0;
				var fitcampHTML='';
				//Check if user register the fitcamp
				for(var j =0; j <userRegisterFitcampID.length;j++)
				{
					if(fitcamp.fitcampID == userRegisterFitcampID[j]){
						check++;
						break;
					}

				}

				// if user didnt register yet
				if(check == 0)
				{
					if(fitcamp.closed ==0 ) // If fitcamp didnt close yet
					{
						if(count%2==0)
						fitcampHTML+='<div class="blog-card">';
						else
						fitcampHTML+='<div class="blog-card alt">';

						fitcampHTML+=`
						<div class="photo photo`+i+`"></div>
						<ul class="details">
						<li class="author">Location :  `+fitcamp.location+`</li>
						<li class="startDate">Start : `+fitcamp.start_date+`</li>
						<li class="endDate">End : `+fitcamp.end_date+`</li>
						<li class="price">Price : RM `+fitcamp.price+`</li>
						</ul>
						<div class="description">
						<h1>`+fitcamp.title+`</h1>
						<h2>`+fitcamp.description+`</h2>
						<p class="summary">`+fitcamp.point+` PT</p>
						<a href="#" class='joinFitcampBtn' value='`+fitcamp.fitcampID+`'>Join now </a>
						</div>
						</div>

						`;
						$('.fitcampListection').prepend(fitcampHTML);
						if(fitcamp.img_url=='default')
						{
							$('.photo'+i).css({
								'background-image' : 'url("assets/img/fitcamp/'+fitcamp.img_url+'.gif")',
								'background-repeat': 'no-repeat',
								'backgroundPosition': 'center',
								'background-size': 'cover'
							});
						}
						else
						{
							$('.photo'+i).css({
								'background-image' : 'url("assets/img/fitcamp/'+fitcamp.img_url+'.jpg")',
								'background-repeat': 'no-repeat',
								'backgroundPosition': 'center',
								'background-size': 'cover'
							});
						}
						count++;
					}
				}

				//If user already register
				else {
					if(count_register%2==0)
					fitcampHTML+='<div class="blog-card">';
					else
					fitcampHTML+='<div class="blog-card alt">';

					fitcampHTML+=`
					<div class="photo photo`+i+`"></div>
					<ul class="details">
					<li class="author">Location :  `+fitcamp.location+`</li>
					<li class="startDate">Start : `+fitcamp.start_date+`</li>
					<li class="endDate">End : `+fitcamp.end_date+`</li>
					<li class="price">Price : RM `+fitcamp.price+`</li>
					</ul>
					<div class="description">
					<h1>`+fitcamp.title+`</h1>
					<h2>`+fitcamp.description+`</h2>
					<p class="summary">`+fitcamp.point+` PT</p>`;

					if(fitcamp.closed ==0 ) // If fitcamp didnt close yet
					{
						fitcampHTML+=`
						<a href="#" class='quitFitcampBtn' value='`+fitcamp.fitcampID+`'>Cancel </a>
						`;
					}
					else {
						fitcampHTML+=`
						<a href="#" disabled>Passed </a>
						`;

					}

					fitcampHTML+=`
					</div>
					</div>

					`;
					$('.registeredFitcampListection').prepend(fitcampHTML);
					if(fitcamp.img_url=='default')
					{
						$('.photo'+i).css({
							'background-image' : 'url("assets/img/fitcamp/'+fitcamp.img_url+'.gif")',
							'background-repeat': 'no-repeat',
							'backgroundPosition': 'center',
							'background-size': 'cover'
						});
					}
					else
					{
						$('.photo'+i).css({
							'background-image' : 'url("assets/img/fitcamp/'+fitcamp.img_url+'.jpg")',
							'background-repeat': 'no-repeat',
							'backgroundPosition': 'center',
							'background-size': 'cover'
						});
					}
					count_register++;

				}

			}
			$('.tabNumber_upcoming').html(count);
			$('.tabNumber_registered').html(count_register);
		});






		/*=============================================

		Challenge API response section

		==============================================*/

		// complete challenge API response
		$(document).off('createUserChallengeAPIResponse').on('createUserChallengeAPIResponse', function (e, data, status) {
			swal('Challenge Updated', "" ,"success").then(() => {

			});
		});

		// create challenge API response
		$(document).off('createChallengeAPIResponse').on('createChallengeAPIResponse', function (e, data, status) {
			swal('Create Challenge Success', "" ,"success").then(() => {
				location.href='/challenge';
			});
		});


		// edit challenge API response
		$(document).off('editChallengeAPIResponse').on('editChallengeAPIResponse', function (e, data, status) {
			swal('Edit Challenge Success', "" ,"success").then(() => {
				location.href='/challenge';
			});
		});

		// Get current user completed challenge API response
		$(document).off('getUserChallengeAPIResponse_dashboard').on('getUserChallengeAPIResponse_dashboard', function (e, data, status) {
			var challenge= data.body;
			for(var i =0; i < challenge.length; i++)
			{
				if(challenge[i].notification ==0 ){
					var userChallengeID = challenge[i].userChallengeID;
					var challengeID =  challenge[i].challengeID;
					$.get(fitnergistAPI.url+'api/challenge/' + challengeID , function(data, status){
						var challengeDetail = data.body;
						new PNotify({
							title: 'Challenge completed!',
							addclass: 'notification',
							text: challengeDetail.title +' has been completed with the point of ' + challengeDetail.score_point + ' !',
							type: 'success'
						});
						fitnergistAPI.updateChallengeNotification(userChallengeID);
					});

				}
			}
		});


		// Get current user completed challenge API response
		$(document).off('getUserChallengeAPIResponse').on('getUserChallengeAPIResponse', function (e, data, status) {
			var challenge= data.body;
			for(var i =0; i < challenge.length; i++)
			{
				userChallenge.push(challenge[i].challengeID);
			}
		});

		// get all challenge API response
		$(document).off('getAllChallengeAPIResponse_admin').on('getAllChallengeAPIResponse_admin', function (e, data, status) {
			var challengeList = data.body;
			var count =challengeList.length;
			for(var i =0;i <challengeList.length;i++)
			{
				var challenge = challengeList[i];
				var img = "assets/img/challenge/"+challenge.img_url+".jpg";
				var challengeHTML = `
				<tr >
				<td>`+count+`</td>
				<td><img class='challengeImg' src="`+img+`" /></td>
				<td class='challengeTitleForEdit'>`+challenge.title+`</td>
				<td class='challengeDescriptionForEdit'>`+challenge.description+`</td>
				<td class='challengePointForEdit'>`+challenge.score_point+`</td>
				<td>
				<button class='btn btn-default editChallengeBtn'  value='`+challenge.challengeID+`'>Edit </button>
				<button class='btn btn-danger deletechallengeBtn' value='`+challenge.challengeID+`'>Delete </button>
				<td>
				</tr>

				`;
				count --;
				$('.challengeListSection').prepend(challengeHTML);
			}

		});


		// get all challenge API response for verify
		$(document).off('getAllChallengeAPIResponse_verify').on('getAllChallengeAPIResponse_verify', function (e, data, status) {
			var challengeList = data.body;

			$('.challengeListSection').html('');
			var count_completed=0;
			var count =1;
			for(var i =0;i <challengeList.length;i++)
			{
				var challenge = challengeList[i];


				var check = 0;
				var fitcampHTML='';
				//Check if user register the fitcamp
				for(var j =0; j <userChallenge.length;j++)
				{
					if(challenge.challengeID == userChallenge[j]){
						check++;
						break;
					}

				}

				var img = "assets/img/challenge/"+challenge.img_url+".jpg";
				var challengeHTML = `
				<tr >
				<td>`+count+`</td>
				<td><img class='challengeImg' src="`+img+`" /></td>
				<td class='challengeTitleForEdit'>`+challenge.title+`</td>
				<td class='challengeDescriptionForEdit'>`+challenge.description+`</td>
				<td class='challengePointForEdit'>`+challenge.score_point+`</td>
				<td>
				<button class='btn btn-success completeChallengeBtn' value='`+challenge.challengeID+`'>Complete </button>
				<td>
				</tr>`;


				// if user didnt complete challenge yet
				if(check == 0)
				{

					$('.challengeListSection').append(challengeHTML);
					count++;
				}

			}

		});



		// get all challenge API response
		$(document).off('getAllChallengeAPIResponse').on('getAllChallengeAPIResponse', function (e, data, status) {
			var challengeList = data.body;

			var count_completed=0;
			var count =0;
			for(var i =0;i <challengeList.length;i++)
			{
				var challenge = challengeList[i];


				var check = 0;
				var fitcampHTML='';
				//Check if user register the fitcamp
				for(var j =0; j <userChallenge.length;j++)
				{
					if(challenge.challengeID == userChallenge[j]){
						check++;
						break;
					}

				}

				var challengeHTML = `
				<div class=" card [ is-collapsed ] ">
				<div class="card__inner [ js-expander ]">
				<img class='challengeIconImg' src="assets/img/challenge/`+challenge.img_url+`.jpg" />
				<span>`+challenge.title+`</span>
				<label class='scorePoint'> `+challenge.score_point+`PT</label>
				</div>
				<div class="card__expander">
				`+challenge.description+`
				</div>
				</div>

				`;

				// if user didnt complete challenge yet
				if(check == 0)
				{

					$('.challengeListSection').append(challengeHTML);
					count++;
				}
				else {
					$('.achievedChallengeListSection').append(challengeHTML);
					count_completed++;
				}
			}
			$('.tabNumber_challenge').html(count);
			$('.tabNumber_completed').html(count_completed);

			$(document).ready(function () {
				// dynamic created card function
				var $cell = $('.card');


				//open and close card when clicked on card
				$cell.find('.js-expander').click(function() {

					var $thisCell = $(this).closest('.card');

					if ($thisCell.hasClass('is-collapsed')) {
						$cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
						$thisCell.removeClass('is-collapsed').addClass('is-expanded');

						if ($cell.not($thisCell).hasClass('is-inactive')) {
							//do nothing
						} else {
							$cell.not($thisCell).addClass('is-inactive');
						}

					} else {
						$thisCell.removeClass('is-expanded').addClass('is-collapsed');
						$cell.not($thisCell).removeClass('is-inactive');
					}
				});

				//close card when click on cross
				$cell.find('.js-collapser').click(function() {

					var $thisCell = $(this).closest('.card');

					$thisCell.removeClass('is-expanded').addClass('is-collapsed');
					$cell.not($thisCell).removeClass('is-inactive');

				});

			});
		});




		/*=============================================

		Forum API response section

		==============================================*/

		// create forum API response
		$(document).off('createCommentAPIResponse').on('createCommentAPIResponse', function (e, data, status) {
			swal('Commented', "" ,"success").then(() => {
				var forumID = $('.forumID').attr('value');
				fitnergistAPI.getCommentAPI(forumID);
			});
		});

		// create forum API response
		$(document).off('createForumAPIResponse').on('createForumAPIResponse', function (e, data, status) {
			swal('Create Forum Success', "" ,"success").then(() => {
				location.href='/forum';
			});
		});

		// get forum comment API response
		$(document).off('getCommentAPIResponse').on('getCommentAPIResponse', function (e, data, status) {
			var commentList = data.body;

			$('.commentSection').empty();
			for(var i =0;i <commentList.length;i++)
			{
				var comment = commentList[i];
				if(comment.userID == fitnergistAPI.userID || $.cookie.get("roleID")==2){
					var commentHTML = `
					<div class='col-sm-12 comment'>
					<input type='hidden' class='commentID'/>
					<div class='col-sm-1 userPicture'>
					<img class='commentImg_`+comment.userID+`' src=''/>
					</div>
					<div class='col-sm-11 userComment'>
					<label class='userName'>`+comment.userID+`  </label>
					<p class='commentContent'> `+comment.content+`</p>
					<button class='btn btn-danger deleteCommentBtn' value='`+comment.commentID+`'> x </button>
					</div>
					<label class='commentDate'> `+comment.updated_at+` </label>
					</div>
					`;
				}
				else
				{
					var commentHTML = `
					<div class='col-sm-12 comment'>
					<input type='hidden' class='commentID'/>
					<div class='col-sm-1 userPicture'>
					<img class='commentImg_`+comment.userID+`' src=''/>
					</div>
					<div class='col-sm-11 userComment'>
					<label class='userName comment_`+comment.userID+`'>`+comment.userID+`  </label>
					<p class='commentContent'> `+comment.content+`</p>
					</div>
					<label class='commentDate'> `+comment.updated_at+` </label>
					</div>
					`;
				}
				changeCommentImg(comment.userID);
				changeCommentUsername(comment.userID);
				$('.commentSection').append(commentHTML);
			}

		});

		// Delete forum API response
		$(document).off('editForumAPIResponse').on('editForumAPIResponse', function (e, data, status) {
			swal('Forum edited', "" ,"success").then(() => {
				location.reload();
			});
		});


		// get specific forum API response
		$(document).off('getForumAPIResponse').on('getForumAPIResponse', function (e, data, status) {
			var forum = data.body;
			//Check if forum is user created

			if(forum.userID == fitnergistAPI.userID)
			{

				$('.backBtnArea').append(`
					<button class='btn btn-default editForumBtn'  value='`+forum.forumID+`'>Edit </button>
					<button class='btn btn-danger deleteForumBtn' value='`+forum.forumID+`'>Delete </button>
					`);

				}

				//Put data into forum content section
				$('.imgArea').html("<img class='forumImage' src='assets/img/forum/"+forum.img_url+".jpg' />");
				$('.titleArea').html("<h2 class='forumTitleForEdit'>"+forum.title+"</h2>");
				$('.author').html("username");
				$('.author').addClass('user_'+forum.userID);
				changeForumUsername(forum.userID);
				$('.date').html(forum.created_at);
				$('.contentArea').html("<p class='forumContentForEdit'>"+forum.content+"</p>");
				$('.forumID').attr('value',forum.forumID);
			});


			// get all forum for admin response
			$(document).off('getAllForumAPIResponse_admin').on('getAllForumAPIResponse_admin', function (e, data, status) {
				var forumList = data.body;
				var count =forumList.length;
				for(var i =0;i <forumList.length;i++)
				{

					var forum = forumList[i];
					var forumHTML = `
					<tr >
					<td>`+count+`</td>
					<td><img class='forumImg' src="assets/img/forum/`+forum.img_url+`.jpg" /></td>
					<td class='forumTitleForEdit'>`+forum.title+`</td>
					<td class='forumContentForEdit'>`+forum.content+`</td>
					<td>`+forum.created_at+`</td>
					<td>
					<a href='?forumID=`+forum.forumID+`'>
					<button class='btn btn-default'  value='`+forum.forumID+`'>View </button>
					</a>
					<button class='btn btn-default editForumBtn'  value='`+forum.forumID+`'>Edit </button>
					<button class='btn btn-danger deleteForumBtn' value='`+forum.forumID+`'>Delete </button>
					<td>
					</tr>

					`;
					count --;
					$('.forumListSection').prepend(forumHTML);
				}
			});
			// get all forum API response
			$(document).off('getAllForumAPIResponse').on('getAllForumAPIResponse', function (e, data, status) {
				var forumList = data.body;
				for(var i =0;i <forumList.length;i++)
				{
					if(i%2!=0){
						var forum = forumList[i];
						var forumHTML = `
						<a href='?forumID=`+forum.forumID+`'>
						<li>
						<div class='forumListContent'>
						<img class='forumImg_even' src="assets/img/forum/`+forum.img_url+`.jpg" />
						<div class='rightSection_even'>
						<div class='listBorder_even'></div>
						<div class='forumBody_even'>
						<p class='forumTitleLabel'>`+forum.title+`</p>
						<p class='forumAuthor user_`+forum.userID+`'>username</p>
						</div>
						<div class='forumFooter_even'>
						`+forum.created_at+`
						</div>
						</div>
						</div>


						<!-- Previous forum list design

						<img src="assets/img/forum/`+forum.img_url+`.jpg" />
						<h3>`+forum.title+`</h3>
						<label class='author'>`+forum.userID+`</label>
						<p>`+forum.content+`</p>
						<label class='creationDate'>`+forum.created_at+` </label>

						-->


						</li>
						</a>
						`;
					}
					else {
						var forum = forumList[i];
						var forumHTML = `
						<a href='?forumID=`+forum.forumID+`'>
						<li>
						<div class='forumListContent'>
						<img class='forumImg' src="assets/img/forum/`+forum.img_url+`.jpg" />
						<div class='rightSection'>
						<div class='listBorder'></div>
						<div class='forumBody'>
						<p class='forumTitleLabel'>`+forum.title+`</p>
						<p class='forumAuthor user_`+forum.userID+`'>username</p>
						</div>
						<div class='forumFooter'>
						`+forum.created_at+`
						</div>
						</div>
						</div>


						<!-- Previous forum list design

						<img src="assets/img/forum/`+forum.img_url+`.jpg" />
						<h3>`+forum.title+`</h3>
						<label class='author'>`+forum.userID+`</label>
						<p>`+forum.content+`</p>
						<label class='creationDate'>`+forum.created_at+` </label>

						-->


						</li>
						</a>
						`;
					}
					changeForumUsername(forum.userID);
					$('.forumListSection').prepend(forumHTML);
				}


			});


			/*=============================================

			Product API response section

			==============================================*/

			// create product API response
			$(document).off('createProductAPIResponse').on('createProductAPIResponse', function (e, data, status) {
				swal('Create Blog Success', "" ,"success").then(() => {
					location.reload();
				});
			});

			// get product API response
			$(document).off('getProductAPIResponse').on('getProductAPIResponse', function (e, data, status) {
				var productList = data.body;

				for(var i =0;i <productList.length;i++)
				{
					var product = productList[i];
					var productHTML = `
					<div class="make-3D-space">
					<div class="product-card">
					<div class="product-front">
					<div class="shadow"></div>
					<img src="assets/img/product/`+product.img_url+`.jpg" alt="" />
					<div class="image_overlay"></div>
					<div class="view_details">View details</div>
					<div class="stats">
					<div class="stats-container">
					<span class="product_price">`+product.price+`</span>
					<span class="product_name">`+product.name+`</span>
					<p>`+product.description+`</p>
					<div class="product-options">
					<strong>Stock left</strong>
					<span>`+product.quantity+`</span>
					</div>
					</div>
					</div>
					</div>

					</div>
					</div>
					`;
					$('.productListection').append(productHTML);
				}

			});


		});


		/*=============================================

		Main function to support repsonse

		==============================================*/
		function changeCommentImg (userID){

			$.get(fitnergistAPI.url+'api/users/profile/' + userID , function(data, status){

				var img = data.body[0].img_url;
				if(img==null)
					img ='default';
				$('.commentImg_'+userID).attr('src','/assets/img/profile/'+img+'.jpg'	);
			});


		}
			function changeCommentUsername (userID){

				$.get(fitnergistAPI.url+'api/users/profile/' + userID , function(data, status){
						$('.comment_'+userID).html(data.body[0].username);
				});


			}

		function changeForumUsername (userID){

			$.get(fitnergistAPI.url+'api/users/profile/' + userID , function(data, status){

					$('.user_'+userID).html(data.body[0].username);
			});


		}

		function getUserByID (userID){

			$.get(fitnergistAPI.url+'api/users/profile/' + userID , function(data, status){
				return data;
			});


		}
