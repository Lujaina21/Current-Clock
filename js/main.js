"use strict";
var time = document.querySelector("#time");
// !====== Cursor ======
var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  console.log(e);
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

// !====== Timer Script ======
currentTime();
function currentTime() {
  setInterval(function () {
    let date = new Date();
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();
    time.innerHTML = `${hrs < 9 ? `0${hrs}` : hrs} : ${
      mins < 9 ? `0${mins}` : mins
    } : ${secs < 9 ? `0${secs}` : secs}`;
  }, 1000);
}
