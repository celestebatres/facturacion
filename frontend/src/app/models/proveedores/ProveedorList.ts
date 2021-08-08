import { ProveedorItem } from "./ProveedorItem";

export class ProveedorList{
    status:number;
    mensaje: string;
    proveedores : Array<ProveedorItem>;

    constructor(status:number, mensaje:string, proveedores: Array<ProveedorItem>){
        this.status = status;
        this.mensaje = mensaje;
        this.proveedores = proveedores;
    }
}