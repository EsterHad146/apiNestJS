import { Usuario } from './usuario.entity';
export declare class UsuarioService {
    private usuarioBd;
    findAll(): any;
    findOne(id: number): Usuario | {
        status: number;
        message: string;
    };
    create(dados: any): {
        status: number;
        message: string;
        registro: any;
    } | {
        status: number;
        message: string;
        registro?: undefined;
    };
    update(id: number, dados: any): {
        status: number;
        message: string;
        registro: any;
    } | {
        status: number;
        message: string;
        registro?: undefined;
    };
    remove(id: number): {
        status: number;
        message: string;
    };
}
