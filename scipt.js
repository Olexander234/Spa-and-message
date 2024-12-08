var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 2 seconds
}














// Получаем элементы стрелок и контейнер с отзывами
const scrollLeft = document.getElementById("scroll-left");
const scrollRight = document.getElementById("scroll-right");
const reviewContainer = document.querySelector(".review-container");

// Обработчик для прокрутки влево
scrollLeft.addEventListener("click", function() {
  reviewContainer.scrollBy({
    left: -300, // Прокрутка на 300px влево
    behavior: "smooth"
  });
});

// Обработчик для прокрутки вправо
scrollRight.addEventListener("click", function() {
  reviewContainer.scrollBy({
    left: 300, // Прокрутка на 300px вправо
    behavior: "smooth"
  });
});




const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.header-right');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });








document.addEventListener("scroll", function () {
  const images = document.querySelectorAll(".image");
  const triggerHeight = window.innerHeight / 1.2;

  images.forEach((image) => {
      const top = image.getBoundingClientRect().top;
      if (top < triggerHeight) {
          image.style.opacity = "1";
          image.style.transform = "translateY(0)";
      }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelector('.slides');
  const slideCount = document.querySelectorAll('.slide').length;
  let currentIndex = 0;
  let autoSlideInterval;

  function updateSlider() {
    const offset = -currentIndex * 100; // Смещение в процентах
    slides.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 3000); // Интервал автопрокрутки: 3 секунды
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Обработчики кнопок
  document.querySelector('.prev-btn').addEventListener('click', () => {
    stopAutoSlide();
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
    startAutoSlide();
  });

  document.querySelector('.next-btn').addEventListener('click', () => {
    stopAutoSlide();
    nextSlide();
    startAutoSlide();
  });

  // Запуск автопрокрутки
  startAutoSlide();

  // При наведении на слайдер остановка автопрокрутки
  slides.addEventListener('mouseover', stopAutoSlide);
  slides.addEventListener('mouseout', startAutoSlide);
});
