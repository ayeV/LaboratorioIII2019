//El obj document es una referencia al html
var btnSaludar;
var frm;

window.addEventListener('load', inicializarManejadores);

function inicializarManejadores() {
    btnSaludar = document.getElementById('btnSaludar');
    frm = document.forms[0];
    frm.addEventListener('submit', manejarSubmit);
}

function manejarSubmit(e) {
    e.preventDefault();

}

function saludar() {
    //alert("hola");
    console.log("aaaaaaasssdf");
}