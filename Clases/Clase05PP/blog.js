var httpReq = new XMLHttpRequest();
window.addEventListener("load", events);
function events()
{
    var btnPost = document.getElementById("btnPost").addEventListener("click", loadPost);
    var btnNewPost =document.getElementById("btnNewPost").addEventListener("click", newPost);
    var btnClose =document.getElementById("btnClose").addEventListener("click", close);

}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}   

function callback() 
{
   var spinner = document.getElementById("spinner");
   var background = document.getElementById("background");
   if(httpReq.readyState == 4)
   {
       if(httpReq.status == 200)
       {
           var rta = JSON.parse(httpReq.response);
           var posts = document.getElementById("divPosts");
           posts.innerHTML += "<h1>"+rta.title+"</h1>" + "<p>"+rta.posttext+"</p>" + "<p>"+rta.header+"</p>" + "<p>Posted by:"+rta.author+"</p>"+"<p>"+rta.date+"</p>"
           spinner.hidden = true;
           background.hidden = true;
       }
       else
       {
           spinner.hidden = false;
           background.hidden = false;
       }
   }
}

function loadPost()
{
    httpReq.onreadystatechange = callback;
    httpReq.open("POST","http://localhost:1337/postearNuevaEntrada",true);
    httpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    var title = document.getElementById("pTitle").value;
    var header = document.getElementById("pHeader").value;
    var text = document.getElementById("pText").value;
    var author = getParameterByName("email",window.location);
    var spinner = document.getElementById("spinner");
    var background = document.getElementById("background");
    if(title != "" && header != "" && text != "")
    {
        var datosPost = 
        {
            "title":title,
            "header":header,
            "posttext":text,
            "author": author
        }
        httpReq.send(JSON.stringify(datosPost));
        spinner.hidden = false;
        background.hidden = false;
        close();
        
    }
    else
    alert("Debe ingresar todos los campos para poder crear un nuevo post");

}

function newPost(){
    var title = document.getElementById("pTitle").value = "";
    var header = document.getElementById("pHeader").value = "";
    var text = document.getElementById("pText").value = "";
	document.getElementById("btnNewPost").hidden = true;
	document.getElementById("divNewPost").hidden = false;
}

function close(){
    
        document.getElementById("btnNewPost").hidden = false;
        document.getElementById("divNewPost").hidden = true;
    
}