// Ejercicio 1

const image = document.querySelector('#image');

image.addEventListener('click', () => {
    if (image.classList.contains('borde-ejercicio1')) {
        image.classList.remove('borde-ejercicio1');
    } else {
        image.classList.add('borde-ejercicio1');
    }
});
