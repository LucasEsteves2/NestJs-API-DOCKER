import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { get } from "http";
import {Aluno } from '../model/aluno.model'

@Controller('aluno')
export class AlunoController {



    @Get()
    obeterTodos(): Aluno[] {
        return this.alunos;
    }


    @Get(':id')
    obterUm(@Param() params): Aluno {
        return this.alunos[`${params.id}`];
    }

    @Post()
    criar(@Body() aluno: Aluno)  {
       
        aluno.id = 100;
        this.alunos.push(aluno);

    }

    @Put()
    alterar(@Body() aluno: Aluno): Aluno {
       return aluno
    }

    @Delete(':id')
    deletar(@Param() params) {
        this.alunos.pop();

    }

}
