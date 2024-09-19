import { Response } from 'express';
import { FornecedorService } from './fornecedor.service';
export declare class FornecedorController {
    private readonly FornecedorService;
    constructor(FornecedorService: FornecedorService);
    findAll(res: Response): void;
    findOne(id: string, res: Response): void;
    create(body: any, res: Response): void;
    update(id: string, body: any, res: Response): void;
    remove(id: string, res: Response): void;
}
