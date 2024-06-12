document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide-image');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.classList.toggle('bg-opacity-100', i === index);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
      });
    });
  
    setInterval(nextSlide, 5000); // Change slide every 5 seconds
  });