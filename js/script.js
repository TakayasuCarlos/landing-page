// Inicializa o Swiper.js
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

// Contador de Promoção
function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  let timeLeft = 3600;

  function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;
    if (timeLeft >= 0) setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
}

startCountdown();

// Efeito no subtítulo "Exclusive deals on premium skincare products."
document.addEventListener("DOMContentLoaded", function () {
  const text = "Exclusive deals on premium skincare products.";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      document.querySelector(".fade-in-text").textContent = text.substring(0, i + 1);
      i++;
      setTimeout(typeEffect, 50);
    }
  }
  setTimeout(typeEffect, 1000);
});

// Animação para o botão "Get Your Deal Now"
document.addEventListener("DOMContentLoaded", function () {
  const ctaButton = document.querySelector(".cta-button");
  ctaButton.style.opacity = "0";
  ctaButton.style.transform = "translateY(-20px)";

  setTimeout(() => {
    ctaButton.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    ctaButton.style.opacity = "1";
    ctaButton.style.transform = "translateY(0)";
  }, 500);
});

// Efeito animado no Countdown Timer
function startCountdown() {
  const countdownElement = document.getElementById("countdown");
  let timeLeft = 3600;

  function updateCountdown() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    countdownElement.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    timeLeft--;

    // Adiciona efeito ao número da contagem
    countdownElement.style.transform = "scale(1.1)";
    countdownElement.style.opacity = "0.8";
    setTimeout(() => {
      countdownElement.style.transform = "scale(1)";
      countdownElement.style.opacity = "1";
    }, 200);

    if (timeLeft >= 0) setTimeout(updateCountdown, 1000);
  }

  updateCountdown();
}

startCountdown();

document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true, // Usa bolinhas menores
    },
    on: {
      init: function () {
        document.querySelector(".swiper-pagination").style.bottom = "-40px"; // Move para baixo
      },
    },
  });
});
