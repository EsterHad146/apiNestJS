import { Controller, Get, Param, Post, Body, Put, Delete, Res, HttpStatus} from '@nestjs/common';
import { Response } from 'express';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
    constructor(private readonly ProdutoService:ProdutoService){}
    @Get()
    findAll(@Res() res: Response): void {
        res.status(HttpStatus.OK).json(this.ProdutoService.findAll());
    }
    @Get(':id')
    findOne(@Param('id') id: string, @Res() res: Response): void {
        res.status(HttpStatus.OK).json(this.ProdutoService.findOne(parseInt(id)));
    }
    @Post()
    create(@Body() body: any, @Res() res: Response): void {
        res.status(HttpStatus.CREATED).json(this.ProdutoService.create(body));
    }
    @Put(':id')
    update(@Param('id') id: string, @Body() body: any, @Res() res: Response): void {
        res.status(HttpStatus.OK).json(this.ProdutoService.update(parseInt(id), body));
    }
    @Delete(':id')
    remove(@Param('id') id: string, @Res() res: Response): void {
        res.status(HttpStatus.NO_CONTENT).json(this.ProdutoService.remove(parseInt(id))); // No content - sem exibição de resposta
    }
}
