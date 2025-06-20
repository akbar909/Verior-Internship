const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const changeTextButton = document.getElementById('changeText');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');

let counter = 0;

incrementButton.addEventListener('click', () => {
    counter++;
    counterElement.innerHTML = counter;
});

decrementButton.addEventListener('click', () => {
    counter--;
    counterElement.innerHTML = counter;
});

changeTextButton.addEventListener('click', () => {
    document.querySelector('h1').innerHTML = 'Counter App Updated';
});

toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
