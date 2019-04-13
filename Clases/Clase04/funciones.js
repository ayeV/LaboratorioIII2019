var xml = new XMLHttpRequest();
 window.onload = carga;
        /*function carga() {
           var boton = document.getElementById("btn").onclick = validarUser;
        }*/

        function carga(){
            var btn = document.getElementById("btnSend").addEventListener("click",this.validarUser);
            document.getElementById("btnSend").removeEventListener("click",this.validarUser);
       //  document.getElementById("btnSend").addEventListener("click",this.sendGet);
         document.getElementById("btnSend").addEventListener("click",this.peticionPost);
         
        }




        function validarUser() {
            var userName = document.getElementById("usr");
            var password = document.getElementById("pass");
            if (userName.value == "abc" && password.value == "123") {
                alert("User y pass correctos");
            }
            else
                alert("No existe");



        }
 function sendGet()
 {
     
        
     
      var userName = document.getElementById("usr").value;
      var password = document.getElementById("pass").value;
      var enviar = "?usr=" + userName + "&pass=" + password;
      xml.open("GET","http://localhost:3000/loginUsuario" + enviar,true);
        xml.onreadystatechange = callback = function()
        {
            if(xml.readyState == 4)
            {
                if(xml.status == 200)
                    console.log("LLego rta del servidor",xml.readyState,xml.status,xml.responseText);
               else
                   alert("Error en el servidor " + xml.status);
   
            }
        }
       
      
   
        xml.send();
       console.log("Se ejecuto send");
 }

 function peticionPost()
 {
      var userName = document.getElementById("usr").value;
      var password = document.getElementById("pass").value;
      var enviar = "usr=" + userName + "&pass=" + password;
      xml.open("POST","http://localhost:3000/loginUsuario",true);
      xml.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      
        xml.onreadystatechange = callback = function()
        {
            if(xml.readyState == 4)
            {
                if(xml.status == 200)
                    console.log("LLego rta del servidor",xml.readyState,xml.status,xml.responseText);
               else
                   alert("Error en el servidor " + xml.status);
   
            }
        }
        xml.send(enviar);
       console.log("Se ejecuto send");
 }
//en js cualquier cosa entre llaves es un objeto JSON
// var per = {};