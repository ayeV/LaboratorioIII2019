var anuncios = [];

function traerDatos() {
   var lista = JSON.parse(localStorage.getItem('anuncios'));
    if (lista != null) {
        anuncios = lista;
        mostrarDatos(anuncios);
    }
}




function guardar(data,e) {
    debugger;
    let success = false;
    
    if (data != null) {
        //Modificar
        if (data.id != undefined) {
          anuncios =  anuncios.map(x=>{
                if(x.id == data.id)
                {
                    return data;
                }
                return x;
            });

        }
        //Alta
        else {
            ;
            var id = getID(anuncios);
            data.id = id;
            anuncios.push(data);

        }
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
        success = true;
    }
    else
    {
        
        alert("Debe cargar todos los datos para poder guardar un anuncio");
        e.preventDefault();
       
    }
      
}


function getID(array){
    if(array.length == 0){
        return 1;
    }
    else if(array.length == 1){
        return 2;
    }
    else{
        var maxIndex = array.reduce(function(prev,curr,index){
            if(parseInt(prev.id)>parseInt(curr.id))
            return parseInt(prev.id);
            else
            return parseInt(curr.id);
        });
        return (maxIndex+1).toString();
    }
  }

  function eliminar(data,e)
  {
      
    let success = false;
    if(data != null)
    {
       anuncios = anuncios.filter(x=>{
            return !(x.id == data.id);
        });
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
        success = true;
    }
    else
    {
        alert("Debe seleccionar un anuncio para poder eliminarlo");
        e.preventDefault();
    }
        
  }

  function filtrarAlquiler()
  {
    
        return  anuncios.filter(obj=>obj.Transaccion == 'Alquiler')

    
  }

  function filtrarVenta()
  {
    
        return  anuncios.filter(obj=>obj.Transaccion == 'Venta')
    
  }

