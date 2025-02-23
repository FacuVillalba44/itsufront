// src/app/modulos/administrativo/modelos/usuario.ts
export class Alumno {
    idUsuario: number;
    nombreUsuario: string;
    apellidoUsuario: string;
    dniUsuario: string; 
    domicilioUsuario: string;
    telefonoUsuario: string; 
    emailUsuario: string;
    idRol: number;
    claveAcceso: string;
    idCarrera?: number; 
}
