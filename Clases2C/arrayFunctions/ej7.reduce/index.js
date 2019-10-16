let array =  ["Juan","ana","Jose","Lucio"];
let numeros = [1,2,3,4];

//reduce devuele un unico valor

let suma;
suma = numeros.reduce( (acumulador,elemento) => acumulador+elemento,0);

console.log(suma);

let personas =  [{nombre: "Juan",edad:30},{nombre:"Juana",edad:50},{nombre: "Pepe",edad:5}];

let sumaEdad = personas.reduce((acumulador,persona)=>acumulador+persona.edad,0);
console.log(sumaEdad);