function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}   


var httpReq = new XMLHttpRequest();

function carga() {
    var btnPost = document.getElementById("btnPost").addEventListener("click", cargarPost);
   
}


function callback()
{
   if(httpReq.readyState == 4)
    {
        if(httpReq.status == 200)
        {
            console.log("LLego rta del servidor",httpReq.readyState,httpReq.status,httpReq.responseText);
            rta = JSON.parse(httpReq.response);
          if(rta.autenticado == "si")  
          {
              
           // getParameterByName()
          }
        }

       else
           alert("Error en el servidor " + httpReq.status);
    }
    
   
}


function cargarPost()
{
    var title = document.getElementById("pTitle").value;
    var header = document.getElementById("pHeader").value;
    var text = document.getElementById("pText").value;
    var author = getParameterByName("email","http://localhost:1337/index");
    
if(title == "" || header =="" || text == "")
{
    alert("Ingrese todos los campos");
    return;
}
else
{
    var datosPost = {
        "title":  title,
        "header" : header,
        "posttext": text,
        "author":autor
    }
ajax("POST","http://localhost:1337/index",JSON.stringify(datosPost),true)
}
    
    
}


function ajax(metodo,url,parametros,tipo){  
    httpReq.onreadystatechange = callback;

    if(metodo === "GET"){
        
        httpReq.open("GET", url, tipo); //abre la conexión con el servidor
        httpReq.send();
    }
    else{
        httpReq.open("POST", url, tipo); //abre la conexión con el servidor
        httpReq.setRequestHeader("Content-Type","application/x-www-form-urlencoded"); //string
        httpReq.send(parametros);
    }
}  





window.onload = carga;

