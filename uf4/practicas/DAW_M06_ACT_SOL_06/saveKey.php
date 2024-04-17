<?php 
session_start();
/**2
 * a.	El servidor ha de comprobar que sean efectivamente 4 números de un dígito y positivo. 
*b.	Si la combinación es válida se guarda en una (o varias) variables de sesión y retorna al cliente un mensaje indicando que se ha guardado el valor. 
*c.	Si la combinación no es válida se retorna al cliente un mensaje indicando que no se ha guardado el valor porque la combinación no es válida. 
 */

$key=$_GET["key"];
//miramos que sea un valor numerico de longitud 4
if(is_numeric($key) && strlen($key)==4 ){
    echo json_encode(array("valido"=>"valor guardado"));
    $_SESSION["key"]=$key;
}else{
    echo json_encode(array("valido"=>"error, numero invalido"));
}


