
$(document).ready(function() {

	// To get url last segment
	// Then change menu active based on url segment
	var url_segment = location.href.substr(location.href.lastIndexOf('/') + 1)
	var currentClass = $('.'+url_segment+'Menu').attr('class');
	$('.'+url_segment+'Menu').attr('class','active '+ currentClass);

	if($.cookie.get("profiled")==0){
			if(window.location.pathname!='/profile'){
				swal('Please setup your profile first','','info').then(() => {
						location.href='/profile';
				});
			}
	}




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
