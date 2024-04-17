//Ejercicio 1.
//Función que pide un texto por pantalla y lo asigna como contenido del elemento "addText".
const addText = document.querySelector('#addText');//Recoje el nodo "addText".
addText.addEventListener('click', () => {//Añade un evento al hacer click sobre "addText".

    let texto = window.prompt("Introduce el texto que desee.");//Pide al usuario que introduzca un texto.
   
    document.querySelector("#addText").innerHTML = texto;//Asigna el texto al div "addText".

});


//Ejercicio 2.
let addDiv = document.querySelector('#addDiv');//Captura el nodo "addDiv".
const setColor = document.querySelector('#setColor');
setColor.addEventListener('click', () => {//Añade un evento al hacer click sobre "addText".

    let nav = document.querySelector("#selectOperation");

    let divcolor = document.createElement('div');
    //nav.appendChild(divcolor);

    let elemcolor = document.createElement("input");
    elemcolor.type="color";
    elemcolor.value="#ff0000";
    elemcolor.id="favcolor";
    divcolor.appendChild(elemcolor);

    //let addDiv = document.querySelector('#addDiv');
    
    nav.insertBefore(divcolor,addDiv);

    let botonColor = document.createElement("button");

    //botonColor.type="button";
    botonColor.onclick="enviarColor()";
    botonColor.id="botonColor";
    botonColor.value="Cambiar";

    botonColor.innerHTML = 'Cambiar color';

    divcolor.appendChild(botonColor);

    // const botonColor = document.querySelector('#setColor');
     /*botonColor.addEventListener('click', () => {

        //let color = document.querySelector('favcolor');
        setColor.backgroundColor = "red";

        let color = nav.divcolor.elemcolor.getAttribute('value');
        setColor.setAttribute('value',color);

        console.log(color);
    });
*/
});

function enviarColor(){

}
 


//Ejercicio 3.
//let addDiv = document.querySelector('#addDiv');//Captura el nodo "addDiv".

addDiv.addEventListener('click',() => {//Añade un evento al hacer click sobre "addDiv".
    let addDiv = document.querySelector('#addDiv');//Captura el nodo "addDiv".
    let section = document.querySelector("#domNodes");//Recoje el nodo padre "domNodes".

    //Crea nuevo "div" y lo añade en el nodo padre "domNodes".
    let newDiv = document.createElement("div");
    newDiv.className="addDiv"; //Asigna el atributo class="addDiv" al div.
    section.appendChild(newDiv);//Añade el nuevo div al nodo "domNodes".

    //Pide texto por pantalla.
    let texto = window.prompt("Introduce el texto que desee.");

    //Asigna el texto almacenado en "texto" al nuevo div creado.
    newDiv.innerHTML = texto;

   
});


//Ejercicio 4.
const addSpan = document.querySelector('#addSpan');//Captura el nodo "addSpan".

addSpan.addEventListener('click',() => {//Añade un evento al hacer click sobre "addSpan".
    
    let span = document.createElement("span");//Crea elemento span.
    span.className="addSpan";//Asigna atributo class al span.

    let section = document.querySelector("#domNodes");//Recoje el nodo padre "domNodes".
    section.appendChild(span);//Añade elemento span al nodo "domNodes".

    //Pide texto por pantalla y lo asigna al span.
    let texto = window.prompt("Introduce el texto que desee.");

    //Asigna el texto almacenado en "texto" al nuevo span creado.
    span.innerHTML = texto;

});


//Ejercicio 5.
const setContentPrev = document.querySelector('#setContentPrev');//Captura el nodo "setContentPrev".

setContentPrev.addEventListener('click', () => {//Añade un evento al hacer click sobre "setContentPrev".

    let divDomNodes = document.querySelector('#domNodes');

    let newDiv = document.createElement('div');//Crea un div y lo recoje en la variable "newDiv".
    newDiv.className = 'setContentPrev';//Asigna el atributo class al nuevo div.

    let h3 = document.createElement('h3');//Crea un elemento H3.
    h3.innerHTML = 'setContentPrev';//Asigna un texto a H3.
    newDiv.appendChild(h3);//Añade el elemento h3 al nuevo div.

    divDomNodes.appendChild(newDiv);//Añade el nuevo div al nodo padre.
    // newDiv.innerHTML = 'setContentPrev';//Asigna un texto al nuevo div.
    



    const setContentPrev_class = document.querySelector('.setContentPrev');

    setContentPrev_class.addEventListener('click', () => {//Añade un evento al hacer click sobre "setContentPrev_class".
    
        let padre = document.querySelector('#domNodes');//Recoge el nodo padre.
        let ultimo = padre.lastElementChild;//Recoje el último elemento del nodo padre.
        let penultimo = ultimo.previousSibling;//Recoge el elemento previo al último elemento.

        //Pide texto por pantalla y lo asigna al penultimo elemento.
        let texto = window.prompt("Introduce el texto que desee.");
        penultimo.innerHTML = texto;//Asigna un texto al penultimo elemento.
        
    });
});


