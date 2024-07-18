const titulo = document.querySelector('.titulo')
const gato = document.querySelector('.uno')
const olla = document.querySelector('.olla')
const perg = document.querySelector('.pergamino')
const btn = document.querySelector('.btn')

function movimiento (){
    titulo.style.animationName = "movertitulo"
    gato.style.animationName = "movergato"
    olla.style.animationName = "rotar"
    perg.style.animationName = "rotarp"
}

btn.addEventListener('click', movimiento)
