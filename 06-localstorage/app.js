/* let nombre = "sebas"

let item = ['uno', 'dos', 'tres', 'cuatro', 'cinco' ]
let musica = {
    id: 4,
    imagen: 'https://i.ytimg.com/vi/4F0cCKFac04/hqdefault.jpg?s…GUgYChMMA8=&rs=AOn4CLBLLazhlzJ7bIGyYU0rbTw62SxSUA',
    nombre: 'Fecha',
    genero: 'Regueton',
    año: 2024,
    artista: 'Feid',
    link: 'https://youtu.be/4F0cCKFac04?si=BIA6UVUrq2BOKMPS'
}
function agregarStorage (key, value) {
    if(typeof value === 'string'){
        localStorage.setItem(key, value)
    }
    else{
        localStorage.setItem(key, JSON.stringify(value) )
    }
}
agregarStorage ('nombre', nombre)
agregarStorage ('carrito', item)
agregarStorage ('musica', musica)

function obtenerDatos (){
    let nombreusuario = localStorage.getItem ('nombre')
    let carritousuario = JSON.parse ( localStorage.getItem ('carrito') )
    let musicausuario = JSON.parse (localStorage.getItem ('musica') )
    console.log(carritousuario, typeof carritousuario)

        carritousuario.forEach(item => {
            console.log(item)
        })
}

obtenerDatos ()

function borraritem (item){
    localStorage.removeItem(item)
}

borraritem ('musica')
borraritem ('nombre')
borraritem ('carrito')

function borrarTodo (){
    localStorage.clear()
}
borrarTodo ('clear')

 */

const formulario = document.querySelector('.formulario')
const username = document.querySelector('.username')
const password = document.querySelector('.password')
