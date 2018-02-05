// on change select fitcamp input

$('.fitcampListection').change(function(){
    var fitcampID = $(this).val();
    fitnergistAPI.getAllFitcampRegisterAPI(fitcampID,'track')
    $('.userListSection').show();
    $('.loader').show();

});

// on change select user input
$('.userListSelect').change(function(){
    var userID = $(this).val();
    fitnergistAPI.getSpecificUserGoal(userID);
});




fitnergistAPI.getAllFitcampAPI_admin_attendance();
