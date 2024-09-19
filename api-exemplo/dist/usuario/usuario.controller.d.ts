import { Response } from 'express';
import { UsuarioService } from './usuario.service';
export declare class UsuarioController {
    private readonly UsuarioService;
    constructor(UsuarioService: UsuarioService);
    findAll(res: Response): void;
    findOne(id: string, res: Response): void;
    create(body: any, res: Response): void;
    update(id: string, body: any, res: Response): void;
    remove(id: string, res: Response): void;
}
