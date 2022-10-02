import {
  DisciplinaHistoricoAcademico,
  PeriodoLetivo,
  Disciplina,
} from "../types";
import { disciplinas } from "./disciplinas";

function criaDisciplinaHistorico(
  disciplina: Disciplina,
  status: string,
  mencao: string,
  periodo: PeriodoLetivo
): DisciplinaHistoricoAcademico {
  const disciplinaHistorico: DisciplinaHistoricoAcademico = {
    status: status,
    mencao: mencao,
    periodo: periodo,
    disciplina: disciplina,
  };
  return disciplinaHistorico;
}

const periodo2022_1: PeriodoLetivo = {
  ano: 2021,
  numero: 1,
};

let arrayD: DisciplinaHistoricoAcademico[] = disciplinas.map((disciplina) => {
  let d: DisciplinaHistoricoAcademico = {
    disciplina: disciplina,
    status: "Aprovado",
    mencao: "MS",
    periodo: periodo2022_1,
  };

  return d;
});

export const disciplinasHistorico: DisciplinaHistoricoAcademico[] = arrayD;
