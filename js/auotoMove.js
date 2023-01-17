const downArrow = document.querySelector("#downArrow");
downArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container2").scrollIntoView(true);
});

const upArrow = document.querySelector("#upArrow");
upArrow.addEventListener("click", function () {
  document.querySelector("body").style.overflow = "visible";
  document.querySelector(".container1").scrollIntoView(true);
});
