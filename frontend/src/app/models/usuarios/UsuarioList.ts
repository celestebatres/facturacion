import { UsuarioItem } from './UsuarioItem';
export class UsuarioList{
    status:number;
    mensaje:string;
    usuario: Array<UsuarioItem>;

    constructor(status:number, mensaje:string, usuario: Array<UsuarioItem>){
        this.status = status;
        this.mensaje = mensaje;
        this.usuario = usuario;
    }
}