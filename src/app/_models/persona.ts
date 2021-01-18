export class Persona{
    id: number;
    nombre: string;
    apellidos: string;
    fecha_nac: Date;
    domicilio: string;
    rfc: string;

    constructor(id, nombre, apellidos, fecha_nac, domicilio, rfc){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha_nac = fecha_nac;
        this.domicilio = domicilio;
        this.rfc = rfc;
    }
}