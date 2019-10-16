let array =  ["Juan","ana","Jose","Lucio"];
let numeros = [1,2,3,4];

//reduce devuele un unico valor

let suma;
suma = numeros.reduce( (acumulador,elemento) => acumulador+elemento,0);

console.log(suma);

let personas =  [{nombre: "Juan",edad:30,sexo:'m'},{nombre:"Juana",edad:50,sexo:'f'},{nombre: "Pepe",edad:5,sexo:'m'}];

let sumaEdad = personas.filter(persona => persona.sexo === 'm')
                        .map(hombre=>hombre.edad)
                        .reduce((suma,edad)=>suma+edad,0);
console.log(sumaEdad);

//promedio de edad de los hombres
let hombres = personas.filter((persona) => persona.sexo === 'm');
console.log(hombres);

let edades = hombres.map(hombre => hombre.edad);
console.log(edades);

let sumaEdades = edades.reduce((suma,edad) => suma + edad,0);
console.log(sumaEdades);


let promedioEdad = personas.filter(persona => persona.sexo === 'm')
                        .map(hombre=>hombre.edad)
                        .reduce((suma,edad,indice,array)=>suma+edad/array.length,0);

console.log(promedioEdad);