const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
    let trimmedValue = nameInput.value.trim();
    nameOutput.textContent = trimmedValue ? trimmedValue : 'Anonymous';
});
