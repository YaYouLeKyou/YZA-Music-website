let mouseCursor = document.querySelector('.cursor');
let links = document.querySelectorAll('.c-summary_list li, p, span, .u-text, h3, a, video, .alone, img, .title, .c-direction-block_item_inner, .background-video .c-section_infos_inner, .c-fixed, .c-damn');

if (window.innerWidth > 699) {
  window.addEventListener('mousemove', cursor);
} else {
  mouseCursor.style.display = 'none';
}

function cursor(e) {
    mouseCursor.style.top = (e.pageY) + "px" 
    mouseCursor.style.left = (e.pageX) + "px"
}

const youtubeOverlays = document.querySelectorAll('.youtube-overlay');
const scrollParent = document.querySelector('[data-scroll-container]') || document.documentElement;

if (window.innerWidth <= 699) {
  youtubeOverlays.forEach(overlay => overlay.remove());
} else {
  function handleYoutubeWheel(e) {
    e.preventDefault();
    scrollParent.scrollBy({ top: e.deltaY, left: e.deltaX, behavior: 'auto' });
  }

  function disableOverlayForClick(overlay) {
    overlay.style.pointerEvents = 'none';
  }

  function enableOverlay(overlay) {
    overlay.style.pointerEvents = 'auto';
  }

  youtubeOverlays.forEach(overlay => {
    overlay.addEventListener('wheel', handleYoutubeWheel, { passive: false });
    overlay.addEventListener('mousewheel', handleYoutubeWheel, { passive: false });
    overlay.addEventListener('mousedown', () => disableOverlayForClick(overlay));
  });

  window.addEventListener('mouseup', () => {
    youtubeOverlays.forEach(enableOverlay);
  });
}

// Hide cursor when mouse leaves the window
document.addEventListener('mouseleave', () => {
  mouseCursor.style.display = 'none';
});

// Show cursor when mouse enters the window
document.addEventListener('mouseenter', () => {
  mouseCursor.style.display = 'block';
});

links.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('link-grow');
    link.classList.remove('hovered-link');
  });
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow');
    link.classList.add('hovered-link');
  });
});

/* --------------------- CLICK -------------------------- */

if (window.innerWidth > 699) {
  document.addEventListener('click', () => {
    mouseCursor.classList.add('expand');
    setTimeout(() => {
      mouseCursor.classList.remove('expand');
    }, 500);
  });
}