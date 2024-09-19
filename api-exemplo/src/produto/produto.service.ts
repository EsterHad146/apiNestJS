import { Injectable } from '@nestjs/common';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {
    private ProdutoBd :Produto[] = [
        {id: 1, codBarras:22153, nome:"Loratadina", preco:"5,90"},
        {id: 2, codBarras:15678, nome:"Dipirona", preco:"4,50"},
        {id: 3, codBarras:26549, nome:"Dorflex", preco:"11,98"},
    ]

    findAll(){
        try {
            return {status:200, registro: this.ProdutoBd}
        } catch (error) {
            return error
        }
    }
    findOne(id :number){
        try {
            return this.ProdutoBd.find(p=>p.id==id); //p "usuario" , id "id registrado"
        } catch (error) {
            return {status: 400, message:`Registro ID:${id} não encontrado. Erro:${error}`}
        }
    }
    create(dados :any){
        try {
            dados.id= this.ProdutoBd[this.ProdutoBd.length-1].id +1
            this.ProdutoBd.push(dados);
            return {status:201, message: `Usuário Inserido`, registro:dados}
        } catch (error) {
            return {status:400, message:`Registro não inserido.Erro:${error}`}
        }
    }
    update(id :number, dados :any){
        try {
            const index = this.ProdutoBd.findIndex(p => p.id === id);
            if (index>=0) {
                this.ProdutoBd[index] = {id, ...dados};
                return{status:200, message: `Usuário Atualizado`, registro:dados}
            }else{
                return{status:400, message:`Erro na atualização de usuário`}
            }
        } catch (error) {
            return {status:400, message:`Erro na atualização de usuário.Erro:${error}`}
        }
    }
    remove(id: number){
        try {
            const index = this.ProdutoBd.findIndex(p => p.id === id);    
            if(index >=0){
                this.ProdutoBd.splice(index,1)
                return{status:200, message: `Usuário Id${id} removido com sucesso`}
            }else{
                return{status:400, message:`Erro na remoção de usuário`}
            }      
        } catch (error) {
            return {status:400, message:`Erro na exclusão de usuário.Erro:${error}`}
            
        }
    }
}
