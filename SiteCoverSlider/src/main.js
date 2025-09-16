const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length;
const container = document.querySelector('.container');

let activeSlideIndex = 0;
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', (params) => {
  changeSlide('up');
});

downBtn.addEventListener('click', (params) => {
  changeSlide('down');
});

document.addEventListener('keydown', ({ key }) => {
  switch (key) {
    case 'ArrowUp':
      changeSlide('up');
      break;

    case 'ArrowDown':
      changeSlide('down');
      break;

    default:
      break;
  }
});

function changeSlide(direction) {
  switch (direction) {
    case 'up':
      activeSlideIndex++;
      if (activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
      }
      break;

    case 'down':
      activeSlideIndex--;
      if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
      }
      break;

    default:
      break;
  }

  const height = container.clientHeight;

  mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
  sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
