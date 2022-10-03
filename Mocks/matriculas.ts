import { Matricula } from "../types";
import { turmas } from "./turmas";
import { alunos } from "./alunos";

export let MatriculasAlunos: Matricula[] = [
    {
        status: "Matricula",
        prioridade: 1,
        motivoIndeferimento: "-",
        aluno: alunos[0],
        turma: turmas[0]
    },
  ];