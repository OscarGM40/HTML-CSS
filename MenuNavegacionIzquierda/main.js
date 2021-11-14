



const menu = document.querySelector('#menu');
const icono = document.querySelector('#open');

icono.addEventListener('click',() => {
   menu.classList.toggle('opened')
})

window.addEventListener('resize',() => {
   if(screen.width > 700){
      console.log('mayor de 700')
   }
})