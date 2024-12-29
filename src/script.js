const swiper = new Swiper(".mySwiper", {
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2000, // Durasi antar-slide dalam milidetik (3000ms = 3 detik)
  
  },
});

  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });





