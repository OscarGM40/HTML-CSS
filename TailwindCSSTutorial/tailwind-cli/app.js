console.log('linked');

const boton = document.querySelector('#boton');
const menu = document.querySelector('#menu');

boton.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    console.log('click');
} );
