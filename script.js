document.addEventListener("DOMContentLoaded", () => {
  const carouselContainers = document.querySelectorAll(".carousel-container");

  carouselContainers.forEach((container) => {
    const slides = container.querySelectorAll(".carousel-slide");
    let currentSlide = 0;
    const slideInterval = 3000; // 3 seconds

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = "none";
        if (i === index) {
          slide.style.display = "block";
        }
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }

    // Initially show the first slide
    showSlide(currentSlide);

    // Start the automatic slideshow only if there's more than one slide
    if (slides.length > 1) {
      setInterval(nextSlide, slideInterval);
    }
  });
});
