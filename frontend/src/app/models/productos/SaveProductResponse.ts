//Respuesta hacia la peticion POST
export class SaveProductResponse{
    mensaje: string;
    status: number;

    constructor(mensaje:string, status: number){
        this.mensaje = mensaje;
        this.status = status;
    }
}