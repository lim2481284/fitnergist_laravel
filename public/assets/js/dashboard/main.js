
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
});
