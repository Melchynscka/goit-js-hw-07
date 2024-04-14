function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputRef = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  destroyBoxes();
  createBoxes(inputRef.value);
  inputRef.value = '';
});

destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    
    boxesRef.appendChild(box);
  }
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}
