document.addEventListener("DOMContentLoaded", function () {
  // lazy load images:
  const lazyloadImages = document.querySelectorAll("img.lazy");
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }

    lazyloadThrottleTimeout = setTimeout(function () {
      let scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < window.innerHeight + scrollTop) {
          img.src = img.dataset.src;
          img.classList.remove("lazy");
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);

  // Open mobile nav:
  const openMobileNav = document.querySelector(".burger-btn");
  const mobileNav = document.querySelector(".nav-links");

  openMobileNav.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
});
