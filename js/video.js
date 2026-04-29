const mobileVideoBreakpoint = window.matchMedia("(max-width: 768px)");
const heroVideo = document.querySelector("#hero-video");

function syncHeroVideoMode(event) {
  if (!heroVideo) {
    return;
  }

  const shouldDisableVideo = event.matches;
  document.body.classList.toggle("is-mobile-video", shouldDisableVideo);

  if (shouldDisableVideo) {
    heroVideo.pause();
    return;
  }

  heroVideo.play().catch(() => {});
}

syncHeroVideoMode(mobileVideoBreakpoint);
mobileVideoBreakpoint.addEventListener("change", syncHeroVideoMode);
