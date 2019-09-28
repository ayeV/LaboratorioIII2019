
var xhr = new XMLHttpRequest();
window.addEventListener('load', () => {
    document.getElementById("btnTraer").addEventListener('click', traerPersonas);
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

function abrirFormulario ()
{
    var form = document.getElementById('divCargarPersona');
    form.hidden = false;
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
    var form = document.getElementById('divCargarPersona');
    form.hidden = false;
    e.preventDefault();
    let persona = traerDatosDelForm();

    let xhr = new XMLHttpRequest();
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
    let male = document.getElementById('rdoMale').checked;
    let female = document.getElementById('rdoFemale').checked;
    let gender = '';
    if(male)
        gender = male.value;
    else
        gender = female.value;

    var obj = new Persona(first_name,last_name,email,gender);
    return obj;

}