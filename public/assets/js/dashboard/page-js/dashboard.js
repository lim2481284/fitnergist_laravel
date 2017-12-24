$(document).ready(function(){

	// TImeline

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


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
		location.href='/home';
	});
	$('.forumIcon').click(function(){
		location.href='/forum';
	});



});
