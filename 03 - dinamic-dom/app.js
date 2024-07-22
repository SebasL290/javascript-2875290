const selector = document.querySelector('#ListaColores');
const boton = document.querySelector('#btnCrear');
const main = document.querySelector('#main');
const btnborrar = document.querySelector('#btnBorrar')
let n = 1

function crear (){
    const ball = document.createElement('div');
    const equis = document.createElement('button');

    equis.innerText = 'x';
    equis.classList.add('equis')

    ball.classList.add('pelotica');
    main.appendChild(ball);
    ball.style.backgroundColor = ListaColores.value;
    ball.innerText = n++;
    /* ball.innerHTML = equis;  */
    ball.appendChild(equis) 

}

function borrarPantalla (){
    main.innerHTML = ' ';
    n=1;
}
function borrarElemento (e){

    if(e.target.innerText == 'x'){
        main.removeChild(e.target.parentElement);
    }
}

function tacharelemento (e) {
    e.target.style.textDecorationLine = "line-through"

}

btnCrear.addEventListener('click',crear)
btnBorrar.addEventListener('click',borrarPantalla)
main.addEventListener('click',borrarElemento)   
main.addEventListener('click',tacharelemento)   