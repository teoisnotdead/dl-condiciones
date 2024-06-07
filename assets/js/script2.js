// Ejercicio 2

const quantity1 = document.querySelector('#quantity1');
const quantity2 = document.querySelector('#quantity2');
const quantity3 = document.querySelector('#quantity3');
const buttonCheck = document.querySelector('#button');
const message = document.querySelector('#message');

buttonCheck.addEventListener('click', () => {
    const q1 = Number(quantity1.value);
    const q2 = Number(quantity2.value);
    const q3 = Number(quantity3.value);

    let total = q1 + q2 + q3;

    if (total > 10) {
        message.classList.add('text-red-500');
        message.textContent = `Llevas demasiados stickers`;
    } else {
        message.classList.remove('text-red-500');
        message.textContent = `Llevas ${total} stickers`;
    }
});
