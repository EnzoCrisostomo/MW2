import { Matricula, statusMatricula } from "../types";
import { turmas } from "./turmas";
import { alunos } from "./alunos";

export let MatriculasAlunos: Matricula[] = [
    {
        status: statusMatricula.DEFERIDO,
        prioridade: 1,
        motivoIndeferimento: "-",
        aluno: alunos[0],
        turma: turmas[0]
    },
    {
        status: statusMatricula.DEFERIDO,
        prioridade: 1,
        motivoIndeferimento: "-",
        aluno: alunos[0],
        turma: turmas[0]
    },
  ];