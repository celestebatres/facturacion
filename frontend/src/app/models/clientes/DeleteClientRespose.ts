export class DeleteClientResponse{
    mensaje: string;
    status: number;

    constructor(mensaje:string, status: number){
        this.mensaje = mensaje;
        this.status = status;
    }
}