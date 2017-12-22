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
$('.closeBtn').click(function(){
	location.href='#';

})

var getUrlParameter = function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};
var forumID = getUrlParameter('forumID');
if(forumID)
{
	$('.createForum').hide();
	$('.forumListSection').hide();
	$('.forumContentSection').show();
	$('.backBtn').show();
	fitnergistAPI.getForumAPI(forumID);
	fitnergistAPI.getCommentAPI(forumID);
}
else
{
	$('.createForum').show();
	$('.forumListSection').show();
	fitnergistAPI.getAllForumAPI();
}
