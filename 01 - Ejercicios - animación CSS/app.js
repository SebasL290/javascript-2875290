const fondo = document.querySelector('.container');
const sol = document.querySelector('.sol');
const guia = document.querySelector('.guia');
const nube1 = document.querySelector(".uno");
const nube2 = document.querySelector(".dos");
const nube3 = document.querySelector(".tres");
const nube4 = document.querySelector(".cuatro");

let e = 0;
function pasarnoche (){
 if(e == 0){
fondo.style.backgroundColor = "black"
sol.style.backgroundColor = "white"
e = 1
}else{
    fondo.style.backgroundColor = "white"
    sol.style.backgroundColor = " rgb(255, 208, 0)" 
    e = 0
}}



function moversol (){
sol.style.animation = "moversol 10s linear"
guia.style.animation = "moversol 10s linear"
}

function movernube () {
nube1.style.animation = "nubeuno 10s linear"
nube2.style.animation = "nubedos 10s linear"
nube3.style.animation = "nubetres 10s linear"
nube4.style.animation = "nubecuatro 10s linear"
}

nube3.addEventListener('click', movernube);
guia.addEventListener('click', moversol);
fondo.addEventListener('click', pasarnoche);

