function updateBackgroundGradient() {
  const scrollY = window.scrollY;
  const background = document.querySelector(".background-wrapper");
  if (!background) return;

  const opacity = Math.min(scrollY / 500, 1);
  background.style.backgroundImage = `
    linear-gradient(to bottom, rgba(0, 0, 0, ${opacity}) 0%, rgba(0, 0, 0, 1) 100%),
    url("./images/team 63 2025 crop.jpeg")
  `;
}

function updateFadeOnScroll() {
  const scrollY = window.scrollY;
  const maxFadeScroll = 300;
  const opacity = Math.max(1 - scrollY / maxFadeScroll, 0);

  document.querySelectorAll(".fade-on-scroll").forEach(el => {
    el.style.opacity = opacity;
  });
}

function updateBackgroundPosition() {
  const scrollY = window.scrollY;
  const background = document.querySelector(".background-wrapper");
  if (background) {
    background.style.top = `${Math.max(scrollY, 0)}px`;
  }
}

function onScroll() {
  updateBackgroundGradient();
  updateFadeOnScroll();
  updateBackgroundPosition();
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", () => {
  onScroll();

  // Add Copy Buttons to Code Blocks
  document.querySelectorAll("pre").forEach(block => {
    const button = document.createElement("button");
    button.className = "copy-btn";
    button.innerText = "Copy";
    block.appendChild(button);

    button.addEventListener("click", () => {
      const code = block.querySelector("code");
      if (!code) return;
      navigator.clipboard.writeText(code.innerText).then(() => {
        button.innerText = "Copied!";
        setTimeout(() => {
          button.innerText = "Copy";
        }, 2000);
      });
    });
  });
  
  const swiperContainer = document.querySelector(".swiper-container");
  if (swiperContainer && typeof Swiper !== "undefined") {
    const swiper = new Swiper(swiperContainer, {
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  }
});