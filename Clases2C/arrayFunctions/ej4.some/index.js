let array =  ["Juan","ana","Jose"];
let numeros = [1,2,3,4];

//metodo some y every devuelven un bool
//retorna true si hay algun elemento que cumpla la condicion
console.log(array.some( element => element === "ana"));
//retorna true si todos los elementos cumplen la condicion
console.log(array.every( element => element.includes('a')));
