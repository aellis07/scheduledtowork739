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

  if (currentTime < 1) {
    $("#p1").addClass("future");
  } else if (currentTime == 1) {
    $("#p1").addClass("present");
  } else {
    $("#p1").addClass("past");
  }

  if (currentTime < 2) {
    $("#p2").addClass("future");
  } else if (currentTime == 2) {
    $("#p2").addClass("present");
  } else {
    $("#p2").addClass("past");
  }

  if (currentTime < 3) {
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

// 8AM FUNCTION
{
  function storeScheduleEight() {
    var storeeight = localStorage.getItem("8AM", am8Text);
    am8Text.val(storeeight);
    console.log(storeeight);
  }
  function saveScheduleEight(event) {
    event.preventDefault(am8Text);
    console.log("Saved successfully");
    localStorage.setItem("8AM", JSON.stringify(am8Text.val()));
    am8Text.val("");
  }
}

// 9AM FUNCTION
{
  function storeScheduleNine() {
    var storenine = localStorage.getItem("9AM", am9Text);
    am9Text.val(storenine);
    console.log(storenine);
  }
  function saveScheduleNine(event) {
    event.preventDefault(am9Text);
    console.log("Saved successfully");
    localStorage.setItem("9AM", JSON.stringify(am9Text.val()));
    am9Text.val("");
  }
}

// 10AM FUNCTION
{
  function storeScheduleTen() {
    var storeten = localStorage.getItem("10AM", am10Text);
    am10Text.val(storeten);
    console.log(storeten);
  }
  function saveScheduleTen(event) {
    event.preventDefault(am10Text);
    console.log("Saved successfully");
    localStorage.setItem("10AM", JSON.stringify(am10Text.val()));
    am10Text.val("");
  }
}

// 11AM FUNCTION
{
  function storeScheduleEleven() {
    var storeeleven = localStorage.getItem("11AM", am11Text);
    am11Text.val(storeeleven);
    console.log(storeeleven);
  }
  function saveScheduleEleven(event) {
    event.preventDefault(am11Text);
    console.log("Saved successfully");
    localStorage.setItem("11AM", JSON.stringify(am11Text.val()));
    am11Text.val("");
  }
}

// 12PM FUNCTION
{
  function storeScheduleTwelve() {
    var storetwelve = localStorage.getItem("12PM", pm12Text);
    pm12Text.val(storetwelve);
    console.log(storetwelve);
  }
  function saveScheduleTwelve(event) {
    event.preventDefault(pm12Text);
    console.log("Saved successfully");
    localStorage.setItem("12PM", JSON.stringify(pm12Text.val()));
    pm12Text.val("");
  }
}

// 1PM FUNCTION
{
  function storeScheduleOne() {
    var storeone = localStorage.getItem("1PM", pm1Text);
    pm1Text.val(storeone);
    console.log(storeone);
  }
  function saveScheduleOne(event) {
    event.preventDefault(pm1Text);
    console.log("Saved successfully");
    localStorage.setItem("1PM", JSON.stringify(pm1Text.val()));
    pm1Text.val("");
  }
}

// 2PM FUNCTION
{
  function storeScheduleTwo() {
    var storetwo = localStorage.getItem("2PM", pm2Text);
    pm2Text.val(storetwo);
    console.log(storetwo);
  }
  function saveScheduleTwo(event) {
    event.preventDefault(pm2Text);
    console.log("Saved successfully");
    localStorage.setItem("2PM", JSON.stringify(pm2Text.val()));
    pm2Text.val("");
  }
}

// 3PM FUNCTION
{
  function storeScheduleThree() {
    var storethree = localStorage.getItem("3PM", pm3Text);
    pm3Text.val(storethree);
    console.log(storethree);
  }
  function saveScheduleThree(event) {
    event.preventDefault(pm3Text);
    console.log("Saved successfully");
    localStorage.setItem("3PM", JSON.stringify(pm3Text.val()));
    pm3Text.val("");
  }
}

// USER INTERACTIONS
// =================
{
  button7.on("click", saveScheduleSeven);
  storeScheduleSeven();

  button8.on("click", saveScheduleEight);
  storeScheduleEight();

  button9.on("click", saveScheduleNine);
  storeScheduleNine();

  button10.on("click", saveScheduleTen);
  storeScheduleTen();

  button11.on("click", saveScheduleEleven);
  storeScheduleEleven();

  button12.on("click", saveScheduleTwelve);
  storeScheduleTwelve();

  button1.on("click", saveScheduleOne);
  storeScheduleOne();

  button2.on("click", saveScheduleTwo);
  storeScheduleTwo();

  button3.on("click", saveScheduleThree);
  storeScheduleThree();
}
