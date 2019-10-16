let array =  ["Juan","ana","Jose"];
let numeros = [1,2,3,4];

let dobles;
//map y filter construyen un nuevo array
dobles = numeros.map(elemento => elemento*2)
console.log(dobles);

let x = numeros.map(elemento =>elemento >2);
console.log(x);