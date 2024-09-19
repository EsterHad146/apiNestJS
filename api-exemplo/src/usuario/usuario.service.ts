//Exemplo prático do CRUD
import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
    private usuarioBd :Usuario[] = [
        {id: 1, nome:"Rosi", email:"rosi@teste.com", senha:"rosi"},
        {id: 2, nome:"Paula", email:"paula@teste.com", senha:"123"},
        {id: 3, nome:"Tiago", email:"tiago@teste.com", senha:"456"},
    ]

    findAll(){
        try {
            return {status:200, registro: this.usuarioBd}
        } catch (error) {
            return error
        }
    }
    findOne(id :number){
        try {
            return this.usuarioBd.find(u=>u.id==id); //u "usuario" , id "id registrado"
        } catch (error) {
            return {status: 400, message:`Registro ID:${id} não encontrado. Erro:${error}`}
        }
    }
    create(dados :any){
        try {
            dados.id= this.usuarioBd[this.usuarioBd.length-1].id +1
            this.usuarioBd.push(dados);
            return {status:201, message: `Usuário Inserido`, registro:dados}
        } catch (error) {
            return {status:400, message:`Registro não inserido.Erro:${error}`}
        }
    }
    update(id :number, dados :any){
        try {
            const index = this.usuarioBd.findIndex(u => u.id === id);
            if (index>=0) {
                this.usuarioBd[index] = {id, ...dados};
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
            const index = this.usuarioBd.findIndex(u => u.id === id);    
            if(index >=0){
                this.usuarioBd.splice(index,1)
                return{status:200, message: `Usuário Id${id} removido com sucesso`}
            }else{
                return{status:400, message:`Erro na remoção de usuário`}
            }      
        } catch (error) {
            return {status:400, message:`Erro na exclusão de usuário.Erro:${error}`}
            
        }
    }
}

