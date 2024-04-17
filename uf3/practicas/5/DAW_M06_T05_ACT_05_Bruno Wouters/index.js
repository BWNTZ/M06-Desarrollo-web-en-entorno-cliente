function Nombre() {
    var nombre = document.getElementById("nombre").value;

    let nomLength = nombre.length;

        if (nomLength<3) {
            document.getElementById("nombreValido").style.color = '#FF0000';
            document.getElementById("nombreValido").innerHTML = "El nombre debe contener un mínimo de 3 letras";
        
        } else if (nomLength>10){
            document.getElementById("nombreValido").style.color = '#FF0000';
            document.getElementById("nombreValido").innerHTML = "El nombre debe contener un máximo de 10 letras";
        }
        else {
            document.getElementById("nombreValido").style.color = '#008000';
            document.getElementById("nombreValido").innerHTML = "Nombre válido";
        }

    }

function Email() {
    var email = document.getElementById("email").value;

    let pattern=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    
    let result = pattern.test(email);

    if (result == true) {
        document.getElementById("emailValido").innerHTML = "Email válido";
        document.getElementById("emailValido").style.color = '#008000';
    
    } else if(result == false) {
        document.getElementById("emailValido").innerHTML = "Email inválido";
        document.getElementById("emailValido").style.color = '#FF0000';
    }
}

function Telefono() {
    var telefono = document.getElementById("telefono").value;

    let telLength = telefono.length;

    if (telLength<1){
        document.getElementById("telefonoValido").style.color = '#FF0000';
        document.getElementById("telefonoValido").innerHTML = "Debe insertar un número de teléfono";
    }
    else if (telLength>=1 && telLength<9){
        document.getElementById("telefonoValido").style.color = '#FF0000';
        document.getElementById("telefonoValido").innerHTML = "telefono INVÁLIDO, debe contener 9 números";
    }
    
    else if(telLength>=10){
        document.getElementById("telefonoValido").style.color = '#FF0000';
        document.getElementById("telefonoValido").innerHTML = "El telefono no puede superar una longitud de 9 números";
    }
    else if(telLength=9) {
        document.getElementById("telefonoValido").style.color = '#008000';
        document.getElementById("telefonoValido").innerHTML = "telefono VÁLIDO"; 
    } 
}

function Password() {
    var password = document.getElementById("password").value;

    let passwordLength = password.length;

    if (passwordLength<4) {
        document.getElementById("passwordValido").style.color = '#FF0000';
        document.getElementById("passwordValido").innerHTML = "La contraseña es INVÁLIDA, debe contener un mínimo de 4 carácteres";
    
    } else if (passwordLength>10){
        document.getElementById("passwordValido").style.color = '#FF0000';
        document.getElementById("passwordValido").innerHTML = "La contraseña es INVÁLIDA, debe contener un máximo de 10 carácteres";
    }
    else {document.getElementById("passwordValido").style.color = '#008000';
        document.getElementById("passwordValido").innerHTML = "Contraseña VÁLIDA";
    }
}

function repeatPassword() {
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;

   if (repeatPassword!==password){
        document.getElementById("repeatPasswordValido").style.color = '#FF0000';
        document.getElementById("repeatPasswordValido").innerHTML = "Contraseña INVÁLIDA y no coincide a la escrita anteriormente";
    }
    else if(repeatPassword==password) {
        document.getElementById("repeatPasswordValido").style.color = '#008000';
        document.getElementById("repeatPasswordValido").innerHTML = "La contraseña es VÁLIDA";
    }
}


function Fecha() {
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
        dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
        mes='0'+mes //agrega cero si el menor de 10

    var fechavalida = new Date(document.getElementById("fecha").value);
    var fechavalidaMes = fechavalida.getMonth()+1; //obteniendo mes puesto por el usuario
    var fechavalidaDia = fechavalida.getDate(); //obteniendo dia puesto por el usuario
    var fechavalidaAno = fechavalida.getFullYear(); //obteniendo año puesto por el usuario

    if(fechavalidaDia<10)
        fechavalidaDia='0'+fechavalidaDia; //agrega cero si el menor de 10
    if(fechavalidaMes<10)
        fechavalidaMes='0'+fechavalidaMes //agrega cero si el menor de 10
    if (fechavalidaAno>ano) {   //error si el año es mayor al actual
        document.getElementById("fechaValida").style.color = '#FF0000';
        document.getElementById("fechaValida").innerHTML = "Fecha INVÁLIDA, el año debe ser igual o anterior al actual";
    }
    else if (fechavalidaAno==ano && fechavalidaMes>mes){   //error si el mes es mayor al actual
        document.getElementById("fechaValida").style.color = '#FF0000';
        document.getElementById("fechaValida").innerHTML = "Fecha INVÁLIDA, el mes debe ser igual o anterior al actual";
    }
    else if (fechavalidaAno==ano && fechavalidaMes==mes && fechavalidaDia>dia){   //error si el día es mayor al actual
        document.getElementById("fechaValida").style.color = '#FF0000';
        document.getElementById("fechaValida").innerHTML = "Fecha INVÁLIDA, el día debe ser igual o anterior al actual";
    }  
    else {   
        document.getElementById("fechaValida").style.color = '#008000';
        document.getElementById("fechaValida").innerHTML = "Fecha correcta, "+fechavalidaDia+"/"+fechavalidaMes+"/"+fechavalidaAno;
    }
}


function GeneroMusical() {
    var musica = document.getElementById("migeneroMusical").value;
    document.getElementById("generoMusical").style.color = '#0fd4b9';
    document.getElementById("generoMusical").innerHTML = "Seleccionaste: " + musica.toUpperCase();
  }


function enviarFormulario(){

    window.alert("Formulario enviado correctamente.");

}







