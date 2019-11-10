
let msj1:string = "hello";
console.log(msj1);


//Array
let vector:number[] = [1,2,3,4,5];

//Tupla

let tupla:[number,string] = [1,"Tuple"];

let variable:string | number | boolean;

//Enum
enum EHeroe{
    Xmen,
    Avenger
}

console.log("Enum: " + EHeroe.Avenger);
console.log('Enum: ' + EHeroe[EHeroe.Avenger]);

for(let key in EHeroe)
{
    console.log(key);
}

//funciones
let funcionEnviarMision = function(heroe:string):string
{
    return heroe+ "enviando";
}

let funcionEnviarMisionOpcional = function(heroe?:string):string
{
    return heroe+ "enviando";
}

let funcionEnviarMisionDefault = function(heroe:string = "default"):string
{
    return heroe+ "enviando";
}


console.log(funcionEnviarMision(EHeroe[EHeroe.Xmen]));

