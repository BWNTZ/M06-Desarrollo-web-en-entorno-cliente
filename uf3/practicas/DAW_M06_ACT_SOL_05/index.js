/* VARIABLES */

let formulario = document.forms["form-main"];
let nombre = formulario["nombre"];
let mail = formulario["correo"];
let tel = formulario["telefono"];
let pass1 = formulario["pass1"];
let pass2 = formulario["pass2"];
let cal = formulario["calendario"];
let descr = formulario["descripcion"];
let enviar = formulario["enviar"];

let so = formulario["sisoper"]; //select
let music = formulario["musica"]; //checkbox
let musicgroup = document.getElementById("groupMusic");
let addMusic = document.getElementById("addMusic");
let addSo = document.getElementById("addSO");


let capcha;

/* AGREGAR CAMPOS */

addMusic.addEventListener("click", function (evt) {
    var newMusic = prompt('Escribe el género de música', '');
    crearCheckbox(newMusic);
});

addSo.addEventListener("click", function (evt) {
    var newSo = prompt('Escribe el Sistema Operativo', '');
    crearSysOp(newSo);
});

/* COMPROBACIONES */

nombre.addEventListener("input", nombrevali);



mail.addEventListener("input", mailvali);

tel.addEventListener("input", telefonoVali);

pass1.addEventListener("input", contrasenya1);

pass2.addEventListener("blur", contrasenya2);

cal.addEventListener("focusin", calendarvali);

so.addEventListener("click", sysopevali);


formulario.addEventListener("submit", function (evt) {
    descr.innerHTML = "";
    if (!sysopevali()) {
        descr.innerHTML += "Mínimo 2 sistemas operativos ";
        evt.preventDefault();
    }
    if (!musicvali()) {
        descr.innerHTML += "Mínimo 2 géneros musicales";
        evt.preventDefault();
    }


});

/* FUNCIONES DE LOS EVENTSLISTENERS */

function nombrevali() {
    nombre.setCustomValidity('');
    nombre.nextElementSibling.innerHTML="";
    if (nombre.reportValidity()) {
        nombre.nextElementSibling.innerHTML="OK";
    } else if (nombre.validity.tooShort) {
        nombre.setCustomValidity("Mínimo 3 letras");
        nombre.nextElementSibling.innerHTML="Mínimo 3 letras";
        return false;
    } else {
        nombre.setCustomValidity("Formato incorrecto");
        nombre.nextElementSibling.innerHTML="Formato incorrecto";
        return false;
    }
    return true;
}

function mailvali() {
    mail.setCustomValidity('');
    mail.nextElementSibling.innerHTML="";
    if (mail.reportValidity()) {
        mail.nextElementSibling.innerHTML="OK!";
    } else if (mail.validity.patternMismatch) {
        mail.setCustomValidity("Introduzca un formato de correo válido");
        mail.nextElementSibling.innerHTML="Introduzca un formato de correo válido";
        return false;
    } else {
        mail.setCustomValidity("Formato de correo incorrecto");
        mail.nextElementSibling.innerHTML="Formato de correo incorrecto";
        return false;
    }
    return true;
}
function telefonoVali() {
    tel.setCustomValidity('');
    tel.nextElementSibling.innerHTML="";
    if (tel.reportValidity()) {
        tel.nextElementSibling.innerHTML="OK!";
    } else if (tel.validity.patternMismatch) {
        tel.setCustomValidity("Introduzca un formato de teléfono correcto");
        tel.nextElementSibling.innerHTML="Introduzca un formato de teléfono correcto";
        return false;
    } else {
        tel.setCustomValidity("Formato de Telefono incorrecto");
        tel.nextElementSibling.innerHTML="Formato de Telefono incorrecto";
        return false;
    }
    return true;
}
function contrasenya1() {
    pass1.setCustomValidity('');
    pass1.nextElementSibling.innerHTML="";
    if (pass1.reportValidity()) {
        pass1.nextElementSibling.innerHTML="OK";
    } else if (pass1.validity.tooShort) {
        pass1.setCustomValidity("Mínimo 4 carácteres");
        pass1.nextElementSibling.innerHTML="Mínimo 4 carácteres";
        return false;
    } else {
        pass1.setCustomValidity("Formato de password incorrecto");
        pass1.nextElementSibling.innerHTML="Formato de password incorrecto";
        return false;
    }
    return true;
}
function contrasenya2() {
    pass2.setCustomValidity('');
    console.log(pass2.value);
    console.log(pass1.value);
    let x = document.getElementById("checkpass");
    let inppass2 = document.getElementById("pass2inp");
    if (!isEqual(pass1.value, pass2.value) && pass2.value !== '') {
        pass2.setCustomValidity("Contraseñas no coinciden");
        inppass2.style.borderColor = "red";
        inppass2.style.color = "black";
        x.innerHTML = "Error";
        x.style.color = "red";
    } else if (pass2.value === '') {
        console.log(pass2.value);
        inppass2.style.borderColor = "rgb(0, 134, 243)";
        inppass2.style.backgroundColor = "black";
        inppass2.style.color = "rgb(6, 255, 243)";
        x.innerHTML = "";
    } else {
        inppass2.style.borderColor = "green";
        inppass2.style.backgroundColor = "#03ff5c";
        inppass2.style.color = "black";
        x.innerHTML = "Correct";
        x.style.color = "green";
    }
}
function calendarvali() {
    cal.setCustomValidity('');
    if (checkCalendar()) {
        console.log("Data correcta");
    } else {
        cal.setCustomValidity("la data no puede ser superior al dia de hoy");
        cal.reportValidity();
        console.log("la data no puede ser superior al dia de hoy");
        return false;
    }
    return true;
}

function sysopevali() {
    let collection = so.selectedOptions;
    if (collection.length < 2) {
        return false;
    }
    return true;
}

function musicvali() {
    let musicas = 0;
    for (let k = 0; k < music.length; k++) {
        if (music[k].checked) {
            musicas++;
        }
    }
    if (musicas < 2) {
        return false;
    }
    return true;
}


/* FUNCTIONS COMPROBAR Y CREAR */
function isEqual(str1, str2) {
    return str1 === str2
}
function checkCalendar() {
    var data = document.getElementById('calendario').value;
    var myDate = new Date(data);
    var today = new Date();
    if (myDate > today) {
        return false;
    }
    return true;
}
function crearCheckbox(genero) {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("name", "musica");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("value", genero);
    let txtgenero = document.createElement("span");
    txtgenero.setAttribute("class", "px-2 color-white");
    txtgenero.innerHTML = genero;
    musicgroup.appendChild(checkbox);
    musicgroup.appendChild(txtgenero);

}

function crearSysOp(sistema) {
    let option = document.createElement("option");
    option.setAttribute("value", sistema);
    option.textContent = sistema;
    so.appendChild(option);
}
