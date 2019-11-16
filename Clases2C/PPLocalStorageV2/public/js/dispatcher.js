var anuncios = [];

function traerDatos() {
   var lista = JSON.parse(localStorage.getItem('anuncios'));
    if (lista != null) {
        anuncios = lista;//.map(x=>JSON.parse(x));
        mostrarDatos(anuncios);
    }
}




function guardar(data) {
    
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

            //anuncios.push(JSON.stringify(data));


        }
        //Alta
        else {
            debugger;
            var id = getID(anuncios);
            data.id = id;
            anuncios.push(data);

        }
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
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

  function eliminar(data)
  {
    if(data != null)
    {
       anuncios = anuncios.filter(x=>{
            return !(x.id == data.id);
        });
        localStorage.setItem('anuncios', JSON.stringify(anuncios));
    }
  }