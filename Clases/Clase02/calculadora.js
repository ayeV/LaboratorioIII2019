window.addEventListener("load",carga);


function carga()
{
    var btnSumar = document.getElementById("btnSumar").addEventListener("click",this.sumar);
    var btnGuardar = document.getElementById("btnSumarYGuardar").addEventListener("click",this.sumar);
    var btnGuardar = document.getElementById("btnSumarYGuardar").addEventListener("click",this.save);
    


}





function sumar(){
    var txtN1 = parseInt(document.getElementById("n1").value);
    var txtN2 = parseInt(document.getElementById("n2").value);
    var suma = txtN1 + txtN2;
    
    document.getElementById("resultado").value  = suma;

}

function save()
{
    var txtN1 = (document.getElementById("n1").value);
    var txtN2 = (document.getElementById("n2").value);
    var suma = txtN1 + txtN2;
   
    document.getElementById("resultado").value  = suma;
    var table = document.getElementById("tabla");
    console.log(table.innerHTML);
    var tbody = document.getElementById("tbody").innerHTML;

    tbody.innerHTML = "<tr><td>"+txtN1+"<tr><td>"+txtN2+"<tr><td>"+suma;
}