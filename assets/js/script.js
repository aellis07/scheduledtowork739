// DEPENDECIES

var currentDateDisplay = $("#currentDay");
var today = moment();
var currentTime = moment().format("LT");

// FUNCTION

function pageInit() {
  currentDateDisplay.text(today.format("LL"));
  findCurrentTime();
}

pageInit();

function findCurrentTime() {
  //reads current hour and compares to equivalent hour value, changes class for CSS styling
  if (currentTime < 7) {
    $("#a7").addClass("future");
  } else if (currentTime == 7) {
    $("#a7").addClass("present");
  } else {
    $("#a7").addClass("past");
  }
  console.log(currentTime);
}
