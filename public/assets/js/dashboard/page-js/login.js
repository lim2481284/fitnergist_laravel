
	//Start button animation
	$(".startBtn").click(function() {
		$(".dot").animate({height: "79vh"},1000);
		$('html,body').animate({
			scrollTop: $(".navigate").offset().top},
		1000);
	});


	//Toggle animation
	$('.formToggleBtn').click(function() {
	  $('.formToggle').animate({
		height: "toggle",
		opacity: "toggle"
	  }, "slow");
	});


	//Background cover animation
	/*
	$('.cover').mousemove(function(e){
		var amountMovedX = (e.pageX * -1 / 6);
		var amountMovedY = (e.pageY * -1 / 6);
		$(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
	});
	*/
