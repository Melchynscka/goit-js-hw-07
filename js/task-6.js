function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input[type="number"]');
const createButton = document.querySelector('button[data-create]');
const destroyButton = document.querySelector('button[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = Number(input.value);

  if (amount < 1 || amount > 100) {
    alert('Please enter a number between 1 and 100');
    return;
  }

  const boxes = Array.from({ length: amount }, (_, index) => {
    const size = 30 + index * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  boxesContainer.append(...boxes);

  input.value = '';
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}