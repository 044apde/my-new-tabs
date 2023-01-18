const con0downArrow = document.querySelector(".container0 #downArrow");
con0downArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container1").scrollIntoView(true);
});

const con1ownArrow = document.querySelector(".container1 .footer");
con1ownArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container2").scrollIntoView(true);
});

const con1upArrow = document.querySelector(".container1 .header");
con1upArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container0").scrollIntoView(true);
});

const con2upArrow = document.querySelector(".container2 #upArrow");
con2upArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container1").scrollIntoView(true);
});
