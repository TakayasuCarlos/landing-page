document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, // Mostra um slide por vez
    spaceBetween: 10, // Espaçamento entre os slides
    loop: true, // Ativa o loop infinito
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

// Efeito de digitação no texto animado
document.addEventListener("DOMContentLoaded", function () {
  const text = "Get the best skincare products with exclusive discounts!";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      document.getElementById("animated-text").textContent = text.substring(0, i + 1);
      i++;
      setTimeout(typeEffect, 50); // Velocidade da digitação
    }
  }
  typeEffect();
});
