import { Produto } from './produto.entity';
export declare class ProdutoService {
    private ProdutoBd;
    findAll(): any;
    findOne(id: number): Produto | {
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
