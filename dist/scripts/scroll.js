const bg = document.getElementById('js-scroll');
let bodyHeight = document.body.offsetHeight; // Cache if it doesn't change

// Throttle scroll event
let scrollThrottleTimer;
const throttleScroll = (callback, time) => {
  if (scrollThrottleTimer) return;
  scrollThrottleTimer = true;
  setTimeout(() => {
    callback();
    scrollThrottleTimer = false;
  }, time);
};

window.addEventListener('scroll', function() {
  throttleScroll(() => {
    const scrollValue = (window.innerHeight + window.scrollY) / bodyHeight;

    // IMAGE APPEAR (APPEAR AT 42% OF SCROLL)
    if (scrollValue > 0.35 && scrollValue < 0.55) {
      bg.style.background = "rgb(255,255,255)";
      bg.style.transition = "all ease 1s";
    } else if (scrollValue > 0.55) {
      bg.style.background = "black";
    } else {
      bg.style.background = "rgb(0,0,0)";
    }
  }, 16); // ~60fps
});
