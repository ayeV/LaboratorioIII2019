//Ajax es para enviar informacion al servidor
//envia una peticion al servidor de manera asincronica (no bloqueante)

window.addEventListener('load',()=>{
    document.getElementById("btnTraer").addEventListener('click',traerTexto);
});


function traerTexto()
{
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
        let info = document.getElementById('info');
        //aca va el codigo que maneja la peticion
        if(xhr.readyState == 4)
        {
            if(xhr.status == 200)
            {
                
                setTimeout( ()=>{
                    //JSON.parse convierte el response en object
                    let persona = JSON.parse(xhr.responseText);
                    info.innerText = "Nombre:" + persona.nombre + " Apellido:" + persona.apellido + " Edad:" + persona.edad;
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
    xhr.open('GET','./persona.json',true);
    //envio la peticion
    xhr.send();

    var tiempo =setTimeout(() => {
       xhr.abort();
       info.innerHTML = "Servidor no disponible"; 
    }, 4000);
}