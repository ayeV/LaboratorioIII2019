
//Shift+alt+f dar formato al documento

window.onload = events;
/*$(document).ready(function(){
var btnDelete = document.getElementById("btnDelete").addEventListener("click", eliminar);
   var btnEdit = document.getElementById("btnEdit").addEventListener("click", modificar);
    var btnCerrar = document.getElementById("btnCerrar").addEventListener("click", showAddPerson);
    pedirMateriasGet();
}*/
httpReq = new XMLHttpRequest();
function events() {
    var btnDelete = document.getElementById("btnDelete").addEventListener("click", eliminar);
   var btnEdit = document.getElementById("btnEdit").addEventListener("click", modificar);
    var btnCerrar = document.getElementById("btnCerrar").addEventListener("click", showAddPerson);
    pedirMateriasGet();



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
    // var materias = JSON.parse(localStorage.getItem("materias")); //esto en mi casa funciona, en la fac no.
    var materias = JSON.parse(httpReq.response); //en mi casa no funciona, en la facultad si
    var count = materias.length;

    var tbody = document.getElementById("tablaResultados");

    for (var i = 0; i < count; i++) {
        var nTr = document.createElement("tr");

        var nTdNombre = document.createElement("td");
        var nTdCuatrimestre = document.createElement("td");
        var nTdFecha = document.createElement("td");
        var nTdTurno = document.createElement("td");
        var nTdID = document.createElement("td");
        nTdID.setAttribute("style","display:none");
        nTr.setAttribute("id",materias[i].id);
        nTr.appendChild(nTdNombre);
        nTr.appendChild(nTdCuatrimestre);
        nTr.appendChild(nTdFecha);
        nTr.appendChild(nTdTurno);
        nTr.appendChild(nTdID);
        var txtNombre = texto = document.createTextNode(materias[i].nombre);
        var txtCuatri = texto = document.createTextNode(materias[i].cuatrimestre);
        var txtTurno = texto = document.createTextNode(materias[i].turno);
        var txtFecha = texto = document.createTextNode(materias[i].fechaFinal);
        var id = texto = document.createTextNode(materias[i].id);
        nTdNombre.appendChild(txtNombre);
        nTdCuatrimestre.appendChild(txtCuatri);
        nTdFecha.appendChild(txtFecha);
        nTdTurno.appendChild(txtTurno);
        nTdID.appendChild(id);
      
        nTr.addEventListener("dblclick", function (e) {

            document.getElementById("nombre").value = e.currentTarget.cells[0].innerText;
            var selector = document.getElementById("cuatrimestre");
            selector.selectedIndex = e.currentTarget.cells[1].innerText - 1;


            if (e.currentTarget.cells[3].innerText == "Noche") {
                document.getElementById("turnon").checked = true;
                document.getElementById("turnom").checked = false;
            }
            else {
                document.getElementById("turnom").checked = true;
                document.getElementById("turnon").checked = false;

            }
            // document.getElementById("fechaFinal").value = e.currentTarget.cells[2].innerText;
           var format =  e.currentTarget.cells[2].innerText.split("/");
            format = format[1] + "-" + format[0] + "-" + format[2]; 
            var date = new Date( format);
            
            
            document.getElementById("fecha").value =date.toISOString().slice(0,10);
            document.getElementById("id").value = e.currentTarget.cells[4].innerText
            document.getElementById("divCargarPersona").className = "cargarPersona cargarPersonaVisible";
        }
        );
        tbody.appendChild(nTr);

    }


}

function eliminar() {
    var idMateria = document.getElementById("id").value;
    var obj = { id: idMateria }
     salida = JSON.stringify(obj);
    httpReq.open("POST", "http://localhost:3000/eliminar", true);
    httpReq.setRequestHeader("Content-type", "application/json");
    httpReq.onreadystatechange = callbackEliminar;
    httpReq.send(salida);


}

function callbackEliminar()
{
    if (httpReq.readyState == 4) {
        
        if (httpReq.status == 200 && JSON.parse(httpReq.response)["type"] == "ok") {
            debugger;
            var idMateria = document.getElementById("id").value;
            var row =  document.getElementById(idMateria);
            row.parentNode.removeChild(row);

        }

    }
}

function modificar()
{
    debugger;
    var idMateria = document.getElementById("id").value;
    var nombre = document.getElementById("nombre").value;
    var cuatrimestre = document.getElementById("cuatrimestre").value;
    var turno;
    if( document.getElementById("turnon").checked = true)
    {
        turno = document.getElementById("turnon").value;
    }
    else
    {
       turno =  document.getElementById("turnom").value;
    }
   
    var format =  document.getElementById("fecha").value.split("-");
    format = format[2] + "/" + format[1] + "/" + format[0]; 
    var obj = { id: idMateria,nombre: nombre,cuatrimestre: cuatrimestre,turno: turno, fechaFinal: format};
     salida = JSON.stringify(obj);
    httpReq.open("POST", "http://localhost:3000/editar", true);
    httpReq.setRequestHeader("Content-type", "application/json");
    httpReq.onreadystatechange = callbackModificar;
    httpReq.send(salida);
    
}

function callbackModificar()
{
    if (httpReq.readyState == 4) {
        
        if (httpReq.status == 200 && JSON.parse(httpReq.response)["type"] == "ok") {
            debugger;
            var idMateria = document.getElementById("id").value;
            var row =  document.getElementById(idMateria);
            var tds = row.childNodes;
            tds[0].innerText = document.getElementById("nombre").value;
            tds[1].innerText = document.getElementById("cuatrimestre").value;
            var format =  document.getElementById("fecha").value.split("-");
            format = format[2] + "/" + format[1] + "/" + format[0]; 
            tds[2].innerText = format;
           if(document.getElementById("turnom").checked == true)
            {
                tds[3].innerText = document.getElementById("turnom").value;
            }
           else
           {  
               tds[3].innerText = document.getElementById("turnon").value
        

           }
            
        }

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

function pedirMateriasGet() {

        ajax("GET", "http://localhost:3000/materias", "", true);
    
   
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


function loadMateria() {
    var materias = JSON.parse(localStorage.getItem("materias"));
    var nombre = document.getElementById("nombre").value;
    var cuatri = document.getElementById("cuatrimestre");
    var strCuatri = cuatri.options[cuatri.selectedIndex].value;
    var radios = document.getElementsByName('turno');
    var selectedOption;
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            selectedOption = radios[i].checked.value;
            break;
        }
    }

    var fecha = document.getElementById("fecha").value;
    var materiaStr = '{"nombre":"' + nombre + '","cuatrimestre":"' + strCuatri + '","turno":"' + selectedOption + '","fecha":"' + fecha + '"}'
    var materiaObj = JSON.parse(materiaStr);
    materias.push(materiaObj);
    localStorage.setItem("materias", JSON.stringify(materias));


}








