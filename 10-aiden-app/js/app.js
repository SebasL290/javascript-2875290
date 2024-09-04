const sectionDesafios = document.querySelector('.desafios');


function mostrarResults(Aiden) {
    Aiden.forEach(element => {
        const desafio = document.createElement('div');
        desafio.classList.add("desafios-container");
        desafio.innerHTML = `
    <div class="desafio1">
        <h1>${element.desafio}</h1>
        <h2>${element.textodescripcion}</h2>
        <button>
        <a href="${element.comenzar}">Comenzar</a>
        </button>
    </div>
    `;
        container.appendChild(desafio);
    });
    mostrarResults(Aiden);
}


