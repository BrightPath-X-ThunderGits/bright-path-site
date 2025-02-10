let currentSlide = 0;
const items = document.querySelectorAll(".carousel-item");
const totalSlides = items.length;
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const currentSlideElem = document.getElementById("current-slide");
const totalSlidesElem = document.getElementById("total-slides");

// Initialize status
totalSlidesElem.textContent = totalSlides;

function showSlide(index) {
  if (index < 0) {
    currentSlide = totalSlides - 1;
  } else if (index >= totalSlides) {
    currentSlide = 0;
  }
  items.forEach((item, i) => {
    item.style.display = i === currentSlide ? "block" : "none";
  });

  currentSlideElem.textContent = currentSlide + 1;
}

prevBtn.addEventListener("click", () => {
  currentSlide--;
  showSlide(currentSlide);
});

nextBtn.addEventListener("click", () => {
  currentSlide++;
  showSlide(currentSlide);
});

// Initialize carousel
showSlide(currentSlide);
