export class PutUsuario {
    nombre: string;
    username: string;
    contrasena: string;
    fecha_nac: string;
    rol: string;

    constructor(nombre: string, username: string, contrasena: string, fecha_nac: string, rol: string) {
        this.nombre = nombre;
        this.username = username;
        this.contrasena = contrasena;
        this.fecha_nac = fecha_nac;
        this.rol = rol;
    }
}