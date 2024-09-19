import { Response } from 'express';
import { ProdutoService } from './produto.service';
export declare class ProdutoController {
    private readonly ProdutoService;
    constructor(ProdutoService: ProdutoService);
    findAll(res: Response): void;
    findOne(id: string, res: Response): void;
    create(body: any, res: Response): void;
    update(id: string, body: any, res: Response): void;
    remove(id: string, res: Response): void;
}
