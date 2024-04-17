<?php 
session_start();
/*5.	Escribir un valor en un input del apartado GUARDAR COMBINACION envía una petición al servidor con el API Fetch pasando como mínimo el valor escrito. 
*a.	Si el digito se corresponde con el digito guardado en el servidor, retorna al cliente un mensaje indicando que el valor es correcto.
*b.	Si el valor no se corresponde, retorna al cliente un mensaje indicando que el valor no es correcto.


*/
$key=  $_SESSION["key"];
$digit_key=$_POST["digit_key"];
$numInput=$_POST["numInput"];

//miramos si el digito introducido se corresponde con el guardado
if($digit_key == substr($key,$numInput-1,1) ){
        echo json_encode(array("valido"=>"ok","n"=>$numInput));
}else{
    echo json_encode(array("valido"=>"error","n"=>$numInput));
}

