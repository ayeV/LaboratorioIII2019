function crearTabla(array){
    var tabla = document.createElement("table");

    tabla.setAttribute('border','1px solid black');
    tabla.setAttribute('style','border-collapse-collapse');
    tabla.setAttribute('width','780px');
    
    //tabla.classList.add()
    //tabla.className = "tablaMascotas";

    let cabecera = document.createElement("tr");
    
    for(atributo in array[0])
    {
        let th = document.createElement("th");
        th.textContent = atributo;
        cabecera.appendChild(th);
    }

    tabla.appendChild(cabecera);

    for(var i in array)
    {
        var fila = document.createElement("tr");
        var obj = array[i];
        for(j in obj)
        {
            var celda = document.createElement("td");
            celda.setAttribute('style','text-aling-center');
            var dato = document.createTextNode(obj[j]);
            celda.appendChild(dato);
            fila.appendChild(celda);

        }
        tabla.appendChild(fila);
    }

    return tabla;
}

