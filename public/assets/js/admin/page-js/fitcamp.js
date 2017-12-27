$(function () {
  $('#datetimepicker1').datetimepicker({
		format : 'DD/MM/YYYY HH:mm'
	});
	$('#datetimepicker2').datetimepicker({
		format : 'DD/MM/YYYY HH:mm'
	});
	$('#datetimepicker3').datetimepicker({
		format : 'DD/MM/YYYY HH:mm'
	});
	$('#datetimepicker4').datetimepicker({
		format : 'DD/MM/YYYY HH:mm'
	});
});

//Onclick edit fitcamp button
$(document).on('click','.editFitcampBtn',function(){
	location.href='#editFitcamp';
	var fitcampID = $(this).val();
	var img_src = $(this).parent().parent().find('.fitcampImg').attr('src');
	var fitcampTitle = $(this).parent().parent().find('.fitcampTitleForEdit').html();
	var fitcampDescription=$(this).parent().parent().find('.fitcampDescriptionForEdit').html();
	var fitcampLocation=$(this).parent().parent().find('.fitcampLocationForEdit').html();
	var fitcampPrice=$(this).parent().parent().find('.fitcampPriceForEdit').html();
	var fitcampStart=$(this).parent().parent().find('.fitcampStartDateForEdit').html();
	var fitcampEnd=$(this).parent().parent().find('.fitcampEndDateForEdit').html();
  var fitcampPoint=$(this).parent().parent().find('.fitcampPointForEdit').html();
	$('.fitcampID').val(fitcampID);
	$('.editFitcampImg').attr('src',img_src);
	$('.editFitcampName').val(fitcampTitle);
	$('.editFitcampDescription').val(fitcampDescription);
	$('.editFitcampLocation').val(fitcampLocation);
	$('.editFitcampPrice').val(fitcampPrice);
	$('.editFitcampStartDate').val(fitcampStart);
	$('.editFitcampEndDate').val(fitcampEnd);
  $('.editFitcampPoint').val(fitcampPoint);
});

//Datepicker
$(function () {
		 $('#datetimepicker2').datetimepicker({
				 locale: 'ru'
		 });
});

//File input -- edit
function readURL_edit(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();
		reader.onload = function (e) {
			$('#uploadedImage_edit')
				.attr('src', e.target.result)
				.width(200)
				.height(200);
		};
		reader.readAsDataURL(input.files[0]);
	}
}

//Close button function
$('.closeBtn').click(function(){
	location.href='#';
})

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


fitnergistAPI.getAllFitcampAPI_admin();
