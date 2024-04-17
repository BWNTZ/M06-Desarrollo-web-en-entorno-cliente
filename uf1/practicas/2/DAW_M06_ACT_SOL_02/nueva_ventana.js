
/**6 c.	al clicar sobre el 1r botón se cargue en la ventana la URL almacenada en la cookie.
 * 
 */
function cargaUrl(){
    let urlcookie = document.cookie;
    let posicion = urlcookie.lastIndexOf("=");
    let url = urlcookie.substring(posicion + 1, urlcookie.length);
    location.assign(url)
}