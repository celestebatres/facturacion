export class ProveedorItem{
    id_proveedor:number;
    nombre:string;
    laboratorio:string;

    constructor(id_proveedor: number, nombre: string, laboratorio:string){
        this.id_proveedor = id_proveedor;
        this.nombre = nombre;
        this.laboratorio = laboratorio;
    }

} 