/*1.1 Para modificar el texto guardo en la variable addText el div addText y 
luego con addEventListener llamo a un promt para que con el textContent cambie 
el valor del texto.*/

let addText = document.querySelector('#addText');
addText.addEventListener('click', () => {
    
    let texto = prompt("Escriba el nuevo texto:", "Nuevo Texto");
    addText.textContent= document.querySelector("#addText").value= texto;
    }
);


/*1.2 Establezco un addEventListener al div setColor para que cambie el 
color de fondo usando style.backgroundColor*/
setColor.addEventListener('click', () => {

    let color = document.querySelector("#color").value;
    let divColor = document.getElementById("setColor");
    divColor.style.backgroundColor = color;
});


/*1.3 Guardo en la variable addDiv el div addDiv, agregándole un addEventListener
crea un nuevo div con createElement("div"), provoco a un promp para que
el usuario escriba el nuevo texto y lo añado como hijo nodo de #domNodes usando 
appendChild(nuevoDiv).*/

let addDiv = document.querySelector('#addDiv');
addDiv.addEventListener('click', () => {

    let nuevoDiv = document.createElement("div");
    nuevoDiv.className = "DivNuevo";
    

    let textoDiv = prompt("Escriba el texto del div:", "Nuevo Div");
    nuevoDiv.innerHTML = textoDiv;

    let secDomNode = document.querySelector("#domNodes");
    secDomNode.appendChild(nuevoDiv);
});


/*1.4 Guardo en la variable addSpan el div addSpan, agregándole un addEventListener
crea un nuevo div con createElement("span"), provoco a un promp para que
el usuario escriba el nuevo texto y lo añado como hijo nodo de #domNodes usando 
appendChild(nuevoSpan).*/

let addSpan = document.querySelector('#addSpan');
addSpan.addEventListener('click', () => {

    let nuevoSpan = document.createElement("span");
    nuevoSpan.className = "SpanNuevo";
    

    let textoSpan = prompt("Escriba el texto del div:", "Nuevo Span");
    nuevoSpan.innerHTML = textoSpan;

    let secDomNode = document.querySelector("#domNodes");
    secDomNode.appendChild(nuevoSpan);
});


/*1.5 Guardo en la variable setContentPrev el div setContentPrev, agregándole un addEventListener
crea un nuevo div con createElement("div"). 
Al nuevo div le asigno un class con .className, un texto con .innerHTML, un addEventListener y
lo añado como hijo nodo de #domNodes usando appendChild(nuevoDivContent).
Creando un addEventListener sobre el nuevo div se ejecuta un prompt que pide el texto al usuario 
y lo inserta en el elemento hermano anterior al ultimo creado usando lastChild y previousSibling.innerHTML */

let setContentPrev = document.querySelector('#setContentPrev');
setContentPrev.addEventListener('click', () => {

    let nuevoDivContent = document.createElement("div");
    nuevoDivContent.className = "setContentPrev";
    
    let textoDivContent = "setContentPrev";
    nuevoDivContent.innerHTML = textoDivContent;

    let secDomNode = document.querySelector("#domNodes");
    secDomNode.appendChild(nuevoDivContent);

    nuevoDivContent.addEventListener('click', () => {

        let textoContent = prompt("Escriba el texto del div:", "Nuevo DivContent");
        let secDomNode = document.querySelector('#domNodes')
        let ultimNode = secDomNode.lastChild;
        ultimNode.previousSibling.innerHTML = textoContent;
    });
});


/*1.6 Guardo en la variable delPrevNode el div delPrevNode, agregándole un addEventListener
crea un nuevo div con createElement("div"), al nuevo div le asigno un class con .className, 
un texto con .innerHTML, lo añado como hijo nodo de #domNodes usando appendChild(nuevoDivPrevNode)
y un addEventListener seleccionando a la clase delPrevNod con un querySelector y eliminando 
el hermano anterior con previousSibling.remove()*/

let delPrevNode = document.querySelector('#delPrevNode');
delPrevNode.addEventListener('click', () => {

    let nuevoDivPrevNode = document.createElement("div");
    nuevoDivPrevNode.className = "delPrevNod";

    let textoDivPrevNode = "Remove Preview";
    nuevoDivPrevNode.innerHTML = textoDivPrevNode;

    let secDomNode = document.querySelector("#domNodes");
    secDomNode.appendChild(nuevoDivPrevNode);

    nuevoDivPrevNode.addEventListener('click', () => {
        let currentElement = document.querySelector('.delPrevNod');
        currentElement.previousSibling.remove();
    });
});


/*1.7 Guardo en la variable delNextNode el div delNextNode, agregándole un addEventListener
crea un nuevo div con createElement("div"), al nuevo div le asigno un class con .className, 
un texto con .innerHTML, lo añado como hijo nodo de #domNodes usando appendChild(nuevoDivNextNode)
 y un addEventListener seleccionando a la clase elNextNode con un querySelector y eliminandolo
el hermano siguiente con nextElementSibling.remove()*/

let delNextNode = document.querySelector('#delNextNode');
delNextNode.addEventListener('click', () => {

    let nuevoDivNextNode = document.createElement("div");
    nuevoDivNextNode.className = "elNextNode";

    let textoDivNextNode = "Remove Next";
    nuevoDivNextNode.innerHTML = textoDivNextNode;

    let secDomNode = document.querySelector("#domNodes");
    secDomNode.appendChild(nuevoDivNextNode);

    nuevoDivNextNode.addEventListener('click', () => {
        let currentElement2 = document.querySelector('.elNextNode');
        currentElement2.nextElementSibling.remove();
    });
});


//1.8 ¿?¿?¿?

/*
    let addAttr = document.querySelector('#addAttr');
    addAttr.addEventListener('click', () => {

    var contenedor = document.querySelector('#domNodes');
    var matches = contenedor.querySelectorAll('div');

    let nuevoatributo = document.createElement("li");
    nuevoatributo.className = "atributoNuevo";

    let numero = prompt("Número del atributo:", "1");
    let nombre = prompt("Nombre del atributo:", "B");
    let valor = prompt("Valor del atributo:", "44");
    addAttr.numero.innerHTML= document.querySelector("#addAttr").value= numero;
    addAttr.nombre.innerHTML= document.querySelector("#addAttr").value= nombre;
    addAttr.valor.innerHTML= document.querySelector("#addAttr").value= valor;

    let nuevoTexto = document.createElement("li");
    nuevoTexto.className = nombre;
    nuevoTexto.innerHTML = textoDiv;

    let secDomNode = document.querySelector("#domNodes");
    secDomNode.appendChild(nuevoatributo);
});
*/

//1.9

let delAllType = document.querySelector('#delAllType');
delAllType.addEventListener('click', () => {

    let secDomNode = document.querySelector("#domNodes");
    let borrarElemento = prompt("Tipo de elemento a borrar:", "span");

    let list=secDomNode.querySelectorAll(borrarElemento);
    console.log(list);
  
    secDomNode.remove(list);//??????????
 
});
