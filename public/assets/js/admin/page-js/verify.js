var userChallenge = [];
// on change select user input
$('.userListSelect').change(function(){
    var userID = $(this).val();
    userChallenge = [];
    fitnergistAPI.getSpecificUserChallengeAPI(userID);
    fitnergistAPI.getAllChallengeAPI_verify();
});


fitnergistAPI.getAllUserAPI('challenge');
