const getSideNav = document.querySelector(".nav-sidebar");
const navBtn = document.querySelector(".btn-colortoggle-nav");
const backgroundYellow = document.querySelector(".yellow");
const backgroundOrange = document.querySelector(".orange");
const backgroundGreen = document.querySelector(".green");
const backgroundRed = document.querySelector(".red");
const backgroundBlue = document.querySelector(".blue");
const backgroundWhite = document.querySelector(".white");
const colortoggleNavStatus = false;

navBtn.addEventListener("mouseover", function (callVisible) {
  console.log(callVisible);

  if (colortoggleNavStatus === false) {
    getSideNav.style.visibility = "visible";
  }
});

backgroundYellow.addEventListener("click", function () {
  document.body.style.backgroundColor = "#FFFF00";
  getSideNav.style.visibility = "hidden";
});

backgroundOrange.addEventListener("click", function () {
  document.body.style.backgroundColor = "orange";
  getSideNav.style.visibility = "hidden";
});

backgroundGreen.addEventListener("click", function () {
  document.body.style.backgroundColor = "green";
  getSideNav.style.visibility = "hidden";
});

backgroundRed.addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
  getSideNav.style.visibility = "hidden";
});

backgroundBlue.addEventListener("click", function () {
  document.body.style.backgroundColor = "blue";
  getSideNav.style.visibility = "hidden";
});

backgroundWhite.addEventListener("click", function () {
  document.body.style.backgroundColor = "white";
  getSideNav.style.visibility = "hidden";
});
