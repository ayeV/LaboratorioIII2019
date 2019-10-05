function crearTabla(array) {
  
    var tabla = document.createElement('table');
    tabla.setAttribute('class', 'tabla');
    tabla.setAttribute('id','tabla');
    let cabecera = document.createElement('tr');

    for (atributo in array[0]) {
        let th = document.createElement('th');
        th.textContent = atributo;
        cabecera.appendChild(th);
    }
    tabla.appendChild(cabecera);

    for (var i in array) {
        var fila = document.createElement('tr');
        var obj = array[i];
        for (var j in obj) {
            var celda = document.createElement('td');
            
            var dato = document.createTextNode(obj[j]);
            debugger;
          
            
            celda.appendChild(dato);
            var a = Object.keys(obj);
            celda.setAttribute("name", a);  
            fila.appendChild(celda);
        }
        
        tabla.appendChild(fila);
      
        //celda.addEventListener('dbclick', abrirFormulario);

    }
    
    return tabla;

}
