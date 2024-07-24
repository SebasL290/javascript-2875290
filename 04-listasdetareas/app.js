const input = document.querySelector("#input");
const btn = document.querySelector("#crear");
const main = document.querySelector("#main");
const btnBorrar = document.querySelector("#Limpiar");

function crear (){
const tarea = document.createElement("div");
tarea.classList.add("lista");
tarea.innerText = input.value
main.appendChild(tarea);
input.value = "";


const tach = document.createElement("button");
tach.innerText = "X";
tach.classList.add("tach");
tarea.appendChild(tach);


const quit = document.createElement("button");
quit.innerText = "◎";
quit.classList.add("quit");
tarea.appendChild(quit);
}

function BorrarPantalla(){
    main.innerHTML = "";
    n =1;
}

function BorrarElemento(e){

    if(e.target.innerText === "X"){
        main.removeChild(e.target.parentElement);
    }
}

 function tacharElemento(e){
        
    if(e.target.innerText === "◎"){
        e.target.parentElement.style.textDecorationLine = "line-through"
    }
} 

btn.addEventListener("click", crear);
btnBorrar.addEventListener("click", BorrarPantalla);
main.addEventListener("click", BorrarElemento);
main.addEventListener("click", tacharElemento);