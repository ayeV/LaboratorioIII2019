namespace ABMEmpleados{

    export class Empleado extends Persona{
        public horario:string;
        public legajo:number;

        constructor(nombre:string,apellido:string,edad:number,horario:string,legajo:number)
        {
            super(nombre,apellido,edad);
            this.horario = horario;
            this.legajo = legajo;
            

        }


        empleadoToJSON():string
        {
            return JSON.stringify(this);

        }
    }



}