$(document).ready(function(){

  //Check user point and update
    $.get(fitnergistAPI.url+'api/users/profile/' +fitnergistAPI.userID , function(data, status){
        var point = data.body[0].point;
        Cookies.set('point', point, { expires: 999 });

        //Change score
        $('.bannerScore').html($.cookie.get("point"));

    });



  /*

      Update timeline

  */
  var json = [];



  // Update fitcamp
  /*
      -- To solve the api call syn problem
      1 - get all the fitcamp record and store in an array
      2 -

  */

  var fitcampIDList =[];
  function getFitcamp(start,target){
    if(start != target){
      $.get(fitnergistAPI.url+'api/fitcamp/' +fitcampIDList[start] , function(data, status){

          var fitcamp = data.body;
          console.log(fitcamp);
          var fitcampDate = fitcamp.end_date;
          var newDate = fitcampDate.split(" ");
          newDate = newDate[0].split("/");

          var months = [ "January", "February", "March", "April", "May", "June",
               "July", "August", "September", "October", "November", "December" ];
          var day = newDate[0];
          var month =months[newDate[1]-1];
          var year = newDate[2];
          json.push({
            title: 'I joined fitcamp',
            description: fitcampDate + ", I have join "+fitcamp.title+" fitcamp and earn "+fitcamp.point +" point!",
            startDate: (new Date(''+month+' '+day+', '+year+'' )),
            endDate: null
          });
          getFitcamp(start+1, target);
      });

    }
    else
    {
      $("#timeline").timeCube({
        data: json,
        granularity: "year",
        startDate: new Date('August 31, 2017'),
        endDate: new Date('January 30, 2018'),
        nextButton: $("#next-link"),
        previousButton: $("#prev-link"),
        showDate: false
      });

    }
  }
  var fitcampLength = 0;
  $.when(
    $.get(fitnergistAPI.url+'api/fitcamp/register/userID/' + fitnergistAPI.userID , function(data, status){
        var fitcamp = data.body;
        fitcampLength = fitcamp.length;
        for(var i=0; i<fitcamp.length;i++)
        {
           if(fitcamp[i].attendance == 1 )
            fitcampIDList.push(fitcamp[i].fitcampID);
        }
    })
  ).then(function() {
    getFitcamp(0,fitcampLength);
  });



	// TImeline

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();



});
