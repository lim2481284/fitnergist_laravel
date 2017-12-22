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



$(document).ready(function(){

	// Lift card and show stats on Mouseover
	$(document).on('mouseover','.product-card',function(){
			$(this).addClass('animate');
			$('div.carouselNext, div.carouselPrev').addClass('visible');
	 });
	 $(document).on('mouseout','.product-card',function(){
			$(this).removeClass('animate');
			$('div.carouselNext, div.carouselPrev').removeClass('visible');
	});

	// View detail button
	$('.view_details').click(function(){

	});

});

$('.productMenu').attr('class','userMenu active');
fitnergistAPI.getProductAPI();
