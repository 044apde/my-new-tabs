let hours = new Date().getHours();

const background = document.querySelector(".background");
if (hours < 6) {
  background.style.opacity = 0.7;
} else if (hours < 7) {
  background.style.opacity = 0.6;
} else if (hours < 8) {
  background.style.opacity = 0.5;
} else if (hours < 9) {
  background.style.opacity = 0.4;
} else if (hours < 10) {
  background.style.opacity = 0.3;
} else if (hours < 15) {
  background.style.opacity = 0.2;
} else if (hours < 17) {
  background.style.opacity = 0.3;
} else if (hours < 19) {
  background.style.opacity = 0.4;
} else if (hours < 21) {
  background.style.opacity = 0.7;
} else {
  background.style.opacity = 0.8;
}
