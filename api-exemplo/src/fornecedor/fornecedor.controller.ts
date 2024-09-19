import { Controller, Get, Param, Post, Body, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { FornecedorService } from './fornecedor.service';

@Controller('fornecedor')
export class FornecedorController {
    constructor(private readonly FornecedorService:FornecedorService){}
    @Get()
    findAll(@Res() res: Response): void {
        res.status(HttpStatus.OK).json(this.FornecedorService.findAll());
    }
    @Get(':id')
    findOne(@Param('id') id: string, @Res() res: Response): void {
        res.status(HttpStatus.OK).json(this.FornecedorService.findOne(parseInt(id)));
    }
    @Post()
    create(@Body() body: any, @Res() res: Response): void {
        res.status(HttpStatus.CREATED).json(this.FornecedorService.create(body));
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() body: any, @Res() res: Response): void {
        res.status(HttpStatus.OK).json(this.FornecedorService.update(parseInt(id), body));
    }
    @Delete(':id')
    remove(@Param('id') id: string, @Res() res: Response): void {
        res.status(HttpStatus.NO_CONTENT).json(this.FornecedorService.remove(parseInt(id))); // No content - sem exibição de resposta
    }
}
