import { Matricula } from "../types";
import { turmas } from "./turmas";
import { alunos } from "./alunos";

export const MatriculasAlunos: Matricula[] = [
    {
        status: "PreMatricula",
        prioridade: 1,
        motivoIndeferimento: "-",
        aluno: alunos[0],
        turma: turmas[0]
    },
  ];