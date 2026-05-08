const logo = document.getElementById("logo");
const backgroundVideo = document.getElementById("background-video");

logo.addEventListener("mouseover", mouseOver);
logo.addEventListener("mouseout", mouseOut);

function mouseOver() {
  backgroundVideo.style.filter = "blur(1px)";
  backgroundVideo.style.transition = "4s";
}

function mouseOut() {
  backgroundVideo.style.filter = "blur(4px)";
  backgroundVideo.style.transition = "1s";
}
