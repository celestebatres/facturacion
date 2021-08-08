export class PutClient{
    nombre:string;
    precio:number;
    grms:number;
    existencia:number;
    fecha_venc: string;

    constructor(nombre: string, precio: number, grms: number, existencia: number, fecha_venc: string){
        this.nombre = nombre;
        this.precio = precio;
        this.grms = grms;
        this.existencia = existencia;
        this.fecha_venc = fecha_venc;
    }
}