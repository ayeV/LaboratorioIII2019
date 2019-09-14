window.addEventListener('load', eventHandler);

function eventHandler() {
    var btnEnviar = document.getElementById("btnEnviar");
    btnEnviar.addEventListener('click',cargarAnuncio);
}

function cargarAnuncio(e){
    e.preventDefault();
    var titulo  = document.getElementById("txtTitulo").value;
    var descripcion =  document.getElementById("txtDescripcion").value;
    var contrato;
    var ele = document.getElementsByName('ventaOAlquiler'); 
              
    for(i = 0; i < ele.length; i++) { 
        if(ele[i].checked) {
            contrato = ele[i].value;
        }
      
    } 
    var precio =  document.getElementById("txtPrecio").value;
    var cantDormitorios =  document.getElementById("txtDormitorio").value;
    var cantBaños =  document.getElementById("txtBaño").value;
    var cantGarages =  document.getElementById("txtGarage").value;

    var anuncio = new Anuncio(titulo,descripcion,contrato,precio,cantBaños,cantDormitorios,cantGarages);
    console.log(anuncio);


}