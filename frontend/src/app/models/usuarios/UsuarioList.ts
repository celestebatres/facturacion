import { UsuarioItem } from './UsuarioItem';
export class UsuarioList{
    status:number;
    mensaje:string;
    usuarios: Array<UsuarioItem>;

    constructor(status:number, mensaje:string, usuarios: Array<UsuarioItem>){
        this.status = status;
        this.mensaje = mensaje;
        this.usuarios = usuarios;
    }
}