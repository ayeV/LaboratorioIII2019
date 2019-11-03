namespace ABMEmpleados{

   export class Persona{

        
        public nombre:string;
        public apellido: string;
        public edad:number;

        constructor(nombre:string,apellido:string,edad:number)
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }

        personaToJSON() : string
        {
            return JSON.stringify(this);
        }


    }


}