<?php 
/**
 * a.	El servidor ha de comprobar si es un valor numérico de un único dígito y positivo. 
*b.	Si el valor es correcto, retorna al cliente un mensaje indicando que el valor es correcto.
*c.	Si el valor no es correcto, retorna al cliente un mensaje indicando que el valor no es correcto.

 */

//tenemos que retornar un valor indicando si la clave indicada es un numero entre 0 y 9 
$digit_key=$_GET["digit_key"];
$n=$_GET["n"];
if(is_numeric($digit_key) && $digit_key>=0 &&  $digit_key <=9 ){
    echo json_encode(array("valido"=>"ok","n"=>$n));
}else{
    echo json_encode(array("valido"=>"error","n"=>$n));
}



