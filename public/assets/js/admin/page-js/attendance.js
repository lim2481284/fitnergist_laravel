// on change select input

$('.fitcampListection').change(function(){
    var fitcampID = $(this).val();
    fitnergistAPI.getAllFitcampRegisterAPI(fitcampID)
    $('.closeBtnSection').show();
    $('.tableSection').show();
});





fitnergistAPI.getAllFitcampAPI_admin_attendance();
