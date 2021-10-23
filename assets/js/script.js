// DEPENDECIES

var currentDate = $("#currentDay");
var today = moment();
var currentTime = moment().format("LT");

var am7Text = $("#a7");
var button7 = $("#btn7");

// FUNCTIONS

function windowReset() {
  currentDate.text(today.format("LL"));
  findCurrentTime();
}

windowReset();

function findCurrentTime() {
  if (currentTime < 7) {
    $("#a7").addClass("future");
  } else if (currentTime == 7) {
    $("#a7").addClass("present");
  } else {
    $("#a7").addClass("past");
  }
  console.log(currentTime);
}

function storeScheduleSeven() {
  var storeseven = localStorage.getItem("7AM", am7Text);
  am7Text.val(storeseven);
  console.log(storeseven);
}

storeScheduleSeven();

function saveScheduleSeven(event) {
  event.preventDefault();
  console.log("Saved successfully");
  localStorage.setItem("7AM", JSON.stringify(am7Text.val()));
  am7Text.val("");
}

// USER INTERACTIONS
button7.on("click", saveScheduleSeven);
