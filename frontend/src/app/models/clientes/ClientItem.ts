export class ClientItem{
    id_cliente: number;
    nombre: string;
    nit: number;

    constructor(id_cliente: number, nombre: string, nit: number){
        this.id_cliente = id_cliente;
        this.nombre = nombre;
        this.nit = nit;
    }
}