// DEPENDECIES
// =====================
var currentDate = $("#currentDay");
var today = moment();
var currentTime = moment().format("kk");

{
  // Timeblock variables

  var am7Text = $("#a7");
  var button7 = $("#btn7");
  var am7Time = $("#am7");
  // ======================
  var am8Text = $("#a8");
  var button8 = $("#btn8");
  var am8Time = $("#am8");
  // ======================
  var am9Text = $("#a9");
  var button9 = $("#btn9");
  var am9Time = $("#am9");
  // ======================
  var am10Text = $("#a10");
  var button10 = $("#btn10");
  var am10Time = $("#am10");
  // ======================
  var am11Text = $("#a11");
  var button11 = $("#btn11");
  var am11Time = $("#am11");
  // ======================
  var pm12Text = $("#p12");
  var button12 = $("#btn12");
  var pm12Time = $("#pm12");
  // ======================
  var pm1Text = $("#p1");
  var button1 = $("#btn1");
  var pm1Time = $("#pm1");
  // ======================
  var pm2Text = $("#p2");
  var button2 = $("#btn2");
  var pm2Time = $("#pm2");
  // ======================
  var pm3Text = $("#p3");
  var button3 = $("#btn3");
  var pm3Time = $("#pm3");
}

// FUNCTIONS
// =====================
// MAIN WINDOW FUNCTIONS

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

  if (currentTime < 8) {
    $("#a8").addClass("future");
  } else if (currentTime == 8) {
    $("#a8").addClass("present");
  } else {
    $("#a8").addClass("past");
  }

  if (currentTime < 9) {
    $("#a9").addClass("future");
  } else if (currentTime == 9) {
    $("#a9").addClass("present");
  } else {
    $("#a9").addClass("past");
  }

  if (currentTime < 10) {
    $("#a10").addClass("future");
  } else if (currentTime == 10) {
    $("#a10").addClass("present");
  } else {
    $("#a10").addClass("past");
  }

  if (currentTime < 11) {
    $("#a11").addClass("future");
  } else if (currentTime == 11) {
    $("#a11").addClass("present");
  } else {
    $("#a11").addClass("past");
  }

  if (currentTime < 12) {
    $("#p12").addClass("future");
  } else if (currentTime == 12) {
    $("#p12").addClass("present");
  } else {
    $("#p12").addClass("past");
  }

  if (currentTime > 1) {
    $("#p1").addClass("future");
  } else if (currentTime == 1) {
    $("#p1").addClass("present");
  } else {
    $("#p1").addClass("past");
  }

  if (currentTime > 2) {
    $("#p2").addClass("future");
  } else if (currentTime == 2) {
    $("#p2").addClass("present");
  } else {
    $("#p2").addClass("past");
  }

  if (currentTime > 3) {
    $("#p3").addClass("future");
  } else if (currentTime == 3) {
    $("#p3").addClass("present");
  } else {
    $("#p3").addClass("past");
  }
  console.log(currentTime);
}

// TIMEBLOCK FUNCTIONS
// 7AM FUNCTION
{
  function storeScheduleSeven() {
    var storeseven = localStorage.getItem("7AM", am7Text);
    am7Text.val(storeseven);
    console.log(storeseven);
  }
  function saveScheduleSeven(event) {
    event.preventDefault(am7Text);
    console.log("Saved successfully");
    localStorage.setItem("7AM", JSON.stringify(am7Text.val()));
    am7Text.val("");
  }
}

// USER INTERACTIONS
// =================
{
  button7.on("click", saveScheduleSeven);
  storeScheduleSeven();
}
