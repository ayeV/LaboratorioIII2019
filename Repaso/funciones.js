//Shift+alt+f dar formato al documento

window.onload = events;
httpReq = new XMLHttpRequest();
function events() {
    var btnLoad = document.getElementById("btnLoad").addEventListener("click", loadPerson);
    var btnShow = document.getElementById("mostrar").addEventListener("click", showAddPerson);
    pedirPersonasGet();
}


function callback() {
    if (httpReq.readyState == 4) {
        if (httpReq.status == 200) {
            var personas = JSON.parse(httpReq.response);
            httpReq.send(JSON.stringify(personas));
            loadList();

        }

    }
}

function loadList() {
    var personas = JSON.parse(localStorage.getItem("personas"));

    var count = Object.keys(personas).length;
    var table = "";
    for (i = 0; i < count; i++) {
        table += "<tr><td>" + personas[i].nombre + "</td>\
        <td>" + personas[i].apellido + "</td>\
        <td>" + personas[i].telefono + "</td>\
        <td>" + personas[i].fecha + "</td>\
        <td><a onclick='deletePerson("+ i + ",event)' href='#'>Borrar</a></td></tr>";

    }
    document.getElementById("tablaResultados").innerHTML = table;
}



function ajax(metodo, url, parametros, tipo) {
    httpReq.onreadystatechange = callback;

    if (metodo === "GET") {

        httpReq.open("GET", url, tipo); //abre la conexión con el servidor
        httpReq.send();
    }
    else {
        httpReq.open("POST", url, tipo); //abre la conexión con el servidor
        httpReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //string
        httpReq.send(parametros);
    }
}

function pedirPersonasGet() {
    if (localStorage.getItem("personas") === null) {
        ajax("GET", "http://localhost:3000/personas", "", true);
    }
    else {
        loadList();
    }
}


function showAddPerson() {

    var claseActual = document.getElementById("divCargarPersona").className;

    if (claseActual == "cargarPersona cargarPersonaOculto") {
        document.getElementById("divCargarPersona").className = "cargarPersona cargarPersonaVisible";
    }
    else {
        document.getElementById("divCargarPersona").className = "cargarPersona cargarPersonaOculto";
    }
}


function loadPerson() {
    var personas = JSON.parse(localStorage.getItem("personas"));
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var fecha = document.getElementById("fecha").value;
    if (nombre == "" || apellido == "" || telefono == "" || fecha == "") {
        alert("Ingrese todos los campos");
        return;
    }
    else {
        var personaStr = '{"nombre":"' + nombre + '","apellido":"' + apellido + '","telefono":"' + telefono + '","fecha":"' + fecha + '"}'
        var personaObj = JSON.parse(personaStr);
        personas.push(personaObj);
        localStorage.setItem("personas",JSON.stringify(personas));
        loadList();
    }

}


function deletePerson(indicePersona,event){
    event.preventDefault();
    var personas = JSON.parse(localStorage.getItem("personas"));
    personas.splice(indicePersona,1);
    localStorage.setItem("personas",JSON.stringify(personas));
    loadList();
}