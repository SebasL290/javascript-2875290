const selector = document.querySelector('#ListaColores');
const boton = document.querySelector('#btnCrear');
const main = document.querySelector('#main');

function crear (){
    const ball = document.createElement('div')
    ball.classList.add('pelotica');
    main.appendChild(ball);
    ball.style.backgroundColor = ListaColores.value 

    console.log(ball)
}

boton.addEventListener('click', crear)