  window.onload = carga;
        /*function carga() {
           var boton = document.getElementById("btn").onclick = validarUser;
        }*/

        function carga(){
            var btn = document.getElementById("btn").addEventListener("click",this.validarUser);
            document.getElementById("btn").removeEventListener("click",this.validarUser);
            document.getElementById("btn").addEventListener("click", function(){alert("eeee")});
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

