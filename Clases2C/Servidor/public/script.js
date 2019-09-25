
window.addEventListener('load',traerPersonas);



function altaPersona()
 {
     let persona = formToObject();

    let xhr= new XMLHttpRequest();
    xhr.onreadystatechange = ()=>{
       if( xhr.readyState ==4 && xhr.status == 200){
           console.log(JSON.parse(xhr.responseText));
       }
    }
    xhr.open('POST', 'http://localhost:3000/altaPersona', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(JSON.stringify(persona));
 }

 function formToObject()
 {
     
 }