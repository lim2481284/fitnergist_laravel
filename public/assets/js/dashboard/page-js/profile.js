$('.userMenu').attr('class','userMenu active');

// script for tab steps
    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

        var href = $(e.target).attr('href');
        var $curr = $(".process-model  a[href='" + href + "']").parent();

        $('.process-model li').removeClass();

        $curr.addClass("active");
        $curr.prevAll().addClass("visited");
    });
// end  script for tab steps


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
			$('.tabArrow').hide();
			$(this).parent().find('.tabArrow').show();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');

			tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
			tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

			g.preventDefault();
		} );
	})(jQuery);

	//ranking function
	$('.rankingTab').click(function(){
				$("html, body").animate({
					 scrollTop: $('.scroll').offset().top
				}, 2000);
				document.getElementById('targetFrame').contentWindow.myLoop();
	});

});


fitnergistAPI.getUserProfileAPI('profile');
