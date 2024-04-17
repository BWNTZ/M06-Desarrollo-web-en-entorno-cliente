console.log("éste mensaje se muestra por consola");

//accedemos al elemento con id "ordenCorrecto" para que contenga el texto "ERR01: defer obliga al JS a ejecutarse al final" 
let mensaje = "<br/><b>ERR01</b>: defer obliga al JS a ejecutarse al final</br>";
document.getElementById("ordenCorrecto").innerHTML = mensaje;


/**Al ejecutar la función saluda, introduce en #mensaje
 *  el valor pasado por p
 * arametro
 * 
 * @param {type} texto
 */
function saluda(texto) {
    //CODIGO ERROR cuidado mayusculas
    document.getElementById("mensaje").innerHTML=texto;

}
/**
 * Muestra un prompt en el que el usuario introduce texto y luego muestra ese texto en mensajePrompt
 */
function pideDatoPrompt() {
    //CODIGO ERROR
     let respuesta= prompt("Esta es la pregunta del promt");
  
    document.getElementById("mensajePrompt").innerHTML = `<b>ERR03</b>:no confundir 
                                                                    con windowS<br/>` + respuesta;
}
/**Lee el texto del input y luego lo muestra en "mensajeInput"
 * 
 */
function pideDatoInput() {
    let texto = document.getElementById("entradaInfo").value;
    //CODIGO ERROR
    document.getElementById("mensajeInput").innerHTML=`<b>ERR04</b>: los DIV no tienen value,  pero tienen innerHTML</br>` + texto;
}

function suma10() {
    let texto = document.getElementById("entradaSuma10").value;  
   //CODIGO INCORRECTO
    let entero= parseInt(texto);
    texto = entero + 10;
    document.getElementById("mensajeSuma10").innerHTML = `<b>ERR05</b>: sin pasar a numero la suma concatena: </br>` + texto ;

}
/** SOLUCION  calculaOperacion() */

function calculaOperacion() {
   
    let primerNumero = document.getElementById("primerNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;
    let primero= parseInt(primerNumero);
    let segundo= parseInt(segundoNumero);
    let operacion = document.getElementById("operacion").value;

    if (operacion == "+") {
        let suma = primero + segundo;
        document.getElementById("mensajeOperacion").innerHTML = suma;
    } else if (operacion == "*") {
        let multiplicacion = primero * segundo;
        document.getElementById("mensajeOperacion").innerHTML = multiplicacion;
    } else {
        document.getElementById("operacionIncorrecta").innerHTML =`</b>Operación incorrecta`;
    }  
}
