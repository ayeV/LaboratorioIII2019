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
                    info.innerText = xhr.responseText;
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
    xhr.open('GET','./documento.txt',true);
    //envio la peticion
    xhr.send();
}