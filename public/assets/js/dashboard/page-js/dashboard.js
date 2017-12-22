$(document).ready(function(){

	//Change score
	$('.bannerScore').html($.cookie.get("point"));


	//Menu icon function
	if ( $(window).width() > 739) {
		$('.menuIcon').click(function(){
			$('.subMenuBox').toggle();
			$(this).toggleClass('open');
		});
		$('.icon').mouseover(function(){
			$(this).parent().parent().find('.menuLabel').show();
		});
		$('.icon').mouseout(function(){
			$(this).parent().parent().find('.menuLabel').hide();
		});

		$('.menuIcon').mouseout(function(){
			$('.menuLabel').hide();
		});

	}
	else
	{
		$('.menuIcon').click(function(){
			$('.subMenuBox').toggle();
			$(this).toggleClass('open');
		});
	}


	//Navigation
	$('.logoutIcon').click(function(){
		location.href='/';
	});
	$('.forumIcon').click(function(){
		location.href='/forum';
	});
	$('.fitcampIcon').click(function(){
		location.href='/fitcamp';
	});
	$('.redeemIcon').click(function(){
		location.href='/redeem';
	});
	$('.achievementIcon').click(function(){
		location.href='/achievement';
	});
	$('.challengeIcon').click(function(){
		location.href='/challenge';
	});
	$('.profileIcon').click(function(){
		location.href='/profile';
	});
	$('.homeIcon').click(function(){
		location.href='/dashboard';
	});
	$('.forumIcon').click(function(){
		location.href='/forum';
	});



});
