const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', setColor);

  square.addEventListener('mouseleave', removeColor);

  board.append(square);
}

function setColor({ target: element }) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor({ target: element }) {
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px black`;
}

function getRandomColor(params) {
  const index = Math.floor(Math.random() * colors.length);

  return colors[index];
}
