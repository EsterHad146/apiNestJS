"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
const common_1 = require("@nestjs/common");
let ProdutoService = class ProdutoService {
    constructor() {
        this.ProdutoBd = [
            { id: 1, codBarras: 22153, nome: "Loratadina", preco: "5,90" },
            { id: 2, codBarras: 15678, nome: "Dipirona", preco: "4,50" },
            { id: 3, codBarras: 26549, nome: "Dorflex", preco: "11,98" },
        ];
    }
    findAll() {
        try {
            return { status: 200, registro: this.ProdutoBd };
        }
        catch (error) {
            return error;
        }
    }
    findOne(id) {
        try {
            return this.ProdutoBd.find(p => p.id == id);
        }
        catch (error) {
            return { status: 400, message: `Registro ID:${id} não encontrado. Erro:${error}` };
        }
    }
    create(dados) {
        try {
            dados.id = this.ProdutoBd[this.ProdutoBd.length - 1].id + 1;
            this.ProdutoBd.push(dados);
            return { status: 201, message: `Usuário Inserido`, registro: dados };
        }
        catch (error) {
            return { status: 400, message: `Registro não inserido.Erro:${error}` };
        }
    }
    update(id, dados) {
        try {
            const index = this.ProdutoBd.findIndex(p => p.id === id);
            if (index >= 0) {
                this.ProdutoBd[index] = { id, ...dados };
                return { status: 200, message: `Usuário Atualizado`, registro: dados };
            }
            else {
                return { status: 400, message: `Erro na atualização de usuário` };
            }
        }
        catch (error) {
            return { status: 400, message: `Erro na atualização de usuário.Erro:${error}` };
        }
    }
    remove(id) {
        try {
            const index = this.ProdutoBd.findIndex(p => p.id === id);
            if (index >= 0) {
                this.ProdutoBd.splice(index, 1);
                return { status: 200, message: `Usuário Id${id} removido com sucesso` };
            }
            else {
                return { status: 400, message: `Erro na remoção de usuário` };
            }
        }
        catch (error) {
            return { status: 400, message: `Erro na exclusão de usuário.Erro:${error}` };
        }
    }
};
exports.ProdutoService = ProdutoService;
exports.ProdutoService = ProdutoService = __decorate([
    (0, common_1.Injectable)()
], ProdutoService);
//# sourceMappingURL=produto.service.js.map