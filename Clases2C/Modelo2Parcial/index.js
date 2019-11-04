"use strict";
$(document).ready(
    function () {
        ABMEmpleados.Manejadora.mostrarEmpleados();
        ABMEmpleados.Manejadora.limpiarForm();
        $('#filtrarNombre').on("click", function (event) {
          event.preventDefault();
          ABMEmpleados.Manejadora.soloNombreYApellido();
      });
      $('#btnFiltrarHorario').on("click", function (event) {
          event.preventDefault();
          ABMEmpleados.Manejadora.filtrarPorHorario();
      });
      }
)