//Ejercicio 6.

const delPrevNode = document.querySelector('#delPrevNode');//Captura el nodo con id "delPrevNode".

delPrevNode.addEventListener('click', () => {//Añade un evento al hacer click sobre "delPrevNode".

    let divDomNodes = document.querySelector('#domNodes');//Recoge el nodo padre "domNodes".

    let newDiv = document.createElement('div');//Crea un div y lo recoje en la variable "newDiv".
    newDiv.className = 'delPrevNode';//Asigna el atributo class al nuevo div.

    divDomNodes.appendChild(newDiv);//Añade el nuevo div al nodo padre.

    let h3 = document.createElement('h3');//Crea un elemento H3.
    h3.innerHTML = 'Remove Preview';//Asigna un texto a H3.

    newDiv.appendChild(h3);//Añade el elemento h3 al nuevo div.

    const delPrevNode_class = document.querySelector('.delPrevNode');//Captura el nodo de clase "delPrevNode".

    delPrevNode_class.addEventListener('click', () => {//Añade un evento al hacer click sobre el nuevo div creado con class="delPrevNode".

    let padre = document.querySelector('#domNodes');//Recoge el nodo padre.
    let ultimo = padre.lastElementChild;//Recoge el último elemento dentro del nodo padre.
    let penultimo = ultimo.previousSibling;//Recoge el elemento previo al último elemento del nodo padre.

    padre.removeChild(penultimo);//Borrar el penúltimo elemento.

    });
});


//Ejercicio 7.
const delNextNode = document.querySelector('#delNextNode');//Captura el nodo con id "delNextNode".

delNextNode.addEventListener('click', () => {//Añade un evento al hacer click sobre "delPrevNode".

    let divDomNodes = document.querySelector('#domNodes');//Recoge el nodo padre "domNodes".

    let newDiv = document.createElement('div');//Crea un div y lo recoje en la variable "newDiv".
    newDiv.className = 'delPrevNode';//Asigna el atributo "class = delPrevNode" al nuevo div.

    divDomNodes.appendChild(newDiv);//Añade el nuevo div al nodo padre.

    let h3 = document.createElement('h3');//Crea un elemento H3.
    h3.innerHTML = 'Remove Next';//Asigna un texto a H3.

    newDiv.appendChild(h3);//Añade el elemento h3 al nuevo div.


    const delPrevNode_class = document.querySelector('.delPrevNode');//Captura el nodo de clase "delPrevNode".

    delPrevNode_class.addEventListener('click', () => {//Añade un evento al hacer click sobre "delPrevNode_class".

        let padre = document.querySelector('#domNodes');//Recoge el nodo padre.

        let posterior = delPrevNode_class.nextSibling;
        let posterior_valor = !!delPrevNode_class.nextSibling;
        
        if (posterior_valor == true){
            padre.removeChild(posterior);
        };
    });
});


//Ejercicio 8.
let divDomNodes = document.querySelector('#domNodes');//Recoge el nodo padre "domNodes".
const addAttr = document.querySelector('#addAttr');//Captura el nodo con id "addAttr".

addAttr.addEventListener('click', () => {//Añade un evento al hacer click sobre "addAttr".

    //Pide texto por pantalla y lo almacena en la variable "numero".
    let numero = window.prompt("Introduce un número.");
        
    let hijos = divDomNodes.children;//Recoge todos los hijos del nodo padre "domNodes".

    let elemento_elejido = hijos[numero];//Recoje el elemento seleccionado en "numero".

    /*
    Si el elemento seleccionado está definido, pedirá un nombre y valor al usuario
    y se añadirán los atributos al elemento con los valores especificados; si no está definido,
    mostrará un mensaje de error al usuario.
    */
    if (elemento_elejido !== undefined){
        let nombre = window.prompt("Introduce un nombre.");
        let valor = window.prompt("Introduce un valor.");

        elemento_elejido.setAttribute('name',nombre);
        elemento_elejido.setAttribute('value',valor);

    }else {
        
        alert('No existe ningún elemento en la posición indicada.');
        
    };
});


//Ejercicio 9.

const delAllType = document.querySelector('#delAllType');//Captura el nodo con id "delAllType".

delAllType.addEventListener('click', () => {//Añade un evento al hacer click sobre "addAttr".

    let divDomNodes = document.querySelector('#domNodes');//Recoge el nodo padre "domNodes".
    
    //Pide texto por pantalla y lo almacena en la variable "texto".
    let texto = window.prompt("Especifique el tipo de elemento a borrar.");
    
    //Recoge todos los elementos con el nombre especificado.
    let hijo = divDomNodes.getElementsByTagName(texto);
   
    //Recorre el HTMLCollection y borra los elementos.
    for (var i = hijo.length - 1; i >= 0; i--) {

    hijo[0].parentNode.removeChild(hijo[0]);
    }
});