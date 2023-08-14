let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let pare = document.getElementById("pare-sec");
let stop = document.getElementById("Stop");
let rest = document.getElementById("Rest");
let start = document.getElementById("Start");
let myInteral;

start.addEventListener("click", function () {
  myInteral = setInterval(() => {
    pare.innerHTML = parseInt(pare.innerHTML) + 1;

    if (pare.innerHTML == 60) {
      sec.innerHTML = parseInt(sec.innerHTML) + 1;
      pare.innerHTML = "00";
    }
    if (sec.innerHTML == 60) {
      min.innerHTML = parseInt(min.innerHTML) + 1;
      sec.innerHTML = "00";
    }
    if (min.innerHTML == 60) {
      hours.innerHTML = parseInt(hours.innerHTML) + 1;
      min.innerHTML = "00";
    }
  }, 16.6);

  // prevent user to click on start again
  start.disabled = true;
});

stop.addEventListener("click", function () {
  clearInterval(myInteral);
  start.disabled = false;
});
rest.addEventListener("click", function () {
  clearInterval(myInteral);
  start.disabled = false;
  hours.innerHTML = "00";
  min.innerHTML = "00";
  sec.innerHTML = "00";
  pare.innerHTML = "00";
});
