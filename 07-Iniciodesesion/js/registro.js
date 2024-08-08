const formulario = document.querySelector('.formulario')
const username = document.querySelector('.username')
const password = document.querySelector('.password')


//inicio de sesion 
function validarUsuario (e){
    e.preventDefault()

let currentUser = JSON.parse( localStorage.getItem('user'))
console.log(currentUser.userName)
console.log(currentUser.usserPass)


    console.log(Boolean(username.value === currentUser.userName))
    console.log(Boolean(password.value === currentUser.userPass))

    if(username.value === currentUser.userName && password.value === currentUser.userPass){
        console.log('felicidades puedes entrar 👽')
        window.location = "./userpage.html"

    }else{
        console.log('sigue intentando')
    }

    formulario.reset()

}

formulario.addEventListener('submit',validarUsuario)