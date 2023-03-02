
$(function () {
  
  //  A event listener for click events on the save button. 
  // uses the id in the containing time-block as a key to save the user input in
  // local storage. 
$('.saveBtn').click(function(){
  var timestamp = $(this).parent().attr('id');
var memo = $(this).prev().val();
localStorage.setItem(timestamp, memo);
localStorage.getItem(timestamp, memo);
console.log(memo)


}); 

  //
  // code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour.
  var time = dayjs().format("HH");
  var timestamp = $(".container-lg").children("div");
console.log(timestamp);
for (i = 0 ; i < timestamp.length; i++) {
var t = "#" + timestamp[i]["id"];
var tHour = t.split("-");
console.log(tHour[1]);



if (tHour[1] < time) {
 // console.log("past");
  $(t).addClass("past");
} else if (tHour[1] == time) {
 $(t).addClass("present");
} 
  else if (tHour[1] > time) {
    $(t).addClass("future");

  }}

  // saves textarea input to local storage.
  for (i = 0 ; i < timestamp.length; i++) {
    var hour = timestamp[i]["id"];
    var text = localStorage.getItem(hour);
    if (text != null) {
      $("#" + hour).children("textarea").val(text);
    }

  }


  //
  //  A code to display the current date in the header of the page. uses dayjs
$("#currentDay").text(dayjs().format('MMMM DD, YYYY'))

});
