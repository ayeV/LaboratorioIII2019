var xml = new XMLHttpRequest();
window.addEventListener('load', loadData);

function loadData() {
    if (localStorage.getItem("personas") == null) {
        xml.onreadystatechange = callback;
        xml.open("GET", "http://localhost:3000/personas");
        xml.send();
    } else {
        loadList();
    }
    var btnCerrar = document.getElementById("btnCerrar").addEventListener('click',cerrar);
}

function callback() {
    if (xml.readyState === 4) {
        if (xml.status === 200) {
            localStorage.setItem("personas", xml.response);
            loadList();
        } else {
            alert("Error del servidor" + xml.status);
        }
    }
}

function loadList() {
    var personas = JSON.parse(localStorage.getItem("personas"));
    for (var i = 0; i < personas.length; i++) {
        tbody = document.getElementById("tbody");
        var tr = document.createElement("tr");

        tr.setAttribute("id", personas[i]["id"]);
        var columns = Object.keys(personas[i]);
        for (var j = 1; j < columns.length; j++) {
            var cel = document.createElement("td");
            cel.setAttribute("name", columns[j]);
            var text = document.createTextNode(personas[i][columns[j]]);
            cel.appendChild(text);
            tr.appendChild(cel);
        }
        tr.addEventListener("dblclick", abrirFormulario);
        tbody.appendChild(tr);
    }
}

function abrirFormulario(event) {
    //parentElement devuelve el padre desde donde se realizo el evento que es dbclick
    //el padre del td es el tr

    document.getElementById("formulario").hidden = false;
    
    var tr = event.target.parentElement;
    var tds = tr.childNodes;
    var persona = {};
    for (let i = 0; i < tds.length; i++) {
        //Obtengo los datos de la persona que me vienen de la fila seleccionada
       persona[tds[i].getAttribute("name")] = tds[i].innerHTML;

    }

    document.getElementById("idPersona").value = persona["id"];
    document.getElementById("inputNombre").value = persona["nombre"];
    document.getElementById("inputApellido").value = persona["apellido"];
    document.getElementById("inputTelefono").value = persona["telefono"];
    document.getElementById("inputFecha").value = persona["fecha"];

}

function cerrar(){
    document.getElementById("formulario").hidden = true;
}

