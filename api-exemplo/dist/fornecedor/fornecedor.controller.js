"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FornecedorController = void 0;
const common_1 = require("@nestjs/common");
const fornecedor_service_1 = require("./fornecedor.service");
let FornecedorController = class FornecedorController {
    constructor(FornecedorService) {
        this.FornecedorService = FornecedorService;
    }
    findAll(res) {
        res.status(common_1.HttpStatus.OK).json(this.FornecedorService.findAll());
    }
    findOne(id, res) {
        res.status(common_1.HttpStatus.OK).json(this.FornecedorService.findOne(parseInt(id)));
    }
    create(body, res) {
        res.status(common_1.HttpStatus.CREATED).json(this.FornecedorService.create(body));
    }
    update(id, body, res) {
        res.status(common_1.HttpStatus.OK).json(this.FornecedorService.update(parseInt(id), body));
    }
    remove(id, res) {
        res.status(common_1.HttpStatus.NO_CONTENT).json(this.FornecedorService.remove(parseInt(id)));
    }
};
exports.FornecedorController = FornecedorController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FornecedorController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FornecedorController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FornecedorController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], FornecedorController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], FornecedorController.prototype, "remove", null);
exports.FornecedorController = FornecedorController = __decorate([
    (0, common_1.Controller)('fornecedor'),
    __metadata("design:paramtypes", [fornecedor_service_1.FornecedorService])
], FornecedorController);
//# sourceMappingURL=fornecedor.controller.js.map