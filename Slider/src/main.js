const slides = document.querySelectorAll('.slide');

slides[2].classList.add('active');

for (const slide of slides) {
  slide.addEventListener('click', (event) => {
    clearActiveClasses();
    slide.classList.add('active');
  });
}

function clearActiveClasses() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });
}
