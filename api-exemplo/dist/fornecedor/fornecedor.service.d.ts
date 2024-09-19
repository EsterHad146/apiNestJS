import { Fornecedor } from './fornecedor.entity';
export declare class FornecedorService {
    private fornecedorBd;
    findAll(): any;
    findOne(id: number): Fornecedor | {
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
