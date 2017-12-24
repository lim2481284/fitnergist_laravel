
//Onclick edit forum button
$(document).on('click','.editForumBtn',function(){
	location.href='#editForum';
	var forumID = $(this).val();
	var img_src = $('.forumImage').attr('src');
	var forumTitle = $('.forumTitleForEdit').html();
	var forumContent=$('.forumContentForEdit').html();
	$('.editForum').val(forumID);
	$('.editForumImg').attr('src',img_src);
	$('.editForumTitleInput').val(forumTitle);
	$('.editForumContent').val(forumContent);
});

//File input
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


//Check URL parameter
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

	$('.createForumArea').hide();
	$('.createForum').hide();
	$('.forumListSection').hide();
	$('.forumContentSection').show();
	$('.backBtn').show();
	fitnergistAPI.getForumAPI(forumID);
	fitnergistAPI.getCommentAPI(forumID);
	$(function() {
		$('#bodyContent').removeClass('fade-out');

		// Turn off loader
		$('.loader').hide();
	});
}
else
{
	$('.createForum').show();
	$('.forumListSection').show();
	fitnergistAPI.getAllForumAPI();
}
