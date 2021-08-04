import { ProductItem } from "./ProductItem";

export class ProductList{
    status:number;
    mensaje: string;
    productos : Array<ProductItem>;

    constructor(status:number, mensaje:string, productos: Array<ProductItem>){
        this.status = status;
        this.mensaje = mensaje;
        this.productos = productos;
    }
}