function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');
let i = 0;

createBtn.addEventListener('click', () => {
  destroyBoxes();
  const amount = inputRef.value;
  if (amount < 1 || amount > 100) {
    return;
  }
  createBoxes(amount);
  inputRef.value = '';
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    boxesRef.appendChild(box); // Append box element to boxesRef
    boxes.push(box);
  }
  return boxes;
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}