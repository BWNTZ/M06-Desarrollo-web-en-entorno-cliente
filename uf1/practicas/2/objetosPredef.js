let fecha = new Date();
let numero = Number.MAX_VALUE;

const lista ={
    
    A : "Valor máximo que puede tener un número en JavaScript: "+numero, 
    B : "Altura total de la pantalla: "+screen.height, 
    C : "Anchura total de la pantalla: "+screen.width,
    D : "Altura interna de la ventana: "+screen.availHeight,
    E : "Anchura interna de la ventana: "+screen.availWidth,
    F : "URL de la página web: "+window.location.href,
    G : "Título de la página web: "+document.title,
    H : "Un valor aleatorio entre 0 y 200: "+Math.floor(Math.random() * 200),
    I : "La fecha actual es: "+fecha.getDay()+"-"+fecha.getMonth()+"-"+fecha.getFullYear(),
    J : "La hora actual es: "+fecha.getHours()+":"+fecha.getMinutes()+"h",    
}

let txt="";

for(let x in lista){
    txt += "<ul><li>"+ lista[x]+ "</li></ul>";
}


function listaDesordenadaHTML() {
    document.getElementById("listaCargada").innerHTML = "Lista desordenada cargada.";
    document.getElementById("listaPropiedades").innerHTML = txt;
}

function primerBoton() {
    document.getElementById("mensaje1").innerHTML="Estoy aprendiendo JavaScript";
}

function segundoBoton() {
   document.getElementById("mensaje2").innerHTML = "Número aleatorio: "+ Math.floor((Math.random() * 10));
}

function AbreVentana(){
    let nuevaVentana = window.open("nueva_ventana.html","","height=400,width=400,menubar=no");
    setTimeout(function(){
        nuevaVentana.close("nueva_ventana.html","","height=400,width=400,menubar=no,");
        },7000)
}

function setCookie() {
    var url = document.getElementById("url").value; 
    document.cookie = "url_usuario =" + url;
    alert(document.cookie); 
}

function showCookies() {
    var verCookie = document.cookie;
    alert(verCookie);
  }
