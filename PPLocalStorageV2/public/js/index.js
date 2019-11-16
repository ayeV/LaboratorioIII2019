
$(document).ready(manejadorEventos);
$(document).ready(traerDatos);


function manejadorEventos() {
    $("#btnGuardar").click(guardarAnuncio);
    $("#btnEliminar").click(eventEliminar);
    $("#btnCancelar").click(cancelar);
    $("#venta").click(filtrarV);
    $("#alquiler").click(filtrarA);
    $("#todos").click(reset);
}

function filtrarV()
{
    debugger;
    var anuncios = filtrarVenta();
    refrescarTabla();
    mostrarDatos(anuncios);
}


function filtrarA()
{
    debugger;
    var anuncios = filtrarAlquiler();
    refrescarTabla();
    mostrarDatos(anuncios);
}


function guardarAnuncio(e) {
    let data = traerDatosDelForm();

    if (guardar(data, e))
        reset();
}

function mostrarDatos(arr) {
    var div = document.getElementById('divTabla');
  
    div.appendChild(crearTabla(arr));
  
    debugger;
    let tabla = div.lastChild;
    for (var i = 0; i < tabla.childNodes.length; i++) {
        tabla.childNodes[i].addEventListener('click', cargarForm);
    }
}



function traerDatosDelForm() {
    debugger;
    let titulo = $('#txtTitulo').val() ? $('#txtTitulo').val() : null;
    let descripcion = $('#txtDescripcion').val() ? $('#txtDescripcion').val() : null;
    let transaccion = '';
    var rdoAlquiler = document.getElementById("rdoAlquiler").checked;
    var rdoVenta = document.getElementById("rdoVenta").checked;
    if (rdoVenta)
        transaccion = 'Venta';
    else
        transaccion = 'Alquiler';
    let precio = $('#txtPrecio').val();
    let baños = $('#txtCantBaños').val();
    let estacionamientos = $('#txtCantEstacionamiento').val();
    let dormitorios = $('#txtCantDormitorio').val();
    let id = $('#txtId').val();

    var obj = null;
    if (id == null || id == undefined || id == "") {
        if (titulo != null && descripcion != null && transaccion != null && precio != null && estacionamientos != null && dormitorios != null) {
            obj = new Anuncio(titulo, transaccion, descripcion, precio, baños, estacionamientos, dormitorios);
        }
        else {

        }
    }
    else {
        if (titulo != null && descripcion != null && transaccion != null && precio != null && estacionamientos != null && dormitorios != null) {
            obj = new Anuncio(titulo, transaccion, descripcion, precio, baños, estacionamientos, dormitorios, id);
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

    anuncio.titulo = tds[0].innerHTML;
    anuncio.transaccion = tds[1].innerHTML;
    anuncio.descripcion = tds[2].innerHTML;
    anuncio.precio = tds[3].innerHTML.replace('$', '').split(',').join("");
    anuncio.num_wc = tds[4].innerHTML;
    anuncio.num_estacionamiento = tds[5].innerHTML;
    anuncio.num_dormitorio = tds[6].innerHTML;
    anuncio.id = tds[7].innerHTML;

    $("#txtId").val(anuncio.id);
    $("#txtTitulo").val(anuncio.titulo);
    $("#txtDescripcion").val(anuncio.descripcion);
    var rdoAlquiler = document.getElementById("rdoAlquiler");
    var rdoVenta = document.getElementById("rdoVenta");
    if (anuncio.transaccion.toLowerCase() == 'alquiler')
        rdoAlquiler.checked = true;
    else
        rdoVenta.checked = true;
    $("#txtPrecio").val(anuncio.precio);
    $("#txtCantBaños").val(anuncio.num_wc);
    $("#txtCantEstacionamiento").val( anuncio.num_estacionamiento);
    $("#txtCantDormitorio").val(anuncio.num_dormitorio);


}


function cancelar() {
    var form = document.getElementById("divAnuncio");
    form.reset();
}

function eventEliminar(e) {
    let data = traerDatosDelForm();
    eliminar(data, e);
    reset();

}
