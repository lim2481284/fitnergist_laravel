
//Onclick edit redeem button
$(document).on('click','.editRedeemBtn',function(){
	location.href='#editRedeem';
	var redeemID = $(this).val();
	var img_src = $(this).parent().parent().find('.redeemImg').attr('src');
	var redeemTitle = $(this).parent().parent().find('.redeemTitleForEdit').html();
	var redeemDescription=$(this).parent().parent().find('.redeemDescriptionForEdit').html();
	var redeemPoint=$(this).parent().parent().find('.redeemPointForEdit').html();

	$('.redeemID').val(redeemID);
	$('.editRedeemImg').attr('src',img_src);
	$('.editRedeemName').val(redeemTitle);
	$('.editRedeemDescription').val(redeemDescription);
	$('.editRedeemPoint').val(redeemPoint);
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


//redeem item click function
$(document).ready(function() {
	$(document).on('click','.forumListContent',function(){
		$(this).parent().attr('class','col-sm-12');
	});

});



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
fitnergistAPI.getAllRedeemAPI_admin();
