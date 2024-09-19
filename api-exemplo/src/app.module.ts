import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsuarioController} from './usuario/usuario.controller'
import { UsuarioService } from './usuario/usuario.service';
import { FornecedorController } from './fornecedor/fornecedor.controller';
import { FornecedorService } from './fornecedor/fornecedor.service';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';

@Module({
  imports: [],
  controllers: [AppController, UsuarioController, FornecedorController, ProdutoController],
  providers: [AppService, UsuarioService, FornecedorService, ProdutoService],
})
export class AppModule {}
