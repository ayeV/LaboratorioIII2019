Array.prototype.unique = function()
{
    return [...new Set(this)]
};


let array =  ["Juan","ana","Jose","Lucio"];
let numeros = [1,2,3,4,7,7,7,4];
let personas =  [{nombre: "Juan",edad:30,sexo:'m'},{nombre:"Juana",edad:50,sexo:'f'},{nombre: "Pepe",edad:5,sexo:'m'}];


let x = new Set(numeros);
console.log(x);

//convertir x (que es tipo Set) en array

let sinRepetir = [...x];
console.log(sinRepetir);

console.log(numeros.unique());

