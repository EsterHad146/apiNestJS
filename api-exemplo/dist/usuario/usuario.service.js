"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioService = void 0;
const common_1 = require("@nestjs/common");
let UsuarioService = class UsuarioService {
    constructor() {
        this.usuarioBd = [
            { id: 1, nome: "Rosi", email: "rosi@teste.com", senha: "rosi" },
            { id: 2, nome: "Paula", email: "paula@teste.com", senha: "123" },
            { id: 3, nome: "Tiago", email: "tiago@teste.com", senha: "456" },
        ];
    }
    findAll() {
        try {
            return { status: 200, registro: this.usuarioBd };
        }
        catch (error) {
            return error;
        }
    }
    findOne(id) {
        try {
            return this.usuarioBd.find(u => u.id == id);
        }
        catch (error) {
            return { status: 400, message: `Registro ID:${id} não encontrado. Erro:${error}` };
        }
    }
    create(dados) {
        try {
            dados.id = this.usuarioBd[this.usuarioBd.length - 1].id + 1;
            this.usuarioBd.push(dados);
            return { status: 201, message: `Usuário Inserido`, registro: dados };
        }
        catch (error) {
            return { status: 400, message: `Registro não inserido.Erro:${error}` };
        }
    }
    update(id, dados) {
        try {
            const index = this.usuarioBd.findIndex(u => u.id === id);
            if (index >= 0) {
                this.usuarioBd[index] = { id, ...dados };
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
            const index = this.usuarioBd.findIndex(u => u.id === id);
            if (index >= 0) {
                this.usuarioBd.splice(index, 1);
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
exports.UsuarioService = UsuarioService;
exports.UsuarioService = UsuarioService = __decorate([
    (0, common_1.Injectable)()
], UsuarioService);
//# sourceMappingURL=usuario.service.js.map