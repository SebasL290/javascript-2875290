const container = document.querySelector('.container')

let url = 'https://rickandmortyapi.com/api/character'
fetch(url)
.then(response => response.json())
.then( data => {

    data.results.forEach(element => {
        console.log(element.name)
        
        const box = document.createElement('div')
        box.classList.add("box")
        box.innerHTML =
         `
        <img src="${element.image}" whith="200px">
        <p>${element.name}</p>
        `
        container.appendChild(box)
})
})

  