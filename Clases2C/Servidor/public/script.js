
var xhr = new XMLHttpRequest();
window.addEventListener('load', () => {
    document.getElementById("btnTraer").addEventListener('click', traerPersonas);
    document.getElementById("btnAltaPersona").addEventListener('click',abrirFormulario);
    document.getElementById("btnGuardar").addEventListener('click',altaPersona);
});

function crearTabla(array) {
    debugger;
    var tabla = document.createElement('table');
    tabla.setAttribute('class','tabla');
    let cabecera = document.createElement('tr');
 
    for (atributo in array[0]) {
        let th = document.createElement('th');
        th.textContent = atributo;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for (var i in array) {
        var fila = document.createElement('tr');
        var obj = array[i];
        for (var j in obj) {
            var celda = document.createElement('td');
            var dato = document.createTextNode(obj[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);
        }
        tabla.appendChild(fila);

       celda.addEventListener('dbclick',abrirFormulario);

    }
    return tabla;

}

function abrirFormulario()
{
    debugger;
    var form = document.getElementById('divCargarPersona');
    if(form.hidden)
        form.hidden = false;
    else
        form.hidden = true;
}

function traerPersonas() {

    xhr.onreadystatechange = callback;
    xhr.open('GET','http://localhost:3000/traerPersonas',true);
    xhr.send();

}

function callback() {
    let spin = document.getElementById('spinner');
    let div = document.getElementById('info');
    if (xhr.readyState == 4) {
        if (xhr.status == 200) {
          
            let lista = JSON.parse(xhr.responseText);
            div.appendChild(crearTabla(lista));
            spin.hidden = true;
        }
        else
        {
            console.log("Error " + xhr.status + "--" + xhr.statusText);    
        }
    }
    else
    {
      spin.hidden = false;
    }

}



function altaPersona(e) {
    debugger;
    var form = document.getElementById('divCargarPersona');
    form.hidden = false;
    e.preventDefault();
    let persona = traerDatosDelForm();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            //console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.open('POST', 'http://localhost:3000/altaPersona', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));
}

function traerDatosDelForm() {
    debugger;
    let first_name = document.getElementById('txtNombre').value;
    let last_name = document.getElementById('txtApellido').value;
    let email = document.getElementById('txtEmail').value;
    let male = document.getElementById('rdoMale');
    let female = document.getElementById('rdoFemale');
    let gender = '';
    if(male.checked)
        gender = male.value;
    else
        gender = female.value;
    validarDatos(first_name,last_name,email,gender);
    var obj = new Persona(first_name,last_name,email,gender);
    return obj;

}

function validarDatos(nombre,apellido,email,genero)
{
   if(nombre == "" || nombre == undefined || nombre == null || nombre == "null")
     alert("Debe ingresar un nombre");

}

function bajaPersona()
{

    xhr.onreadystatechange =  callbackEliminar;
    xhr.open('DELETE', 'http://localhost:3000/bajaPersona', true);
    xhr.setRequestHeader('Content-type', 'application/json');
   // xhr.send(JSON.stringify(persona));
}

function callbackEliminar()
{
    if (xhr.readyState == 4 && xhr.status == 200) {
        
    }
}
