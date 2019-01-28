$(document).ready(function(){
    $("#time").click(function(){
    time();
              
})
});
var time = function (){

   var secondsRemaining;
   var minutesRemaining;
   var hoursRemaining;
   var daysRemaining;
   var days;
   var hours;
   var years;
  
   
   var input= $("#number1").val();
   x=input % 60;
   minutes = Math.floor(input/60);
   minutesRemaining = min%60;
   hours = Math.floor(min/60);
   hoursRemaining = hours%60;
   days = Math.floor(hours/24);
   daysRemaining = days%7;
   years= Math.floor(years/365);
}
