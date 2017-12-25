

//Onclick edit achievement button
$(document).on('click','.editAchievementBtn',function(){
	location.href='#editAchievement';
	var achievementID = $(this).val();
	var img_src = $(this).parent().parent().find('.achievementImg').attr('src');
	var achievementTitle = $(this).parent().parent().find('.achievementTitleForEdit').html();
	var achievementDescription=$(this).parent().parent().find('.achievementDescriptionForEdit').html();
	var achievementPoint=$(this).parent().parent().find('.achievementPointForEdit').html();

	$('.achievementID').val(achievementID);
	$('.editAchievementImg').attr('src',img_src);
	$('.editAchievementName').val(achievementTitle);
	$('.editAchievementDescription').val(achievementDescription);
	$('.editAchievementPoint').val(achievementPoint);

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


fitnergistAPI.getAllAchievementAPI_admin();
