//console.log(data);

/*
    realizar las operaciones usando los metodos map,  reduce y filter y combinaciones entre ellos
  */


var soluciones = {};

// Retornar un array con los nombres de los usuarios femeninos

soluciones.usuariosFemeninos = function(usuarios){
    return usuarios
    .filter(function(user){
        return user.genero === 'Female';
    })
    .map(function(user){
        return user.nombre;
    });
}

//console.log(soluciones.usuariosFemeninos(data));

// Retornar un array de strings (el email de los usuarios de sexo masculino)

soluciones.mailsVarones = function(usuarios){
    return usuarios.filter(user=>user.genero === 'Male').map(user=>user.email);
   
}

//console.log(soluciones.mailsVarones(data));

// Retornar un array de objetos que solo contengan las claves nombre, email y edad, de todos los usuarios mayores que 'edad'

soluciones.usuariosMayores = function(usuarios, edad){
    return usuarios.filter(user=>user.edad > edad)
    .map(usuarios=>({email: usuarios.email, edad: usuarios.edad, nombre:usuarios.nombre}));
}

//console.log(soluciones.usuariosMayores(data, 40));

  // Retornar un objeto que contenga solo el nombre y la edad del usuario mas grande.

soluciones.usuarioMasGrande = function(usuarios){
    return Math.max.apply(Math,usuarios.map(u=>({nombre:u.nombre,edad:u.edad})));
}

//Math.max.apply(Math, array.map(function(o) { return o.y; }))

console.log(soluciones.usuarioMasGrande(data));

// Retornar el promedio de edad de los usuarios (number)

soluciones.promedio = function(usuarios){
  let suma;
  let acumEdad =  usuarios.map(e=>e.edad).reduce((suma,edad)=>suma+edad,0);
  let cantidad = usuarios.length

  return (acumEdad /cantidad).toFixed(2);


}

//console.log("Promedio edad usuarios " + soluciones.promedio(data));

// Retornar el promedio de edad de los usuarios hombres (number)

soluciones.promedioVarones = function(usuarios){
 let suma;
  let acumEdad = usuarios.filter(x=>x.genero == 'Male').map(e=>e.edad).reduce((suma,edad)=>suma+edad,0);
  let cantidad = usuarios.length

  return (acumEdad /cantidad).toFixed(2);
   
}

console.log("Promedio edad Varones " + soluciones.promedioVarones(data));

 // Retornar el promedio de edad de los usuarios mujeres (number)

soluciones.promedioMujeres = function(usuarios){
    let suma;
    let acumEdad = usuarios.filter(x=>x.genero == 'Female').map(e=>e.edad).reduce((suma,edad)=>suma+edad,0);
    let cantidad = usuarios.length
  
    return (acumEdad /cantidad).toFixed(2);
}

console.log("Promedio edad Mujeres " + soluciones.promedioMujeres(data));