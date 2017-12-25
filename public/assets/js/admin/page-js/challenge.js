
//Onclick edit challenge button
$(document).on('click','.editChallengeBtn',function(){
	location.href='#editChallenge';
	var challengeID = $(this).val();
	var img_src = $(this).parent().parent().find('.challengeImg').attr('src');
	var challengeTitle = $(this).parent().parent().find('.challengeTitleForEdit').html();
	var challengeDescription=$(this).parent().parent().find('.challengeDescriptionForEdit').html();
	var challengePoint=$(this).parent().parent().find('.challengePointForEdit').html();

	$('.challengeID').val(challengeID);
	$('.editChallengeImg').attr('src',img_src);
	$('.editChallengeName').val(challengeTitle);
	$('.editChallengeDescription').val(challengeDescription);
	$('.editChallengePoint').val(challengePoint);

});

function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#uploadedImage')
				.attr('src', e.target.result)
				.width(200)
				.height(200);
		};

		reader.readAsDataURL(input.files[0]);
	}
}



//Tab funciton
$(document).ready(function() {

	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

		$('.tab ul.tabs li a').click(function (g) {
			var tab = $(this).closest('.tab'),
				index = $(this).closest('li').index();

			$('.tabArrow').toggle();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		} );
	})(jQuery);

});


$('.userMenu').attr('class','userMenu active');


fitnergistAPI.getAllChallengeAPI_admin();
