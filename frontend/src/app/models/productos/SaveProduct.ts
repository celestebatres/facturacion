//Para realizar el POST --- Se hace necesario generar un id
export class SaveProduct{
    id_producto : number;
    nombre:string;
    precio:number;
    grms:number;
    existencia:number;
    fecha_venc: string;

    constructor(id_producto:number, nombre: string, precio: number, grms: number, existencia: number, fecha_venc: string){
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.precio = precio;
        this.grms = grms;
        this.existencia = existencia;
        this.fecha_venc = fecha_venc;
    }
}