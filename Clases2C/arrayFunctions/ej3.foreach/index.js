let array =  ["Juan","ana",true,13,[1,2,3], {nombre: "juan",edad:30}];

//foreach recibe un callback
array.forEach(element => {
    console.log(element);
});

array.forEach(callback);

function callback(array)
{
    console.log(array);
}

let numeros = [1,2,100,3,4,5];
let cuadrados = [];

let retorno = numeros.forEach(numero => cuadrados.push(numero*numero));

console.log(cuadrados);

let retorno2 = numeros.forEach((a,b,c) => {
    console.log(a);
    console.log(b);
    console.log(c);
})

console.log(numeros.sort((a,b)=>a-b));

let personas =  [{nombre: "Juan",edad:30},{nombre:"Juana",edad:50},{nombre: "Pepe",edad:5}];

console.log(personas);

personas.sort((p1,p2)=>p1.edad - p2.edad);
console.log(personas);

let persona1= [{nombre:"Juan",edad:30}];
let persona2 = [...persona1];