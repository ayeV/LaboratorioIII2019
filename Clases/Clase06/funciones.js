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
           
            //httpReq.send(JSON.stringify(personas));
            loadList();

        }

    }
}

function loadList() {
    //var personas = JSON.parse(localStorage.getItem("personas"));
    var personas = JSON.parse(httpReq.response);
    var count =personas.length;

    var table = "";
  /*  for (i = 0; i < count; i++) {
        table += "<tr><td>" + personas[i].nombre + "</td>\
        <td>" + personas[i].apellido + "</td>\
        <td>" + personas[i].telefono + "</td>\
        <td>" + personas[i].fecha + "</td>\
        <td><a onclick='deletePerson("+ i + ",event)' href='#'>Borrar</a></td></tr>";

    }
    document.getElementById("tablaResultados").innerHTML = table;*/
   var tbody = document.getElementById("tablaResultados");
   for(var i=0;i<count;i++)
   {
  
    var nTr=document.createElement("tr");

    var nTdNombre = document.createElement("td");
    var nTdApellido = document.createElement("td");
    var nTdTelefono = document.createElement("td");
    var nTdFecha = document.createElement("td");
    var nTdAction = document.createElement("td");
    var actionDelete = document.createElement("a");
    var txtDelete = texto=document.createTextNode("borrar");
    nTr.appendChild(nTdNombre);
    nTr.appendChild(nTdApellido);
    nTr.appendChild(nTdTelefono);
    nTr.appendChild(nTdFecha);
    nTr.appendChild(nTdAction);
    var txtNombre = texto=document.createTextNode(personas[i].nombre);
    var txtApellido = texto=document.createTextNode(personas[i].apellido);
    var txtTelefono = texto=document.createTextNode(personas[i].telefono);
    var txtFecha = texto=document.createTextNode(personas[i].fecha);
    nTdNombre.appendChild(txtNombre);
    nTdApellido.appendChild(txtApellido);
    nTdFecha.appendChild(txtFecha);
    nTdTelefono.appendChild(txtTelefono);
    nTdAction.appendChild(actionDelete);
    actionDelete.appendChild(txtDelete);
    actionDelete.setAttribute("href",'');
    actionDelete.addEventListener("click",borrar);    
    tbody.appendChild(nTr);

   }
  
    
}   

function loadList2(){
    var personas = JSON.parse(httpReq.response);
    var count = personas.length;

    
 
   var tbody = document.getElementById("tablaResultados");
   for(var i=0;i<count;i++)
   {
    var nTr=document.createElement("tr");
    var columns = Object.keys(personas[i]);
    var obj = personas[i];
    for(var j= 0 ;j<columns.length;j++){
        var cel = document.createElement("td");
        var text = document.createTextNode(obj[columns[j]]);
        cel.appendChild(text);
        nTr.appendChild(cel);

    }
    var cel = document.createElement("td");
    var link = document.createTextNode("a");
    var text = document.createTextNode("borrar");
    link.setAttribute("href","#");
    link.addEventListener("click", deletePerson);
    cel.appendChild(link);
    nTr.appendChild(cel);
    link.appendChild(text);

}
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
   // debugger;
    event.preventDefault();
  //  var personas = JSON.parse(localStorage.getItem("personas"));
   var personas = JSON.parse(httpReq.response);
    personas.splice(indicePersona,1);
    //localStorage.setItem("personas",JSON.stringify(personas));
    loadList();
}


function borrar(event){
event.preventDefault();
 var targ = event.target;
//target devuelve el compponente que lanzo ese evento
var tr = targ.parentNode.parentNode;
var body= tr.parentNode;
body.removeChild(tr);
}