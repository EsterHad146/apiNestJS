import { Injectable } from '@nestjs/common';
import { Fornecedor } from './fornecedor.entity';

@Injectable()
export class FornecedorService {
    private fornecedorBd :Fornecedor[] = [
        {id: 1, nome:"Paulo", cnpj:"121213-0", email:"paulo@teste.com", contato:"35235251"},
        {id: 2, nome:"Ricardo", cnpj:"121213-0", email:"ricardo@teste.com", contato:"31214259"},
        {id: 3, nome:"Mariana", cnpj:"121213-0", email:"mariana@teste.com", contato:"30422518"}
    ]

    findAll(){
        try {
            return {status:200, registro: this.fornecedorBd}
        } catch (error) {
            return error
        }
    }
    findOne(id :number){
        try {
            return this.fornecedorBd.find(f=>f.id==id); //f "fornecedor" , id "id registrado"
        } catch (error) {
            return {status: 400, message:`Registro ID:${id} não encontrado. Erro:${error}`}
        }
    }
    create(dados :any){
        try {
            dados.id= this.fornecedorBd[this.fornecedorBd.length-1].id +1
            this.fornecedorBd.push(dados);
            return {status:201, message: `Usuário Inserido`, registro:dados}
        } catch (error) {
            return {status:400, message:`Registro não inserido.Erro:${error}`}
        }
    }
    update(id :number, dados :any){
        try {
            const index = this.fornecedorBd.findIndex(f => f.id === id);
            if (index>=0) {
                this.fornecedorBd[index] = {id, ...dados};
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
            const index = this.fornecedorBd.findIndex(f => f.id === id);    
            if(index >=0){
                this.fornecedorBd.splice(index,1)
                return{status:200, message: `Usuário Id${id} removido com sucesso`}
            }else{
                return{status:400, message:`Erro na remoção de usuário`}
            }      
        } catch (error) {
            return {status:400, message:`Erro na exclusão de usuário.Erro:${error}`}
            
        }
    }
}
