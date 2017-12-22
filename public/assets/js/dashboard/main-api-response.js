$(document).ready(function () {




		/*=============================================

				Redeem API response section

		==============================================*/

		// create redeem API response
	    $(document).off('createRedeemAPIResponse').on('createRedeemAPIResponse', function (e, data, status) {
				swal('Create Redeem Success', "" ,"success").then(() => {
					location.reload();
				});
	    });


		// get product API response
		$(document).off('getAllRedeemAPIResponse').on('getAllRedeemAPIResponse', function (e, data, status) {
			var productList = data.body;
			console.log(data);
			for(var i =0;i <productList.length;i++)
			{
				console.log(productList[i]);
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
				$('.redeemListSection').append(productHTML);
			}

		});




		/*=============================================

				User  API response section

		==============================================*/

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
				swal('Edit Success', "" ,"success").then(() => {
					Cookies.set('profiled', 1, { expires: 999 });
					location.reload();
				});
	    });


		//Login response
			$(document).off('getUserAPIResponse').on('getUserAPIResponse', function (e, data, status) {
					console.log(data.body);
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
										window.location.href='/dashboard';
							});

					}
	    });


	/*=============================================

			Achievement API response section

	==============================================*/

	// create achievement API response
    $(document).off('createAchievementAPIResponse').on('createAchievementAPIResponse', function (e, data, status) {
		swal('Create Achievement Success', "" ,"success").then(() => {
			location.reload();
		});
    });



	// get all achievement API response
    $(document).off('getAllAchievementAPIResponse').on('getAllAchievementAPIResponse', function (e, data, status) {
		var achievementList = data.body;
		console.log(data);
		for(var i =0;i <achievementList.length;i++)
		{
			var achievement = achievementList[i];
			var achievementHTML = `
				<div class=" card [ is-collapsed ] ">
				  <div class="card__inner [ js-expander ]">
					<img class='challengeIcon' src="assets/img/challenge/`+achievement.img_url+`.jpg" />
					<span>`+achievement.title+`</span>
					<label class='scorePoint'> `+achievement.score_point+`PT</label>
				  </div>
				  <div class="card__expander">
					`+achievement.description+`
				  </div>
				</div>

			`;
			$('.achievementListSection').append(achievementHTML);
		}

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

	// create fitcmap API response
    $(document).off('createFitcampAPIResponse').on('createFitcampAPIResponse', function (e, data, status) {
		swal('Create Fitcamp Success', "" ,"success").then(() => {
			location.reload();
		});
    });



	// get all fitcmap API response
    $(document).off('getAllFitcampAPIResponse').on('getAllFitcampAPIResponse', function (e, data, status) {
		var fitcampList = data.body;
		console.log(fitcampList);
		for(var i =0;i <fitcampList.length;i++)
		{
			var fitcamp = fitcampList[i];
			var fitcampHTML='';
			if(i%2==0)
				fitcampHTML+='<div class="blog-card">';
			else
				fitcampHTML+='<div class="blog-card alt">';

			fitcampHTML+=`
			<div class="photo photo`+i+`"></div>
				<ul class="details">
					<li class="author"><a href="#">Coach : John</a></li>
					<li class="startDate">Start : `+fitcamp.start_date+`</li>
					<li class="endDate">End : `+fitcamp.end_date+`</li>
					<li class="price">Price : RM `+fitcamp.price+`</li>
				</ul>
				<div class="description">
					<h1>`+fitcamp.title+`</h1>
					<h2>`+fitcamp.location+`</h2>
					<p class="summary">`+fitcamp.description+`</p>
					<a href="#">Join now </a>
				</div>
			</div>

			`;
			$('.fitcampListection').prepend(fitcampHTML);
			$('.photo'+i).css({
				'background-image' : 'url("assets/img/fitcamp/'+fitcamp.img_url+'.jpg")',
				'background-repeat': 'no-repeat',
				'backgroundPosition': 'center',
				'background-size': 'cover'
			});




		}
    });






	/*=============================================

				Challenge API response section

	==============================================*/

	// create challenge API response
    $(document).off('createChallengeAPIResponse').on('createChallengeAPIResponse', function (e, data, status) {
		swal('Create Challenge Success', "" ,"success").then(() => {
			location.reload();
		});
    });



	// get all challenge API response
    $(document).off('getAllChallengeAPIResponse').on('getAllChallengeAPIResponse', function (e, data, status) {
		var challengeList = data.body;
		console.log(data);
		for(var i =0;i <challengeList.length;i++)
		{
			var challenge = challengeList[i];
			var challengeHTML = `
				<div class=" card [ is-collapsed ] ">
				  <div class="card__inner [ js-expander ]">
					<img class='challengeIcon' src="assets/img/challenge/`+challenge.img_url+`.jpg" />
					<span>`+challenge.title+`</span>
					<label class='scorePoint'> `+challenge.score_point+`PT</label>
				  </div>
				  <div class="card__expander">
					`+challenge.description+`
				  </div>
				</div>

			`;
			$('.challengeListSection').append(challengeHTML);
		}

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
			location.reload();
		});
    });

	// get forum comment API response
    $(document).off('getCommentAPIResponse').on('getCommentAPIResponse', function (e, data, status) {
		var commentList = data.body;
		console.log(comment);
		$('.commentSection').empty();
		for(var i =0;i <commentList.length;i++)
		{
			var comment = commentList[i];
			var commentHTML = `
				<div class='col-sm-12 comment'>
					<input type='hidden' class='commentID'/>
					<div class='col-sm-1 userPicture'>
						<img src='assets/img/icon.png'/>
					</div>
					<div class='col-sm-11'>
						<label class='userName'>`+comment.userID+`  </label>
						<p class='commentContent'> `+comment.content+`</p>
					</div>
					<label class='commentDate'> `+comment.updated_at+` </label>
				</div>
			`;
			$('.commentSection').append(commentHTML);
		}

    });


	// get specific forum API response
    $(document).off('getForumAPIResponse').on('getForumAPIResponse', function (e, data, status) {
		var forum = data.body;
		console.log(data);
		//Put data into forum content section
		$('.imgArea').html("<img src='assets/img/forum/"+forum.img_url+".jpg' />");
		$('.titleArea').html("<h2>"+forum.title+"</h2>");
		$('.author').html(forum.userID);
		$('.date').html(forum.created_at);
		$('.contentArea').html("<p>"+forum.content+"</p>");
		$('.forumID').attr('value',forum.forumID);
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
										<p class='forumAuthor'>`+forum.userID+`</p>
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
										<p class='forumTitle'>`+forum.title+`</p>
										<p class='forumAuthor'>`+forum.userID+`</p>
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

			$('.forumListSection').append(forumHTML);
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
			console.log(productList[i]);
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


//Get exact date by given datetime format
function getDateByTime(dateTime){


}

//Get username by given user id
function getUserNameByID(userID){

}
