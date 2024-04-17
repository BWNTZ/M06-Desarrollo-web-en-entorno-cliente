<?php 
session_start();
/**4.	Al clicar en el botón CHECK COMBINACION envía una petición al servidor con el API Fetch pasando la combinación formada por los 4 números escritos en los inputs. 
*a.	El servidor ha de comprobar si son iguales a la combinación guardada.
*b.	Si la combinación es igual, retorna al cliente un mensaje indicando que se ha guardado el valor. 
*c.	Si la combinación no es igual, retorna al cliente un mensaje indicando que no se ha acertado la combinación.

 * 
 */
$saved_key=  $_SESSION["key"];
$send_key=$_POST["send_key"];


//miramos si la clave pasada es igual a la guardada
if($saved_key == $send_key ){
        echo json_encode(array("valido"=>"ok"));
}else{
    echo json_encode(array("valido"=>"error"));
}

