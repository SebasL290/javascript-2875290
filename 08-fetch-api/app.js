const container = document.querySelector('.container')

fetch('https://jsonplaceholder.typicode.com/users/')
  .then(respuesta => respuesta.json())
  .then(datos => {
    datos.forEach(element => {
        console.log(`name: ${element.name}` )
        console.log(`username: ${element.name}`)
        
        
        const box = document.createElement('div')
        box.classList.add("box")
        const h1 = document.createElement('h1')
        h1.textContent = element.name;
        const p = document.createElement('p')
        p.textContent = element.username;


        box.appendChild(p);
        box.appendChild(h1);
        container.appendChild(box)
        
        })
  })