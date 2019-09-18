let mascotas = [];

function Mascota(nombre,edad,tipo,castrado,vacunado,desparasitado,alimento)
{
    this.nombre = nombre;
    this.edad = edad;
    this.tipo = tipo;
    this.castrado = castrado;
    this.vacunado = vacunado;
    this.desparasitado = desparasitado;
    this.alimento = alimento;

    //sobreescritura de toString()
    //comilla al reves: alt+96
    Mascota.prototype.toString = function(){
        return `Hola soy ${this.nombre} y tengo ${this.edad}`;
    }
};

//let hace que la variable solo exista en el contexto creado

//let m1 = new Mascota("mascota1","2","perro",true,false,true,"carne");

//console.log(m1.toString());