const con0downArrow = document.querySelector(".container0 #downArrow");
con0downArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container2").scrollIntoView(true);
});

const con2upArrow = document.querySelector(".container2 #upArrow");
con2upArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container0").scrollIntoView(true);
});
