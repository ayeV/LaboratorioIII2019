

window.addEventListener('load', manejadorEventos);

window.addEventListener('load', traerDatos);


function manejadorEventos() {
    document.getElementById('btnGuardar').addEventListener('click', guardarAnuncio);
    document.getElementById('btnEliminar').addEventListener('click',eventEliminar);
    document.getElementById('btnCancelar').addEventListener('click', cancelar);
}

function guardarAnuncio() {
    let data = traerDatosDelForm();
    guardar(data);
    reset();


}

function mostrarDatos(arr) {
    var div = document.getElementById('divTabla');
    var spin = document.getElementById('spin');
            //var array = JSON.parse(arr);
            spin.hidden = false;
            div.appendChild(crearTabla(arr));
            spin.hidden = true;
            debugger;
            let tabla = div.lastChild;
            for (var i = 0; i < tabla.childNodes.length; i++) {
                tabla.childNodes[i].addEventListener('click', cargarForm);
            }
}



function traerDatosDelForm() {
    let titulo = document.getElementById('txtTitulo').value;
    let descripcion = document.getElementById('txtDescripcion').value;
    let transaccion = document.getElementById('txtTransaccion').value;
    let precio = document.getElementById('txtPrecio').value;
    let baños = document.getElementById('txtCantBaños').value;
    let estacionamientos = document.getElementById('txtCantEstacionamiento').value;
    let dormitorios = document.getElementById('txtCantDormitorio').value;
    let id = document.getElementById('txtId').value;

    var obj = null;
    if(id == null || id == undefined || id == "")
    { 
        if (titulo != null && descripcion != null && transaccion != null && precio != null && estacionamientos != null && dormitorios != null) {
            obj = new Anuncio(titulo, transaccion, descripcion, precio, baños, estacionamientos, dormitorios);
        }
    }
    else
    {
        if (titulo != null && descripcion != null && transaccion != null && precio != null && estacionamientos != null && dormitorios != null) {
            obj = new Anuncio(titulo, transaccion, descripcion, precio, baños, estacionamientos, dormitorios,id);
        }
    }
   

    return obj;



}

function refrescarTabla() {
    let div = document.getElementById('divTabla');
    div.innerHTML = "";
}

function reset() {
            document.forms[0].reset();
            refrescarTabla();
            traerDatos();
}

function cargarForm(event) {
  
    debugger;
    var tr = event.target.parentElement;
    var tds = tr.childNodes;
    var anuncio = {};
   
    anuncio.id = tds[8].innerHTML;
    anuncio.titulo = tds[0].innerHTML;
    anuncio.transaccion = tds[1].innerHTML;
    anuncio.descripcion = tds[2].innerHTML;
    
    anuncio.precio = tds[3].innerHTML.replace('$','').split(',').join("");
    anuncio.num_wc = tds[4].innerHTML;
    anuncio.num_estacionamiento = tds[5].innerHTML;
    anuncio.num_dormitorio = tds[6].innerHTML;



    
    document.getElementById("txtId").value = anuncio.id;
    document.getElementById("txtTitulo").value = anuncio.titulo;
    document.getElementById("txtDescripcion").value = anuncio.descripcion;
    document.getElementById("txtTransaccion").value = anuncio.transaccion;
    document.getElementById("txtPrecio").value = anuncio.precio;
    document.getElementById("txtCantBaños").value = anuncio.num_wc;
    document.getElementById("txtCantEstacionamiento").value = anuncio.num_estacionamiento;
    document.getElementById("txtCantDormitorio").value = anuncio.num_dormitorio;

   // return anuncio;
}


function cancelar() {
    var form = document.getElementById("divAnuncio");
    form.reset();
}

function eventEliminar()
{
    let data = traerDatosDelForm();
    eliminar(data);
    reset();
 
}
