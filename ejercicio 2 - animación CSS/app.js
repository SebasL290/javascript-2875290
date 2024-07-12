const fondo = document.querySelector('.container');
const sol = document.querySelector('.sol');
const montaña = document.querySelector('.montaña');
const nube1 = document.querySelector(".uno");
const nube2 = document.querySelector(".dos");
const nube3 = document.querySelector(".tres");
const nube4 = document.querySelector(".cuatro");

function pasarnoche (){
fondo.style.backgroundColor = "black"
sol.style.backgroundColor = "white"
}

function moversol (){
sol.style.animation = "solmover 5s linear"
}

function movernubes (){
nube1.style.animation = "movernube1 5s linear"
nube2.style.animation = "movernube2 5s linear"
nube3.style.animation = "movernube3 5s linear"
nube4.style.animation = "movernube4 5s linear"
}

nube3.addEventListener("click", movernubes);
fondo.addEventListener("click", pasarnoche);
sol.addEventListener("click", moversol);
