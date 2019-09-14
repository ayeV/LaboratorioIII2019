var x = 5;
console.log(typeof x);
//ctrl + ñ abre terminal

// Para ejecutar un archivo js en NODE : node script

var y = function () {
    return 4 + 2;
}
y();
console.log(y);

var obj = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    saludar: function () {
        return "hola me llamo " + this.nombre;
    }

};
console.log(obj.saludar());
//funcion constructora
function Persona(nombre, apellido, edad) {

    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.saludar = function () {
        return "hola me llamo " + this.nombre;
    }
}

var p1 = new Persona("juana","garcia",56);
var p2 = new Persona("ana","gomex",45);
console.log(p1.saludar());
console.log(p2.saludar());

p1.altura = 1.80;
console.log(p1.altura);
console.log(p2.altura);
//Javascript tiene prototipos en vez de clases
//Si quiero que todas las personas tengan la prop altura:
Persona.prototype.altura = 0;
console.log(p1.altura);
console.log(p2.altura);


var d;
 function foo(a,b,c){
    console.log(a,b,c);
    //Muestra el obj como clave valor
    //se puede trabajar el obj como un array
    console.log(arguments);
    console.log(arguments[0]);
    console.log("length:" + arguments.length);

}

d = foo;
d(23,12,40); //equivale a foo()
d(23,12);
d(1,2,3,"aasaf");
