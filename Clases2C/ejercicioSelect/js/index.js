let selPaises;
let selCiudades;

window.addEventListener('load',function(){

    selPaises = document.getElementById('selPaises');
    selCiudades = document.getElementById('selCiudades');
    
    cargarSelect(selPaises,obtenerPaises(datos));
    cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));

    selPaises.addEventListener('change', (e)=>{
        
        cargarSelect(selCiudades,obtenerCiudades(datos,selPaises.value));
    });
});

function obtenerPaises(array){

    return array.map(obj => obj.pais)
    .unique()
    .sort();

}

function obtenerCiudades(array,pais)
{
    return  array.filter(obj=>obj.pais === pais)
    .map(x=>x.ciudad)
    .unique()
    .sort();
}

function cargarSelect(sel,array)
{
    //sel.options.length = 0;
    limpiarSelect(sel);
    array.forEach(element => {
        let option = document.createElement('option');
        option.setAttribute('value',element);
        let text = document.createTextNode(element);
        option.appendChild(text);
        sel.appendChild(option);
        
    });
}

Array.prototype.unique = function(){
    return [...new Set(this)];



}

function limpiarSelect(sel)
{
   while(sel.hasChildNodes())
    {
        sel.remove(sel.firstElementChild);

    }
}