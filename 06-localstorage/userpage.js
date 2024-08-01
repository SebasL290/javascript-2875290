const saludo =document.querySelector('#saludo')

let nombreUser  = JSON.parse( localStorage.getItem('user'))

saludo.innerHTML = `Hola ${nombreUser.userName} 👻`