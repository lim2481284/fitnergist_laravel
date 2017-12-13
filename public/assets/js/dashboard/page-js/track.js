$(document).ready(function(){
	
	
	$('.userList').on('change', function() {
		var id = $(this).find(":selected").attr('weight');
		$('.weight').val(id);
		
	})
	
});