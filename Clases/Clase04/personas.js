//levantado la api de persona traer todas las personas y convertir a json
//al ejecutar el servidor me tienen que aparecer las personas en la grilla
var httpReq = new XMLHttpRequest();


function callback()
{
    if(httpReq.readyState ==4)
    {
        if(httpReq.status ==200)
        {
           console.log(httpReq.responseText);
           var personas = JSON.parse(httpReq.responseText);
           localStorage.setItem("personas",JSON.stringify(personas));
           cargarLista();
        }
        else
            console.log("Error en el servidor" + httpReq.status);
    }
}

function mostrarAgregarPersona()
{
    var claseActual = document.getElementById("divCargarPersona").className;
    
    if(claseActual == "cargarPersona cargarPersonaOculto" )
    {
        document.getElementById("divCargarPersona").className = "cargarPersona cargarPersonaVisible";
    }
    else
    {
        document.getElementById("divCargarPersona").className = "cargarPersona cargarPersonaOculto";
    }
}


function cargarLista()
{
    var personas = JSON.parse(localStorage.getItem("personas"));
    var count = Object.keys(personas).length;
    var tabla = "";
    for(i = 0; i<count; i++)
    {
        tabla += "<tr><td>" + personas[i].nombre + "</td>\
        <td>" + personas[i].apellido + "</td>\
        <td>" + personas[i].telefono + "</td>\
        <td>" + personas[i].fecha + "</td>\
        <td><a onclick='borrarPersona("+i+",event)' href='#'>Borrar</a></td></tr>";               

    }

    document.getElementById("tablaResultados").innerHTML = tabla;

}

function cargarPersona()
{
    var personas = JSON.parse(localStorage.getItem("personas"));
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var telefono = document.getElementById("telefono").value;
    var fecha = document.getElementById("fecha").value;
if(nombre == "" || apellido =="" || telefono ==""||fecha == "")
{
    alert("Ingrese todos los campos");
    return;
}
else
{
    var personaStr = '{"nombre":"'+nombre+'","apellido":"'+apellido+'","telefono":"'+telefono+'","fecha":"'+fecha+'"}'
    var personaObj = JSON.parse(personaStr);
    personas.push(personaObj);
    localStorage.setItem("personas",JSON.stringify(personas));
    cargarLista();
   // cerrar();
}
    
    
}

function borrarPersona(indicePersona,event){
    event.preventDefault();
    var personas = JSON.parse(localStorage.getItem("personas"));
    personas.splice(indicePersona,1);
    localStorage.setItem("personas",JSON.stringify(personas));
    cargarLista();
}

function ajax(metodo,url,parametros,tipo){  
    httpReq.onreadystatechange = callBack;
    if(metodo === "GET"){
        
        httpReq.open("GET", url, tipo); //abre la conexión con el servidor
        httpReq.send();
    }
    else{
        httpReq.open("POST", url, tipo); //abre la conexión con el servidor
        //httpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); //string
        httpReq.setRequestHeader("Content-Type","application/json"); //string
                
        httpReq.send(parametros);
    }
}  

function pedirPersonasGet(){
    if (localStorage.getItem("personas") === null) {
        ajax("GET","http://localhost:3000/personas","",true);
    }
    else{
        cargarLista();
    }    
}

function cerrar(){
    var cnt= document.getElementById("divCargarPersona").className = "cargarPersona cargarPersonaOculto";
  
}

window.onload = pedirPersonasGet;
