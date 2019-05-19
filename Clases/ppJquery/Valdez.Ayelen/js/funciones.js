
//Shift+alt+f dar formato al documento

window.onload = events;
//$(document).ready(events);
function events() {
    $("#btnDelete").on("click", eliminar);
    $("#btnEdit").on("click", modificar);
    $("#btnCerrar").on("click", showAddPerson);
    var $loading = $('#spinner').hide();
    var $background = $('#background').hide();
    $(document)
        .ajaxStart(function () {
            $loading.show();
            $background.show();

        })
        .ajaxStop(function () {
            $loading.hide();
            $background.hide();

        });
    pedirMateriasGet();



}



function loadList(materias) {
    var count = materias.length;
    var tbody = document.getElementById("tablaResultados");

    for (var i = 0; i < count; i++) {
        var nTr = document.createElement("tr");

        var nTdNombre = document.createElement("td");
        var nTdCuatrimestre = document.createElement("td");
        var nTdFecha = document.createElement("td");
        var nTdTurno = document.createElement("td");
        var nTdID = document.createElement("td");
        nTdID.setAttribute("style", "display:none");
        nTr.setAttribute("id", materias[i].id);
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

            $("#nombre").val(e.currentTarget.cells[0].innerText);
            var selector = $("#cuatrimestre").val();
            selector.selectedIndex = e.currentTarget.cells[1].innerText - 1;
            $('#cuatrimestre').prop('disabled', true);


            if (e.currentTarget.cells[3].innerText == "Noche") {
                $("#turnon").prop("checked", true);
                $("#turnom").prop("checked", false);
            }
            else {
                $("#turnom").prop("checked", true);
                $("#turnon").prop("checked", false);

            }
            var format = e.currentTarget.cells[2].innerText.split("/");
            format = format[1] + "-" + format[0] + "-" + format[2];
            var date = new Date(format);
            console.log(date.toISOString().slice(0, 10));
            $("#fecha").val(date.toISOString().slice(0, 10));

            $("#id").val(e.currentTarget.cells[4].innerText);
            //  document.getElementById("divCargarPersona").className = "cargarPersona cargarPersonaVisible";
            $("#divCargarPersona").toggleClass("cargarPersona cargarPersonaOculto cargarPersona cargarPersonaVisible");


        }
        );
        tbody.appendChild(nTr);

    }


}

function eliminar() {
    var idMateria = $("#id").val();
    var obj = { id: idMateria }
    $.post("http://localhost:3000/eliminar", obj,
        function (data, status) {
            if (data.type == 'ok')
                alert("Data: " + data + "\nStatus: " + status);
        });


}



function modificar() {

    if (validaciones()) {
        var idMateria = $("#id").val();;
        var nombre = $("#nombre").val();
        var cuatrimestre = $("#cuatrimestre").val();
        var turno;
        if ($("#turnon").is(":checked")) {
            turno = $("#turnon").val();
        }
        else {
            turno = $("#turnom").val();
        }

        var format = $("#fecha").val().split("-");
        format = format[2] + "/" + format[1] + "/" + format[0];
        var obj = { id: idMateria, nombre: nombre, cuatrimestre: cuatrimestre, turno: turno, fechaFinal: format };
        $.post("http://localhost:3000/editar", obj,
            function (data, status) {
                if (data.type == 'ok')
                    setearCampos();
            });

        showAddPerson();
    }



}

function setearCampos() {

    var idMateria = document.getElementById("id").value;
    var row = document.getElementById(idMateria);
    var tds = row.childNodes;
    tds[0].innerText = $("#nombre").val();
    tds[1].innerText = document.getElementById("cuatrimestre").value;
    var format = document.getElementById("fecha").value.split("-");
    format = format[2] + "/" + format[1] + "/" + format[0];
    tds[2].innerText = format;
    if (document.getElementById("turnom").checked == true) {
        tds[3].innerText = document.getElementById("turnom").value;
    }
    else {
        tds[3].innerText = document.getElementById("turnon").value


    }




}

function validaciones() {
    debugger;
    var nombre = $("#nombre").val();
    var fecha = $("#fecha").val();


    if (nombre != "" && nombre.length >= 6 && fecha != "" && esMayorAHoy(fecha)) {
        $("#nombre")[0].className = "sinError";
        $("#fecha")[0].className = "sinError";

        return true;


    } else {
        if (nombre == "" || nombre.length < 6) {
            $("#nombre")[0].className = "conError";

        } else {
            $("#nombre")[0].className = "sinError";


        }
        if (fecha == "" || !esMayorAHoy(fecha)) {
            $("#fecha")[0].className = "conError";
        } else {
            $("#fecha")[0].className = "sinError";

        }
    }
    return false;
}
function getFormattedDate(fecha) {
    var date = fecha.split("/");
    return date[2] + "/" + date[1] + "/" + date[0];
}


function esMayorAHoy(fecha) {
    var fechaAValidar = new Date(getFormattedDate(fecha));
    var fechaActual = new Date();
    return fechaAValidar > fechaActual;
}


function pedirMateriasGet() {

    $.ajax({
        method: "GET",
        url: "http://localhost:3000/materias"

    })
        .done(function (data) {
            if (data != null)
                loadList(data);
        });


}


function showAddPerson() {
    var claseActual = $("#divCargarPersona").attr('class');

    if (claseActual == "cargarPersona cargarPersonaOculto") {
        $("#divCargarPersona").toggleClass("cargarPersona cargarPersonaVisible");

    }
    else {
        $("#divCargarPersona").toggleClass("cargarPersona cargarPersonaOculto cargarPersona cargarPersonaVisible");
    }



}











