import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { get } from "http";


@Controller('aluno')
export class AlunoController {

    @Get()
    obeterTodos(): string {
        return 'lista todos os produtos';
    }


    @Get(':id')
    obterUm(@Param() params): string {
        return `lista todos os produtos ${params.id}`;
    }



    @Post()
    criar(@Body() aluno): string {
        console.log(aluno);
        return `produto criado`;

        

    }















}

