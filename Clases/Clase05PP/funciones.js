var httpReq = new XMLHttpRequest();

function events() {
    var btnLoad = document.getElementById("btnLoad").addEventListener("click", cargarPersona);
   
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
              var color = rta.preferencias.color;
              var font = rta.preferencias.font;
              var email = document.getElementById("email").value;
              window.location.replace("index.html?color=" + color + "&font=" +font+ "&email=" + email);
          }
        }

       else
           alert("Error en el servidor " + httpReq.status);
    }
    
   
}


function cargarPersona()
{
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
if(email == "" || password =="")
{
    alert("Ingrese todos los campos");
    return;
}
else
{
    var datosLogin = {
        email:  email,
        password : password
    }
ajax("POST","http://localhost:1337/login",JSON.stringify(datosLogin),true)
  
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




window.onload = events;
