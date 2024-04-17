
//2- Clase Extra con su get getHTML.
class Extra{
    precio;
    url; 
    constructor (precio,url){
        this.precio = precio;
        this.url = url;
    }
    getHTML() {
        return "<span> <img src='"+[this.url]+"'/>"+[this.precio]+"</span>";
    }
}

//3- Validación del código.
let extra = new Extra();
extra.precio = "10€";
extra.url = "imgs/concha_azul.jpeg";
console.log(extra.getHTML());

//4- Clase Coche con su set anyadirExtra y get getHTMLCoche.
function Coche() {
    this.nombre = "";
    this.velocidad = "";
    this.extras = [];   
    this.anyadirExtra = function (ex){
        this.extras.push(ex);
    }
    this.getHTML = function(){
        let coches = "";
        this.extras.forEach((element) =>{
            coches += element.getHTML();
        });
        return "<span>"+this.nombre +" "+ this.velocidad +" ["+ coches + "]</span><br />";
    }
}

//5- Validación del código.
let coche = new Coche();
coche.nombre = "Carricoche";
coche.velocidad = "10km/h";
coche.anyadirExtra(extra);
console.log(coche.getHTML());

//6- Array global extrasDisponibles
var extrasDisponibles= new Array;
//Creación de nuevo extra2 y añadir al extrasDisponibles.
let extra2 = new Extra();
extra2.precio="30€";
extra2.url="imgs/estrella.jpeg";
extrasDisponibles.push(extra);
extrasDisponibles.push(extra2);

//Muestra por consola extrasDisponibles.
console.log(extrasDisponibles);

//7-Ejecuta las funciones mostrarExtras y mostrarCoches una vez cargada la web.
window.onload = function(){
    mostrarExtras();
    mostrarCoches();
}

function mostrarExtras(){
    document.getElementById("listaExtras").innerHTML="";
    for(let x in extrasDisponibles){
        document.getElementById("listaExtras").innerHTML += 
        "<ul><li>"+ extrasDisponibles[x].getHTML()+ "</li></ul>";
    }
}

//8- Array asociativo extrasCoches.
var cochesDisponibles = new Array;

//Creación de nuevo coche.
let coche2 = new Coche();
coche2.nombre = "Rocomóvil";
coche2.velocidad = "25km/h";
coche2.anyadirExtra(extra2);
//Añado los coches al array cochesDisponibles.
cochesDisponibles.push(coche);
cochesDisponibles.push(coche2);

/*9-Funcion mostrarCoches para cargar todos los coches disponibles 
una vez cargada la web usando el método del apartado 7.*/
function mostrarCoches(){
    document.getElementById("listaCoches").innerHTML="";

    for(let x in cochesDisponibles){
        document.getElementById("listaCoches").innerHTML += 
        "<ul><li>"+ cochesDisponibles[x].getHTML()+ "</li></ul>";
    }
}

//10-Botón ADD EXTRA para que añada en extrasDisponibles. 
function anyadirExtra(){
    let precioNuevo = document.getElementById("precioNuevo").value;
    let imagenExtra = document.getElementById("imagenExtra").value; 
    let nuevoExtra = new Extra(precioNuevo,imagenExtra);
    extrasDisponibles.push(nuevoExtra);
    mostrarExtras();
}

//11-Botón BORRAR para que borre extrasDisponibles el número de extra indicado.
function borrarExtra(){
    let numero = document.getElementById("numeroBorrar").value;
    extrasDisponibles.splice(numero,1);
    mostrarExtras();
}

//12-Botón ADD COCHE para que añada a cochesDisponibles un nuevo coche con el nombre y la velocidad máxima indicada.
function addCoche(){
    let nuevoCoche = new Coche();
    nuevoCoche.nombre = document.getElementById("nombrecoche").value;
    nuevoCoche.velocidad = document.getElementById("km").value;
    nuevoCoche.anyadirExtra(extra2);
    cochesDisponibles.push(nuevoCoche);
    mostrarCoches();
}

//13 y 14-botón ADD EXTRA COCHE para que añada al coche seleccionado  el número de extra seleccionado.
function addExtraCoche(){
    let numeroExtra = document.getElementById("numeroExtra").value;
    let cocheNombre = document.getElementById("cocheNombre").value;
    let extra = cochesDisponibles[numeroExtra];
    cochesDisponibles[cocheNombre].anyadirExtra(extra);
    mostrarCoches();
};