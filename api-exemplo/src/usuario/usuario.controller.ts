
// npm run start:dev

import { Controller, Get, Param, Post, Body, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { UsuarioService } from './usuario.service';

@Controller('usuario') //   rota: '/usuario'
export class UsuarioController {
    constructor(private readonly UsuarioService:UsuarioService){}
    @Get()
    findAll(@Res() res:Response) :void {
        res.status(HttpStatus.OK).json(this.UsuarioService.findAll());
    }
    @Get(':id')
    findOne(@Param('id') id :string, @Res()res:Response) :void {
        res.status(HttpStatus.OK).json(this.UsuarioService.findOne(parseInt(id)));
    }
    @Post()
    create(@Body() body :any, @Res()res:Response) :void{
        res.status(HttpStatus.CREATED).json(this.UsuarioService.create(body));
    }
    @Put(':id')
    update(@Param('id') id :string, @Body() body :any, @Res()res:Response) : void {
        res.status(HttpStatus.OK).json(this.UsuarioService.update(parseInt(id),body));
    }
    @Delete(':id')
    remove(@Param('id') id :string, @Res() res:Response) :void {
       res.status(HttpStatus.NO_CONTENT).json(this.UsuarioService.remove(parseInt(id))); // No content - sem exibição de resposta
    }
}
 