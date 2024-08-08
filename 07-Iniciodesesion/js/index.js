const formulario = document.querySelector('.formulario')
const username = document.querySelector('.username')
const password = document.querySelector('.password')

function registrarUser(e) {
    e.preventDefault();


    let user = {
        userName: username.value,
        userPass: password.value,
    }

    localStorage.setItem('user', JSON.stringify(user))

    formulario.reset();
}

formulario.addEventListener('submit', registrarUser)