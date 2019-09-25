//Ajax es para enviar informacion al servidor
//envia una peticion al servidor de manera asincronica (no bloqueante)

window.addEventListener('load',()=>{
    document.forms[0].addEventListener('submit',enviarDatos);
});


function enviarDatos(e)
{
    e.preventDefault();
    let data = traerDatos(e.target);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        let info = document.getElementById('info');
        //aca va el codigo que maneja la peticion
        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)
            {
                
                setTimeout( ()=>{
                    info.innerText = xhr.responseText;                    
                    clearTimeout(tiempo);
                },3000);
                


            }
            else
            {
                console.log("Error " + xhr.status + "--" + xhr.statusText);    
            }
        }
        else
        {
            //mientras espea a que la peticion termine, muestro un spinner
            info.innerHTML = '<img src = "./img/spinner.gif" alt = "spinner" />';

        }


    }
    //Abro la conexion
    xhr.open('GET','./servidor.php?' + data,true);
    xhr.send();

    var tiempo =setTimeout(() => {
       xhr.abort();
       info.innerHTML = "Servidor no disponible"; 
    }, 4000);
}


function  traerDatos(form)
{
    let nombre  = form.nombre.value;
    let apellido = form.apellido.value;

    return `nombre=${nombre}&apellido=${apellido}`;
}