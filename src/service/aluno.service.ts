
import { Aluno } from '../model/aluno.model'

export class AlunoService {
    alunos: Aluno[] = [
        new Aluno(1, "lucas", '11221', '30/03/199'),
        new Aluno(2, "a", '2', '2/2/1299'),
        new Aluno(3, "v", '2', '2/1/199'),
    ];

    obterTodos(): Aluno[] {
        return this.alunos;
    }

    obterUm(id: number): Aluno {
        return this.alunos[0];
    }


    criar(aluno: Aluno) {
        this.alunos.push(aluno)
    }

}