import { ClientItem } from "./ClientItem";

export class ClientList{
    status: number;
    mensaje: string;
    clientes: Array<ClientItem>;

    constructor(status:number, mensaje:string, clientes: Array<ClientItem>){
        this.status = status;
        this.mensaje = mensaje;
        this.clientes = clientes;
    }
}