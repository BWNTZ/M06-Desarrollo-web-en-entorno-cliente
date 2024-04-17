
function RedireccionURL(direccion) {

    var misCookies = document.cookie;
    var listaCookies = misCookies.split(";");

    for(i in listaCookies){
        var localiza =listaCookies[i].search(direccion);
        if (localiza > -1){ miCookie=listaCookies[i]}
    }

    var anyadir = miCookie.indexOf("=");
    var Valor = miCookie.substring(anyadir+1);

    return window.location.href = Valor;
}





