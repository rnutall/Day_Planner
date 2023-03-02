// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
$('.saveBtn').click(function(){
  var timestamp = $(this).parent().attr('id');
var memo = $(this).prev().val();
localStorage.setItem(timestamp, memo);
localStorage.getItem(timestamp, memo);
console.log(memo)


}) 

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  var time = dayjs().format("HH");
  var timestamp = $(".container-lg").children("div");
console.log(timestamp);
for (i = 0 ; i < timestamp; i++);
var t = "#" + timestamp[i]["id"];
var tHour = t.split("-");
console.log(tHour[1]);

var time = 7;

if (tHour[1] < time) {
  console.log("past");
  $(t).addClass("past");
} else if (t[1]) == time;) {
 $(t).addClass("present"); {
  else if (t[1])

}
}





  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
$("#currentDay").text(dayjs().format('MMMM DD, YYYY'))

});
