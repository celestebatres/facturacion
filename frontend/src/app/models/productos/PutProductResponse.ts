//Respuesta hacia la peticion PUT
export class PutProductResponse{
    mensaje: string;
    status: number;

    constructor(mensaje:string, status: number){
        this.mensaje = mensaje;
        this.status = status;
    }
}