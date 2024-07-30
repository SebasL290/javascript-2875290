const container = document.querySelector('.container')

Musica.forEach(element => {
let card = document.createElement('div')

card.innerHTML =
`   <div class="card">
        <img src='${element.imagen}' alt="Imagen de la tarjeta" class="card-imagen">
        <div class="card-contenido">
            <h2 class="card-titulo">${element.nombre}</h2>
            <p class="card-descripcion">${element.genero}</p>
            <p class="card-descripcion">${element.año}</p>
            <p class="card-descripcion">${element.artista}</p>
            <a href="${element.link}" class="btn">Escuchar</a>
        </div>
    </div>
`
container.appendChild(card);
})

