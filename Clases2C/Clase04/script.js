var frm;
window.addEventListener("load", inicializarManejadores);

function inicializarManejadores() {
  //devuelve un array de formularios
  //console.log(document.forms[0]);
  // console.log(document.getElementsByTagName("form"));
  //frm = document.getElementById("frmAltas");
  //console.log(frm);

  frm = document.forms[0];

  frm.addEventListener("submit", manejadorSubmit);
}

function manejadorSubmit(e) {
  //el comportamiento por default del submit es ir al action del form
  //prevengo ese comportamiento
  e.preventDefault();

  //traigo la informacion del form
  //e.target sera el frm que lanza el submit
  let nuevaMascota = obtenerMascota(e.target);
  mascotas.push(nuevaMascota);
  document.getElementById("divTabla").innerHTML = "";
  document.getElementById("divTabla").appendChild(crearTabla(mascotas));
  cleanForm(e.target);
  console.log(mascotas);
}
//#region ejemplo de callback
/*function operar(a,b,callback)
{
    return callback(a,b);
}

function sumar(x,y)
{
    return x+y;
}

console.log("la rta es: " + operar(2,5,sumar));*/
//#endregion

function obtenerMascota(frm) {
  let nombre;
  let edad;
  let tipo;
  let vacunado;
  let desparasitado;
  let castrado;
  let alimento;

  //for in devuelve el indice (la clave del obj)
  //for of devuelve el value que esta guardado en el indice

  for (elemento of frm.elements) {
    switch (elemento.name) {
      case "nombre":
        nombre = elemento.value;
        break;
      case "edad":
        edad = parseInt(elemento.value);
        break;
      case "tipo":
        if (elemento.checked) tipo = elemento.value;
        break;
      case "castrado":
        castrado = elemento.checked;
        break;
      case "vacunado":
        vacunado = elemento.checked;
        break;
      case "desparasitado":
        desparasitado = elemento.checked;
        break;
      case "alimento":
        alimento = elemento.value;
    }
  }
  return new Mascota(
    nombre,
    edad,
    tipo,
    castrado,
    vacunado,
    desparasitado,
    alimento
  );
}

function cleanForm(frm) {

  for (elemento of frm.elements) {
    switch (elemento.name) {
      case "nombre":
        elemento.value = "";
        break;
      case "edad":
        elemento.value = "";
        break;
      case "tipo":
        if (elemento.checked)
            elemento.value = "";
        break;
      case "castrado":
        elemento.checked = false;
        break;
      case "vacunado":
        elemento.checked = false;
        break;
      case "desparasitado":
        elemento.checked = false;
        break;
      case "alimento":
        elemento.selectedIndex = 0;
    }
  }
}
