/*2 Dentro de index.html añade un div con id “listaPropiedades”. 
 * Utiliza la función onload de window para que una vez cargado 
 * todo el HTML se llame a una función que cree dentro 
 * de “listaPropiedades” una lista desordenada HTML 
 * ( <ul> <li></li> .... </ul>) como la mostrada a continuación y rellenada con los valores obtenidos*/

var hoy = new Date();
dia = hoy.getDate();
mes = hoy.getMonth();
year = hoy.getFullYear();
hora = hoy.getHours();
minuto = hoy.getMinutes();

document.getElementById('listaPropiedades').innerHTML =
      "<ul> <li>Valor máximo que puede tener un número en JavaScript: " + Number.MAX_VALUE + "</li>"
        + "<li> Altura total de la pantalla: " + window.screen.height + "</li>"
        + "<li> Anchura total de la pantalla: " + window.screen.width + "</li>"
        + "<li> Altura interna " + window.innerHeight + "</li>"
        + "<li>  Anchura interna : " + window.innerWidth + "</li>"
        + "<li>  URL de la página web: " + document.location.href + "</li>"
        + "<li> Título de la página web : " + document.title + "</li>"
        + "<li> Un valor aleatorio entre 0 y 200 (utiliza el objeto Math): " + Math.floor((Math.random() * 200)) + "</li>"
        + "<li> La fecha actual es: " + dia + "-" + mes + "-" + year + "</li>"
        + "<li> La hora actual es: " + hora + ":" + minuto + "</li>"
    + "</ul>";

/**3. establezca como valor de la cookie “nombre_usuario”
 el texto introducido por el usuario dentro del input.
 * 
 * @returns {undefined}
 */
function setCookie() {
    var url = document.getElementById("url").value;
    document.cookie = "url_usuario=" + url;
}


/*4.	Programa que al cargar la web, el valor  del input con id url sea 
el valor guardado en la cookie “url_usuario”.*/
let urlcookie = document.cookie;
let posicion = urlcookie.lastIndexOf("=");
cookie = urlcookie.substring(posicion + 1, urlcookie.length);
document.getElementById("url").value = cookie;

/**
 * 5.	5.	Añade al HTML un botón con el texto “ABRE VENTANA”.¡
 *  Programa que al clicarlo se abra una nueva ventana “nueva_ventana.html” 
 * y que pasados 7 segundos la ventana se cierre. La nueva ventana ha de ser
 *  de 400x400px, sin barra de menús y situada en medio de la pantalla. 
 */
function openNuevaVentana() {
    let anchuraPAntalla = window.screen.width / 2;
    let alturaPAntalla = window.screen.height / 2;
    let posicionTop = alturaPAntalla - 400;
    let posicionLeft = anchuraPAntalla - 400;
    ventanaNueva = window.open("nueva_ventana.html", "", "width=400,height=400,menubar=no,left=" + posicionLeft + ",top=" + posicionTop);

    window.setTimeout(function () {
        ventanaNueva.close();
    }, 79000)
}


/**2
 * a. Al clicar sobre el 1r botón se muestre en index.html 
 * el texto “Estoy aprendiendo JavaScript ”.
 */
function  muestraMensajeMadre(){
    document.getElementById("mensaje").innerHTML="<p>Estoy aprendiendo JavaScript <p>";
}


/**2
 *  b. se muestre dentro de index.html un número aleatorio entre 0 y 10.  
 * */
function generaAleatorio(){
    numero = Math.floor((Math.random() * 10));
    document.getElementById("mensaje").innerHTML="<p>"+numero+"</p>";
}

let ventanaNueva; //definimos la varable fuera de la funcion para asegurarnos que será siempre accesible para cerrarla