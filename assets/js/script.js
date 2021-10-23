// DEPENDECIES

var currentDateDisplay = $("#currentDay");
var today = moment();

windowInit();

function windowInit() {
  currentDateDisplay.text(today.format("LL"));
}
