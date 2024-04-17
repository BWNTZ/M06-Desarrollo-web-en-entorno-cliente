/**
 * 2.	Al clicar en el botón GUARDAR COMBINACION envía una petición al servidor con el API 
 * XMLHttpRequest pasando la combinación formada por los 4 números escritos en los inputs. 
 */
function saveKey() {
    //valor escrito dentro los inputs
    let keyValue = document.getElementById("input_number1").value
                    +document.getElementById("input_number2").value
                    +document.getElementById("input_number3").value
                    +document.getElementById("input_number4").value;

    //Declarar el objeto XMLHttpRequest
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "saveKey.php?key="+keyValue, true);
    //Establecer el HEADER de la petición
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //asignar una función encargada de gestionar cada cambio
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            console.log("respuesta recibida!");
            if (xmlHttp.status == 200) {
                //obtenemos el array clientes  en nomenclatura JSON
                let textoRespuesta = xmlHttp.responseText;

                //la transformamos a array parseando el JSON
                let infoPalabra = JSON.parse(textoRespuesta);
                let valido = infoPalabra.valido;
                //d.	Ambos mensajes se muestran al usuario.
                document.getElementById("infoSaveKey").innerHTML = valido;
            }
        }
    }
    xmlHttp.send();
}

/**
 * 3.	Escribir un valor en un input del apartado GUARDAR COMBINACION envía una petición al servidor 
 * con el API XMLHttpRequest pasando como mínimo el valor escrito. 
 * @param {*} numInput 
 */
function checkValueKey(numInput) {
    //valor escrito dentro el input
    let digit_key = document.getElementById("input_number"+numInput).value;
    //Declarar el objeto XMLHttpRequest
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", "checkValueKey.php?digit_key="+digit_key+"&n="+numInput, true);
    //Establecer el HEADER de la petición
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //asignar una función encargada de gestionar cada cambio
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState == 4) {
            console.log("respuesta recibida!");
            if (xmlHttp.status == 200) {
                //obtenemos el array clientes  en nomenclatura JSON
                let textoRespuesta = xmlHttp.responseText;

                //la transformamos a array parseando el JSON
                let infoPalabra = JSON.parse(textoRespuesta);
                let valido = infoPalabra.valido;
                let numInput = infoPalabra.n;
                //d.	Ambos mensajes se muestran al usuario.
                document.getElementById("input_number"+numInput).nextElementSibling.innerHTML = valido;
            }
        }
    }
    xmlHttp.send();
}

/**5.	Escribir un valor en un input del apartado GUARDAR COMBINACION envía una petición al servidor
 *  con el API Fetch pasando como mínimo el valor escrito. 
 * 
 * @param {*} numInput 
 */
function compareValueKey(numInput) {
    //obtenemos los valores a enviar al servidor
    let digit_key = document.getElementById("input_compare"+numInput).value;

    //fetch retorna un obeto del tipo Promise. 

    let configFetch = {
        method: "POST",
        body: "digit_key=" + digit_key+"&numInput=" + numInput,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    let promesa = fetch("compareValueKey.php", configFetch);
    promesa.then(function (response) {
        //la propiedad ok retorna true si se ha realizado correctamente
        if (response.ok) {
            console.log("REspuesta OK");
        }
        response.json().then(
            function (objetoJSON) {
                let valido = objetoJSON.valido;
                let numInput = objetoJSON.n;
                //d.	Ambos mensajes se muestran al usuario.
                document.getElementById("input_compare"+numInput).nextElementSibling.innerHTML = valido;         
            });
    }).catch(function (error) {
        console.log('Error con la petición:' + error.message);
    });
}


/**
 * 4.	Al clicar en el botón CHECK COMBINACION envía una petición al servidor con el API Fetch pasando la 
 * combinación formada por los 4 números escritos en los inputs. 
 * @param {*} numInput 
 */
function compareKey(numInput) {
 //valor escrito dentro los inputs
 let send_key = document.getElementById("input_compare1").value
 +document.getElementById("input_compare2").value
 +document.getElementById("input_compare3").value
 +document.getElementById("input_compare4").value;

    //fetch retorna un obeto del tipo Promise. 

    let configFetch = {
        method: "POST",
        body: "send_key=" + send_key,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    };
    let promesa = fetch("compareKey.php", configFetch);
    promesa.then(function (response) {
        //la propiedad ok retorna true si se ha realizado correctamente
        if (response.ok) {
            console.log("REspuesta OK");
        }
        response.json().then(
            function (objetoJSON) {
                let valido = objetoJSON.valido;
                //d.	Ambos mensajes se muestran al usuario.
                document.getElementById("infoCompareKey").innerHTML = valido;         
            });
    }).catch(function (error) {
        console.log('Error con la petición:' + error.message);
    });
}