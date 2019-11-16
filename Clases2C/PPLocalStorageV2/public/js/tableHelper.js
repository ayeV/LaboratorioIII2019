function crearTabla(array) {
  debugger;
    var tabla = document.createElement('table');
    tabla.setAttribute('class','table table-striped');
    tabla.setAttribute('id','tabla');
    let cabecera = document.createElement('tr');

    for (atributo in array[0]) {
        let th = document.createElement('th');
        th.textContent = atributo;
        th.setAttribute('class','bg-primary')
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for (var i in array) {
        var fila = document.createElement('tr');
        var obj = array[i];
        var columns = Object.keys(array[0]);
        
        for (var j in obj) {
            var celda = document.createElement('td');
            
            var dato = document.createTextNode(obj[j]);
            celda.appendChild(dato);
            
            fila.appendChild(celda);
        }
      
        tabla.appendChild(fila);
      
        

    }
    
    return tabla;

}
