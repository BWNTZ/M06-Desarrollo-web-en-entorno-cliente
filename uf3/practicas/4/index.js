const participantesOL = document.querySelector("#participantes");

/*
programa que al clicar en "AÑADE PARTICIPANTE" se añada el nombre 
introducido en el input "Nombre" como un nuevo participante con el color de texto igual al escrito en el segundo input "Color".
*/
const addParticipante = document.querySelector("#addParticipante");
addParticipante.addEventListener('click', () => {
    //obtenemos datos de los input
    let nombre = document.querySelector("#nombre").value;
    let color = document.querySelector("#color").value;

    //creamos nuevo elemento y le asignamos propiedades
    let nuevoParticipante = document.createElement("li");
    nuevoParticipante.style.color = color;
    nuevoParticipante.className = "listaPartecipantes";
    nuevoParticipante.innerHTML = nombre;

    //añadimos el nuevo elemento
    participantesOL.appendChild(nuevoParticipante);
});

/*
Programa que al clicar en "FINALIZA COMPETICION" el color de fondo del primer particpante se 
cambie a verde, el segundo a azul, el tercero a naranja y el ultimo a rojo.
*/

const finalizaCompeticion = document.querySelector("#finalizaCompeticion");
finalizaCompeticion.addEventListener('click', () => {
    const listaPartecipantes = document.querySelectorAll(".listaPartecipantes");
    
    listaPartecipantes[0] ? listaPartecipantes[0].style.backgroundColor = "green" : "";
    listaPartecipantes[1] ? listaPartecipantes[1].style.backgroundColor = "blue" : "";
    listaPartecipantes[2] ? listaPartecipantes[2].style.backgroundColor = "orange" : "";
    listaPartecipantes[listaPartecipantes.length - 1] ? listaPartecipantes[listaPartecipantes.length - 1].style.backgroundColor = "red" : "";

});


/*
Programa que al clicaren "BORRA PARTICIPANTE" se borre el LI de la lista de participantes que 
sea al número de hijo igual al escrito en el 3r input "Posicion".
*/
const btnRemoveOne = document.querySelector("#btnRemoveOne");
btnRemoveOne.addEventListener('click', () => {

    let posicion = document.getElementById("posicion").value; // 2

    if (participantesOL.hasChildNodes()) {
        participantesOL.removeChild(participantesOL.children[posicion - 1]); // 2-1
    }
});


/*
Programa que al clicar en "MUEVE PARTICIPANTE" se mueva el LI de la lista de participantes que
 sea al número de hijo igual al escrito en el  3r input "Posicion"   y se situe en la posicion
  escrita en el 4o input "Posicion Final"*/
const mueveParticipante = document.querySelector("#mueveParticipante");
mueveParticipante.addEventListener('click', () => {

    let posicion = document.querySelector("#posicion").value;
    let posicionFinal = document.querySelector("#posicionFinal").value;

    /*
    // versión con children
    let participantes = participantesOL.children; //obtenemos todos los participantes
    let participanteMover = participantes[posicion - 1]; //Seleccionamos el participante a mover
    let participanteDondeMover = participantes[posicionFinal - 1]; //Seleccionamos el participante donde se va mover

    //movemos el participanteMover delante de participanteDondeMover
    participantesOL.insertBefore(participanteMover, participanteDondeMover);
    */

    // Versión con selectores
    const listaPartecipantes = document.querySelectorAll(".listaPartecipantes");
    let posicionSel = listaPartecipantes[posicion - 1].innerHTML
    listaPartecipantes[posicion - 1].innerHTML = listaPartecipantes[posicionFinal - 1].innerHTML;
    listaPartecipantes[posicionFinal - 1].innerHTML = posicionSel;

});

/*
Programa que al clicar en "MODIFICA PARTICIPANTE" se cambie el texto del LI de la lista que sea
al número de hijo igual al escrito en el 3r input "Posicion"    y se sustituya por el texto 
escrito en el 1r input "Nombre"
*/

const modificaParticipante = document.querySelector("#modificaParticipante");
modificaParticipante.addEventListener('click', () => {

    let posicion = document.getElementById("posicion").value;
    let nombre = document.getElementById("nombre").value;

    let participantes = participantesOL.children; //obtenemos todos los participantes
    let participanteMover = participantes[posicion - 1]; //Seleccionamos al que modificar el contenido

    participanteMover.innerHTML = nombre;//modificamos el contenido


//const listaPartecipantes = document.querySelectorAll(".listaPartecipantes");
//listaPartecipantes[posicion - 1].innerHTML = nombre;

});