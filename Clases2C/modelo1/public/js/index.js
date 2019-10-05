var xhr = new XMLHttpRequest();
window.addEventListener('load',traerDatos);
window.addEventListener('load',manejadorEventos);


function manejadorEventos()
{
    document.getElementById('btnGuardar').addEventListener('click',guardarAnuncio);
 //   document.getElementById('btnEliminar').addEventListener('click',eliminar);
   // document.getElementById('btnCancelar').addEventListener('click',cancelar);
}

function traerDatos()
{
    xhr.onreadystatechange = callback;
    xhr.open('GET','http://localhost:3000/traerAnuncios',true);
    xhr.send();
}

function callback()
{
    var div = document.getElementById('divTabla');
    var spin = document.getElementById('spin');
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            var array = JSON.parse(xhr.responseText);
            div.appendChild(crearTabla(array.data));
            spin.hidden = true;
            debugger;
            let tabla = div.lastChild;
            for(var i = 0;i<tabla.childNodes.length;i++)
            {
                tabla.childNodes[i].addEventListener('click',cargarForm);
            }
        }

    }
    else
        spin.hidden = false;
}

function guardarAnuncio()
{
    //e.preventDefault();
    let data = traerDatosDelForm();
    xhr.onreadystatechange = callbackGuardar;
    xhr.open('POST','http://localhost:3000/altaAnuncio',true);
    //este type va cuando se manda el id baja y modificar
    //xhr.setRequestHeader('Content-type','application/x-wwww-form-urlencoded');
    xhr.setRequestHeader('Content-type','application/json');
    if(data != null)
        xhr.send(JSON.stringify(data));
}

function traerDatosDelForm()
{
    let titulo = document.getElementById('txtTitulo').value;
    let descripcion = document.getElementById('txtDescripcion').value;
    let transaccion = document.getElementById('txtTransaccion').value;
    let precio = document.getElementById('txtPrecio').value;
    let baños = document.getElementById('txtCantBaños').value;
    let estacionamientos = document.getElementById('txtCantEstacionamiento').value;
    let dormitorios = document.getElementById('txtCantDormitorio').value;

    var obj = null;
    if(titulo != null && descripcion != null && transaccion != null && precio != null && estacionamientos != null && dormitorios!= null)
    {
        obj = new Anuncio(titulo,transaccion,descripcion,precio,baños,estacionamientos,dormitorios);
    }

    return obj;



}

function refrescarTabla()
{
    let div = document.getElementById('divTabla');
    div.innerHTML = "";
}

function callbackGuardar()
{
    if(xhr.readyState == 4)
    {
        if(xhr.status == 200)
        {
            refrescarTabla();
            traerDatos();
        }
    }
}

function cargarForm(event)
{
    debugger;
    var tr = event.target.parentElement;
    var tds = tr.childNodes;
    var anuncio = {};
    for (let i = 0; i < tds.length; i++) {
        //Obtengo los datos de la persona que me vienen de la fila seleccionada
        anuncio[tds[i].getAttribute("name")] = tds[i].innerHTML;

    }

    document.getElementById("txtTitulo").value = anuncio["titulo"];
    document.getElementById("txtDescripcion").value = anuncio["descripcion"];
    document.getElementById("txtTransaccion").value = anuncio["telefono"];
    document.getElementById("txtPrecio").value = anuncio["precio"];
    document.getElementById("txtCantBaños").value = anuncio["num_wc"];
    document.getElementById("txtCantEstacionamiento").value = anuncio["num_estacionamiento"];
    document.getElementById("txtCantDormitorio").value = anuncio["num_dormitorio"];
}