
function Api() {
	
		
	/*=============================================		
	
			Global Declaration section 			
		
	==============================================*/		
	
	//Declaration 
    this.url = "http://localhost:8000/";
    //this.token = $.cookie.get("token");
	//this.userId = $.cookie.get("tf_id");	
	
	
	/*=============================================		
	
				Error handling section 			
		
	==============================================*/		
	
	//Handle response error for common error 
    this.error = (xhr, status, err) =>{
		console.log(xhr.responseText);			
		console.log(err);
	}


	/*=============================================		
	
				MAIN API request section 			
		
	==============================================*/

	
	
	
	/* 				User API section 			*/	

	
	// Create fitcamp 
    this.createFitcampAPI = (img_url,description,title,fitcampLocation,expired_date,start_date,end_date) => {
		
		var data = {
			"img_url":img_url,
			"description":description,
			"title":title,
			"location":fitcampLocation,
			"expired_date":expired_date,
			"start_date":start_date,
			"end_date":end_date
		};
		
        $.postAjax(this.url + "api/fitcamp/", data, (data, status, xhr) => {			
            $(document).trigger("createFitcampAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete fitcamp 
	this.deleteFitcampAPI = (fitcampID) => {						
        $.deleteAjax(this.url+'api/fitcamp/' + fitcampID,(data, status, xhr) => {			
            $(document).trigger("deleteFitcampAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit fitcamp  
    this.editFitcampAPI = (img_url,description,title,fitcampLocation,expired_date,start_date,end_date,fitcampID) => {		
        var data = {
			"img_url":img_url,
			"description":description,
			"title":title,
			"location":fitcampLocation,
			"expired_date":expired_date,
			"start_date":start_date,
			"end_date":end_date
		};		
        $.putAjax(this.url+'api/fitcamp/' + fitcampID, data,(data, status, xhr) => {			
            $(document).trigger("editFitcampAPIResponse", [data, status]);
        }, this.error);
    }


	// Get fitcamp 
    this.getFitcampAPI = (fitcampID) => {			
		$.getAjax(this.url+'api/fitcamp/' + fitcampID, (data, status, xhr) => {					
           $(document).trigger("getFitcampAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all fitcamp 
    this.getAllFitcampAPI = () => {			
		$.getAjax(this.url+'api/fitcamp/' , (data, status, xhr) => {					
           $(document).trigger("getAllFitcampAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
	

	
	
	
	
	/* 				User goal API section 			*/	

	
	// Create fitcamp 
    this.createFitcampAPI = (img_url,description,title,fitcampLocation,expired_date,start_date,end_date) => {
		
		var data = {
			"img_url":img_url,
			"description":description,
			"title":title,
			"location":fitcampLocation,
			"expired_date":expired_date,
			"start_date":start_date,
			"end_date":end_date
		};
		
        $.postAjax(this.url + "api/fitcamp/", data, (data, status, xhr) => {			
            $(document).trigger("createFitcampAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete fitcamp 
	this.deleteFitcampAPI = (fitcampID) => {						
        $.deleteAjax(this.url+'api/fitcamp/' + fitcampID,(data, status, xhr) => {			
            $(document).trigger("deleteFitcampAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit fitcamp  
    this.editFitcampAPI = (img_url,description,title,fitcampLocation,expired_date,start_date,end_date,fitcampID) => {		
        var data = {
			"img_url":img_url,
			"description":description,
			"title":title,
			"location":fitcampLocation,
			"expired_date":expired_date,
			"start_date":start_date,
			"end_date":end_date
		};		
        $.putAjax(this.url+'api/fitcamp/' + fitcampID, data,(data, status, xhr) => {			
            $(document).trigger("editFitcampAPIResponse", [data, status]);
        }, this.error);
    }


	// Get fitcamp 
    this.getFitcampAPI = (fitcampID) => {			
		$.getAjax(this.url+'api/fitcamp/' + fitcampID, (data, status, xhr) => {					
           $(document).trigger("getFitcampAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all fitcamp 
    this.getAllFitcampAPI = () => {			
		$.getAjax(this.url+'api/fitcamp/' , (data, status, xhr) => {					
           $(document).trigger("getAllFitcampAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
	
	
	
	
	
	/* 				Tracking history API section 			*/	

	
	// Create TrackingHistory 
    this.createTrackingHistoryAPI = (userID,height,weight,water,visceral,fat,bmr,pr) => {
		
		var data = {
			"userID":userID,
			"height":height,
			"weight":weight,
			"water":water,
			"visceral":visceral,
			"fat":fat,
			"bmr":bmr,
			"pr":pr
		};
		
        $.postAjax(this.url + "api/tracking/history/", data, (data, status, xhr) => {			
            $(document).trigger("createTrackingHistoryAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete TrackingHistory 
	this.deleteTrackingHistoryAPI = (trackingID) => {						
        $.deleteAjax(this.url+'api/tracking/history/' + trackingID,(data, status, xhr) => {			
            $(document).trigger("deleteTrackingHistoryAPIResponse", [data, status]);
        }, this.error);
    }	
	


	// Get TrackingHistory 
    this.getTrackingHistoryAPI = (userID) => {			
		$.getAjax(this.url+'api/tracking/history/' + userID, (data, status, xhr) => {					
           $(document).trigger("getTrackingHistoryAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	

	
	
	/* 				Tracking API section 			*/	

	
	// Create tracking 
    this.createTrackingAPI = (userID,height,weight,water,visceral,fat,bmr,pr) => {
		
		var data = {
			"userID":userID,
			"height":height,
			"weight":weight,
			"water":water,
			"visceral":visceral,
			"fat":fat,
			"bmr":bmr,
			"pr":pr
		};
		
        $.postAjax(this.url + "api/tracking/", data, (data, status, xhr) => {			
            $(document).trigger("createTrackingAPIResponse", [data, status]);
        }, this.error );
    }	
	

	
 	//Edit tracking  
    this.editTrackingAPI = (userID,height,weight,water,visceral,fat,bmr,pr) => {		
        var data = {
			"height":height,
			"weight":weight,
			"water":water,
			"visceral":visceral,
			"fat":fat,
			"bmr":bmr,
			"pr":pr
		};		
        $.putAjax(this.url+'api/tracking/' + userID, data,(data, status, xhr) => {			
            $(document).trigger("editTrackingAPIResponse", [data, status]);
        }, this.error);
    }


	// Get specific user attribute  
    this.getTrackingAPI = (userID) => {			
		$.getAjax(this.url+'api/tracking/' + userID, (data, status, xhr) => {					
           $(document).trigger("getTrackingAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all user attribute   
    this.getAllTrackingAPI = () => {			
		$.getAjax(this.url+'api/tracking/' , (data, status, xhr) => {					
           $(document).trigger("getAllTrackingAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
	



	
	/* 				User redeem API section 			*/	

	
	// Create user redeem 
    this.createUserRedeemAPI = (userID,redeemID,quantity) => {
		
		var data = {
			"userID":userID,
			"redeemID":redeemID,
			"quantity":quantity
		};
		
        $.postAjax(this.url + "api/redeem/user/", data, (data, status, xhr) => {			
            $(document).trigger("createUserRedeemAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete user redeem 
	this.deleteUserRedeemAPI = (redeemID,userID) => {						
        $.deleteAjax(this.url+'api/redeem/user/' + redeemID + "?userID=" +  userID,(data, status, xhr) => {			
            $(document).trigger("deleteUserRedeemAPIResponse", [data, status]);
        }, this.error);
    }	

	// Get user redeem  
    this.getUserRedeemAPI = (userID) => {			
		$.getAjax(this.url+'api/redeem/user/' + userID, (data, status, xhr) => {					
           $(document).trigger("getUserRedeemAPIResponse", [data, status,xhr]);
        }, this.error);
    }



	
	
	/* 				Redeem API section 			*/	

	
	// Create redeem 
    this.createRedeemAPI = (img_url,description,title,point,quantity) => {
		
		var data = {
			"img_url":img_url,
			"description":description",
			"title":title,
			"point":point,
			"quantity":quantity
		};
		
        $.postAjax(this.url + "api/redeem/", data, (data, status, xhr) => {			
            $(document).trigger("createRedeemAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete redeem 
	this.deleteRedeemAPI = (redeemID) => {						
        $.deleteAjax(this.url+'api/redeem/' + redeemID,(data, status, xhr) => {			
            $(document).trigger("deleteRedeemAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit redeem  
    this.editRedeemAPI = (redeemID,img_url,description,title,point,quantity) => {		
        var data = {
			"img_url":img_url,
			"description":description",
			"title":title,
			"point":point,
			"quantity":quantity
		};		
        $.putAjax(this.url+'api/redeem/' + redeemID, data,(data, status, xhr) => {			
            $(document).trigger("editRedeemAPIResponse", [data, status]);
        }, this.error);
    }


	// Get redeem 
    this.getRedeemAPI = (redeemID) => {			
		$.getAjax(this.url+'api/redeem/' + redeemID, (data, status, xhr) => {					
           $(document).trigger("getRedeemAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all redeem 
    this.getAllRedeemAPI = () => {			
		$.getAjax(this.url+'api/redeem/' , (data, status, xhr) => {					
           $(document).trigger("getAllRedeemAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
		
	
	
	
	
	
	/* 				Achievement condition API section 			*/	


	
	// Create condition achievement 
    this.createAchievementConditionAPI = (goal_condition,achievementID,goal_value,description,goal_operate) => {
		
		var data = {
			"goal_condition":goal_condition,
			"achievementID":achievementID,
			"goal_value":goal_value,
			"description":description,
			"goal_operate":goal_operate
		};
		
        $.postAjax(this.url + "api/achievement/condition/", data, (data, status, xhr) => {			
            $(document).trigger("createAchievementConditionAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete condition achievement 
	this.deleteAchievementConditionAPI = (conditionAchievementID) => {						
        $.deleteAjax(this.url+'api/achievement/condition/' + conditionAchievementID,(data, status, xhr) => {			
            $(document).trigger("deleteAchievementConditionAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit condition achievement 
    this.editAchievementConditionAPI = (conditionAchievementID,goal_condition,achievementID,goal_value,description,goal_operate) => {		
        var data = {
			"goal_condition":goal_condition,
			"achievementID":achievementID,
			"goal_value":goal_value,
			"description":description,
			"goal_operate":goal_operate
		};		
        $.putAjax(this.url+'api/achievement/condition/' +conditionAchievementID, data,(data, status, xhr) => {			
            $(document).trigger("editAchievementConditionAPIResponse", [data, status]);
        }, this.error);
    }


	// Get condition achievement  
    this.getAchievementConditionAPI = (AchievementID) => {			
		$.getAjax(this.url+'api/achievement/condition/' + AchievementID, (data, status, xhr) => {					
           $(document).trigger("getAchievementConditionAPIResponse", [data, status,xhr]);
        }, this.error);
    }


	
		
	
	
	
	/* 				User achievement API section 			*/	

	
	// Create user achievement 
    this.createUserAchievementAPI = (userID,achieveID) => {
		
		var data = {
			"userID":userID,
			"achieveID":achieveID
		};
		
        $.postAjax(this.url + "api/achievement/user/", data, (data, status, xhr) => {			
            $(document).trigger("createUserAchievementAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete user achievement 
	this.deleteUserAchievementAPI = (userAchievementID) => {						
        $.deleteAjax(this.url+'api/achievement/user/' + userAchievementID,(data, status, xhr) => {			
            $(document).trigger("deleteUserAchievementAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit user achievement 
    this.editUserAchievementAPI = (userAchievementID, userID,achieveID) => {		
        var data = {
			"userID":userID,
			"achieveID":achieveID
		};		
        $.putAjax(this.url+'api/achievement/user/' +userAchievementID, data,(data, status, xhr) => {			
            $(document).trigger("editUserAchievementAPIResponse", [data, status]);
        }, this.error);
    }


	// Get user achievement  
    this.getUserAchievementAPI = (userAchievementID) => {			
		$.getAjax(this.url+'api/achievement/user/' + userAchievementID, (data, status, xhr) => {					
           $(document).trigger("getUserAchievementAPIResponse", [data, status,xhr]);
        }, this.error);
    }

		
	
	
	
	
	
	/* 				Acheivement  API section 			*/	

	
	// Create achievement 
    this.createAchievementAPI = (img_url,description,title,score_point) => {
		
		var data = {
			"img_url":img_url,
			"title":title,
			"description":description,
			"score_point":score_point
		};
		
        $.postAjax(this.url + "api/achievement/", data, (data, status, xhr) => {			
            $(document).trigger("createAchievementAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete achievement 
	this.deleteAchievementAPI = (achievementID) => {						
        $.deleteAjax(this.url+'api/achievement/' + achievementID,(data, status, xhr) => {			
            $(document).trigger("deleteAchievementAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit achievement  
    this.editAchievementAPI = (achievementID,img_url,description,title,score_point) => {		
        var data = {
			"img_url":img_url,
			"title":title,
			"description":description,
			"score_point":score_point
		};		
        $.putAjax(this.url+'api/achievement/' + achievementID, data,(data, status, xhr) => {			
            $(document).trigger("editAchievementAPIResponse", [data, status]);
        }, this.error);
    }


	// Get achievement 
    this.getAchievementAPI = (achievementID) => {			
		$.getAjax(this.url+'api/achievement/' + achievementID, (data, status, xhr) => {					
           $(document).trigger("getAchievementAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all achievement 
    this.getAllAchievementAPI = () => {			
		$.getAjax(this.url+'api/achievement/' , (data, status, xhr) => {					
           $(document).trigger("getAllAchievementAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
		
	
	
	
	/* 				User challenge API section 			*/	

	
	// Create user challenge 
    this.createUserChallengeAPI = (userID,challengeID) => {
		
		var data = {
			"userID":userID,
			"challengeID":challengeID
		};
		
        $.postAjax(this.url + "api/challenge/user/", data, (data, status, xhr) => {			
            $(document).trigger("createUserChallengeAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete user challenge 
	this.deleteUserChallengeAPI = (userChallengeID) => {						
        $.deleteAjax(this.url+'api/challenge/user/' + userChallengeID,(data, status, xhr) => {			
            $(document).trigger("deleteUserChallengeAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit user challenge 
    this.editUserChallengeAPI = (userChallengeID, userID,challengeID) => {		
        var data = {
			"userID":userID,
			"challengeID":challengeID
		};		
        $.putAjax(this.url+'api/challenge/user/' +userChallengeID, data,(data, status, xhr) => {			
            $(document).trigger("editUserChallengeAPIResponse", [data, status]);
        }, this.error);
    }


	// Get user challenge  
    this.getUserChallengeAPI = (userChallengeID) => {			
		$.getAjax(this.url+'api/challenge/user/' + userChallengeID, (data, status, xhr) => {					
           $(document).trigger("getUserChallengeAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	

	
	
	
	/* 				Challenge API section 			*/	

	
	// Create challenge 
    this.createChallengeAPI = (img_url,description,title,score_point) => {
		
		var data = {
			"img_url":img_url,
			"title":title,
			"description":description,
			"score_point":score_point
		};
		
        $.postAjax(this.url + "api/challenge/", data, (data, status, xhr) => {			
            $(document).trigger("createChallengeAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete challenge 
	this.deleteChallengeAPI = (challengeID) => {						
        $.deleteAjax(this.url+'api/challenge/' + challengeID,(data, status, xhr) => {			
            $(document).trigger("deleteChallengeAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit challenge  
    this.editChallengeAPI = (challengeID, img_url,description,title,score_point) => {		
        var data = {
			"img_url":img_url,
			"title":title,
			"description":description,
			"score_point":score_point
		};		
        $.putAjax(this.url+'api/challenge/' + challengeID, data,(data, status, xhr) => {			
            $(document).trigger("editChallengeAPIResponse", [data, status]);
        }, this.error);
    }


	// Get challenge 
    this.getChallengeAPI = (challengeID) => {			
		$.getAjax(this.url+'api/challenge/' + challengeID, (data, status, xhr) => {					
           $(document).trigger("getChallengeAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all challenge 
    this.getAllChallengeAPI = () => {			
		$.getAjax(this.url+'api/challenge/' , (data, status, xhr) => {					
           $(document).trigger("getAllChallengeAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
		
	
	
	
	
	
	
	
	
	
	
	

	/* 				Fitcamp Register API section 			*/	

	
	// Create fitcamp register 
    this.createfitcampRegisterAPI = (userID,fitcampID) => {
		
		var data = {
			"userID":userID,
			"fitcampID":fitcampID
		};
		
        $.postAjax(this.url + "api/fitcamp/register/", data, (data, status, xhr) => {			
            $(document).trigger("createfitcampRegisterAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete fitcamp register 
	this.deletefitcampRegisterAPI = (userID, fitcampID) => {						
        $.deleteAjax(this.url+'api/fitcamp/register/' + fitcampID + "?userID = " + userID,(data, status, xhr) => {			
            $(document).trigger("deletefitcampRegisterAPIResponse", [data, status]);
        }, this.error);
    }	
	

	//  Get all the register from that fitcamp id 
    this.getAllFitcampRegisterAPI = (fitcampID) => {			
		$.getAjax(this.url+'api/fitcamp/register/fitcampID/' + fitcampID, (data, status, xhr) => {					
           $(document).trigger("getAllFitcampRegisterAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// 	 Get all the register from that user id 
    this.getAllUserRegisterAPI = (userID) => {			
		$.getAjax(this.url+'api/fitcamp/register/userID/' + userID , (data, status, xhr) => {					
           $(document).trigger("getAllUserRegisterAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
		
	
	
	
	
	
	/* 				Fitcamp Attendance API section 			*/	

	
	// Create fitcamp coach 
    this.createFitcampCoachAPI = (userID,fitcampID) => {
		
		var data = {
			"coachID":userID,
			"fitcampID":fitcampID
		};
		
        $.postAjax(this.url + "api/fitcamp/coach/", data, (data, status, xhr) => {			
            $(document).trigger("createFitcampCoachAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete fitcamp coach 
	this.deleteFitcampCoachAPI = (userID, fitcampID) => {						
        $.deleteAjax(this.url+'api/fitcamp/coach/' + fitcampID + "?userID = " + userID,(data, status, xhr) => {			
            $(document).trigger("deleteFitcampCoachAPIResponse", [data, status]);
        }, this.error);
    }	
	

	// Get all the coach from the fitcamp id
    this.getAllFitcampCoachAPI = (fitcampID) => {			
		$.getAjax(this.url+'api/fitcamp/coach/fitcampID/' + fitcampID, (data, status, xhr) => {					
           $(document).trigger("getAllFitcampCoachAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	//  Get all the fitcamp from that coach id 
    this.getAllCoachFitcampAPI = (userID) => {			
		$.getAjax(this.url+'api/fitcamp/coach/userID/' + userID , (data, status, xhr) => {					
           $(document).trigger("getAllCoachFitcampAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
		
	
	
	
	/* 				Fitcamp Attendance API section 			*/	

	
	// Create fitcamp attendance 
    this.createFitcampAttendanceAPI = (userID,fitcampID) => {
		
		var data = {
			"userID":userID,
			"fitcampID":fitcampID
		};
		
        $.postAjax(this.url + "api/fitcamp/attendance/", data, (data, status, xhr) => {			
            $(document).trigger("createFitcampAttendanceAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete fitcamp attendance 
	this.deleteFitcampAttendanceAPI = (userID, fitcampID) => {						
        $.deleteAjax(this.url+'api/fitcamp/attendance/' + fitcampID + "?userID = " + userID,(data, status, xhr) => {			
            $(document).trigger("deleteFitcampAttendanceAPIResponse", [data, status]);
        }, this.error);
    }	
	

	// Get all fitcamp attendance of that fitcamp
    this.getAllFitcampAttendanceAPI = (fitcampID) => {			
		$.getAjax(this.url+'api/fitcamp/attendance/' + fitcampID, (data, status, xhr) => {					
           $(document).trigger("getAllFitcampAttendanceAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all fitcamp attendance of that user 
    this.getAllUserAttendanceAPI = (userID) => {			
		$.getAjax(this.url+'api/fitcamp/attendance/' + userID , (data, status, xhr) => {					
           $(document).trigger("getAllUserAttendanceAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
		

	
	
	
	
	/* 				Fitcamp API section 			*/	

	
	// Create fitcamp 
    this.createFitcampAPI = (img_url,description,title,fitcampLocation,expired_date,start_date,end_date) => {
		
		var data = {
			"img_url":img_url,
			"description":description,
			"title":title,
			"location":fitcampLocation,
			"expired_date":expired_date,
			"start_date":start_date,
			"end_date":end_date
		};
		
        $.postAjax(this.url + "api/fitcamp/", data, (data, status, xhr) => {			
            $(document).trigger("createFitcampAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete fitcamp 
	this.deleteFitcampAPI = (fitcampID) => {						
        $.deleteAjax(this.url+'api/fitcamp/' + fitcampID,(data, status, xhr) => {			
            $(document).trigger("deleteFitcampAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit fitcamp  
    this.editFitcampAPI = (img_url,description,title,fitcampLocation,expired_date,start_date,end_date,fitcampID) => {		
        var data = {
			"img_url":img_url,
			"description":description,
			"title":title,
			"location":fitcampLocation,
			"expired_date":expired_date,
			"start_date":start_date,
			"end_date":end_date
		};		
        $.putAjax(this.url+'api/fitcamp/' + fitcampID, data,(data, status, xhr) => {			
            $(document).trigger("editFitcampAPIResponse", [data, status]);
        }, this.error);
    }


	// Get fitcamp 
    this.getFitcampAPI = (fitcampID) => {			
		$.getAjax(this.url+'api/fitcamp/' + fitcampID, (data, status, xhr) => {					
           $(document).trigger("getFitcampAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	// Get all fitcamp 
    this.getAllFitcampAPI = () => {			
		$.getAjax(this.url+'api/fitcamp/' , (data, status, xhr) => {					
           $(document).trigger("getAllFitcampAPIResponse", [data, status,xhr]);
        }, this.error);
    }	
	
	


	/* 				Comment API section 			*/	

	
	// Create forum comment
    this.createCommentAPI = (forumID,userID,content) => {
		
		var data = {
			"forumID":forumID,
			"userID":userID,
			"content":content
		};
		
        $.postAjax(this.url + "api/comment/", data, (data, status, xhr) => {			
            $(document).trigger("createCommentAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete forum comment
	this.deleteCommentAPI = (commentID) => {						
        $.deleteAjax(this.url+'api/comment/' + commentID,(data, status, xhr) => {			
            $(document).trigger("deleteCommentAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Edit forum comment 
    this.editCommentAPI = (commentID,forumID,userID,content) => {		
        var data = {
			"forumID":forumID,
			"userID":userID,
			"content":content
		};		
        $.putAjax(this.url+'api/comment/' + commentID, data,(data, status, xhr) => {			
            $(document).trigger("editCommentAPIResponse", [data, status]);
        }, this.error);
    }


	// Get forum comment
    this.getCommentAPI = (commentID) => {			
		$.getAjax(this.url+'api/comment/' + commentID, (data, status, xhr) => {					
           $(document).trigger("getCommentAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
	
	
	
	
	/* 				Forum API section 			*/	

	
	// Create forum
    this.createForumAPI = (title,content,userID,img_url) => {
		
		var data = {
			"title":title,
			"content":content,
			"userID":userID,
			"img_url":img_url
		};
		
        $.postAjax(this.url + "api/forum/", data, (data, status, xhr) => {			
            $(document).trigger("createForumAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete forum
	this.deleteForumAPI = (forumID) => {						
        $.deleteAjax(this.url+'api/forum/' + forumID,(data, status, xhr) => {			
            $(document).trigger("deleteForumAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Modify forum  
    this.editForumAPI = (forumID,title,content,userID,img_url) => {		
        var data = {
			"title":title,
			"content":content,
			"userID":userID,
			"img_url":img_url
		};		
        $.putAjax(this.url+'api/forum/' + forumID, data,(data, status, xhr) => {			
            $(document).trigger("editForumAPIResponse", [data, status]);
        }, this.error);
    }


	// Get all forum
    this.getAllForumAPI = () => {			
		$.getAjax(this.url+'api/forum/', (data, status, xhr) => {					
           $(document).trigger("getAllForumAPIResponse", [data, status,xhr]);
        }, this.error);
    }
	

	// Get specific forum
    this.getForumAPI = (forumID) => {			
		$.getAjax(this.url+'api/forum/' + forumID, (data, status, xhr) => {					
           $(document).trigger("getForumAPIResponse", [data, status,xhr]);
        }, this.error);
    }
		
	
	
	
	
	

	/* 				Product API section 			*/	

	// Create product API request 
    this.createProductAPI = (name,img,description,price,quantity) => {
		
		var data = {
			"name":name,
			"img_url":img,   
			"description":description,
			"price":price,
			"quantity":quantity
		};
		
        $.postAjax(this.url + "api/product/", data, (data, status, xhr) => {			
            $(document).trigger("createProductAPIResponse", [data, status]);
        }, this.error );
    }	
	
 	//Delete product
	this.deleteProductAPI = (productID) => {						
        $.deleteAjax(this.url+'api/product/' + productID,(data, status, xhr) => {			
            $(document).trigger("deleteProductAPIResponse", [data, status]);
        }, this.error);
    }	
	
	
 	//Modify product 
    this.editProductAPI = (productID,name,description,price,quantity) => {		
        var data = {
			"name":name,
			"img_url":img,   
			"description":description,
			"price":price,
			"quantity":quantity
		};		
        $.putAjax(this.url+'api/product/' + productID, data,(data, status, xhr) => {			
            $(document).trigger("editProductAPIResponse", [data, status]);
        }, this.error);
    }


	// Get product
    this.getProductAPI = () => {			
		$.getAjax(this.url+'api/product/', (data, status, xhr) => {					
           $(document).trigger("getProductAPIResponse", [data, status,xhr]);
        }, this.error);
    }

	
}


/*=============================================		

				API Declaration
		
==============================================*/
var fitnergistAPI = new Api();    

    
