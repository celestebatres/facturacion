export class UsuarioItem{
    id_usuario: number;
    nombre: string;
    username: string;
    contrasena: string;
    fecha_nac: string;
    rol: string;

    constructor(id_usuario: number, nombre: string, username: string, contrasena: string, fecha_nac: string, rol: string) {
        this.id_usuario = id_usuario;
        this.nombre = nombre;
        this.username = username;
        this.contrasena = contrasena;
        this.fecha_nac = fecha_nac;
        this.rol = rol;
    }
}