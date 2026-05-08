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
    // Background color change removed for mobile optimization
  }, 16); // ~60fps
});
