window.addEventListener("load", carga);


function carga() {
    var btnGuardar = document.getElementById("btnSave").addEventListener("click", this.save);
    var btnAgregar = document.getElementById("btnAdd").addEventListener("click", this.abrir);
    var btnCerrar = document.getElementById("btnClose").addEventListener("click", this.cerrar);
}


function save() {
    var txtN1 = (document.getElementById("name").value);
    var txtN2 = (document.getElementById("lastName").value);
    if (txtN1 == "" || txtN2 == "") {
        document.getElementById("lastName").className = "conError";
        document.getElementById("name").className = "conError";
        alert("Debe ingresar nombre y apellido");
        return;
    }
    if (confirm("Desea agregar esta persona?") == true) {
        var table = document.getElementById("tabla");
        document.getElementById("name").className = "sinError";
        document.getElementById("lastName").className = "sinError";
        var tbody = document.getElementById("tbody");
        //tr table row
        tbody.innerHTML = "<tr><td>" + txtN1 + "<td>" + txtN2 + "<td><tr>";
        cerrar();
    }


}

function abrir(){
    var cnt= document.getElementById("contAgregar");
    var btn =  document.getElementById("btnAdd");
    cnt.className =  "contenedor clDs";
    cnt.removeAttribute("class","clDs");
    btn.hidden = true;
    cnt.hidden=false;
}

function cerrar(){
    var cnt= document.getElementById("contAgregar");
    var btn =  document.getElementById("btnAdd");
    btn.hidden = false;
    cnt.hidden=true;
}