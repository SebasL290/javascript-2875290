const container = document.querySelector('.container');
const buscador = document.querySelector("#buscador");
const textoBusqueda = document.querySelector("#textobusqueda");
const listaStatus = document.querySelector("#listaStatus");


function mostrarResults(result) {
    result.forEach(element => {
        const card = document.createElement('div');
        card.classList.add("card");
        card.innerHTML = `
        <div class="card">
            <img src='${element.imagen}' alt="Imagen de la tarjeta" class="card-imagen">
            <div class="card-contenido">
                <h2 class="card-titulo">${element.nombre}</h2>
                <p class="card-descripcion">${element.genero}</p>
                <p class="card-descripcion">${element.año}</p>
                <p class="card-descripcion">${element.artista}</p>
                <a href="${element.link}" class="btn">Escuchar</a>
            </div>
        </div>
        `;
        container.appendChild(card);
    });
}

function filtrar(e) {
    e.preventDefault();

    container.innerHTML = ""; 

    let filtro = Musica;

    if (listaStatus.value !== "All") {
        filtro = filtro.filter(Musica => Musica.genero.toLowerCase() === listaStatus.value.toLowerCase());
    }
    
    if (textobusqueda.value) {
        filtro = filtro.filter(Musica => Musica.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()));
    }
    mostrarResults(filtro);
    textoBusqueda.value = "";
}

buscador.addEventListener("submit", filtrar);




































/* const container = document.querySelector('.container')
const buscador = document.querySelector("#buscador")
const textoBusqueda = document.querySelector("#textoBusqueda")
const listaStatus = document.querySelector("#listaStatus")

let result;


function mostrarResults(result){
  result.forEach(element => {
    const card = document.createElement('div')
    card.classList.add("card");
    container.appendChild(card)
    
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
container.appendChild(card)
});
}


function filtrar (e){
  e.preventDefault()

  container.innerHTML = ""
  let filtro = Musica; 

  if(listaStatus.value != "All"){
    filtro = filtro.filter(Musica => Musica.genero.toLowerCase().includes === listaStatus.value)
    mostrarResults(filtro)
  }else{
    if(textoBusqueda.value){
    filtro = filtro.filter(Musica => Musica.nombre.toLowerCase().includes(textoBusqueda.value.toLowerCase()) )
    mostrarResults(filtro)
    }else{
      mostrarResults(filtro)

    }
    textoBusqueda.value = ""
  }
}
buscador.addEventListener("submit", filtrar)
let Musica;



 */

