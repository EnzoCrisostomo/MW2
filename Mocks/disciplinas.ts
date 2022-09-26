import { Disciplina, Unidade } from "../types";

function criaDisciplina(
  teorica: number,
  pratica: number,
  total: number,
  codigo: string,
  modalidade: string,
  nome: string,
  preRequisitos: Disciplina[],
  unidade: {
      codigo: string;
      nome: string;
  }
): Disciplina {
  const disciplina: Disciplina = {
      cargaHoraria: {
          pratica,
          teorica,
          total,
      },
      codigo,
      modalidade,
      nome,
      preRequisitos,
      unidade,
  };
  return disciplina;
}

const MAT: Unidade = {
  codigo: "MAT",
  nome: "Departamento de Matemática",
};

let c1 = criaDisciplina(2, 4, 6, "MAT0025", "PRESENCIAL", "CÁLCULO 1", [], MAT);
let c2 = criaDisciplina(4, 2, 6, "MAT0026", "PRESENCIAL", "CÁLCULO 2", [c1], MAT);
let c3 = criaDisciplina(2, 4, 6, "MAT0027", "PRESENCIAL", "CÁLCULO 3", [c2], MAT);
let ial = criaDisciplina(2, 2, 4, "MAT0031", "PRESENCIAL", "INTRODUCAO A ALGEBRA LINEAR", [], MAT);

const EST: Unidade = {
  codigo: "EST",
  nome: "Depto de Estatística",
};

let pe = criaDisciplina(2, 2, 4, "EST0023", "PRESENCIAL", "PROBABILIDADE E ESTATÍSTICA", [c1], EST);

const ENE: Unidade = {
    codigo: "ENE",
    nome: "Depto de Engenharia Elétrica",
};

let cpe = criaDisciplina(2, 2, 4, "ENE0334", "PRESENCIAL", "COMPUTACAO PARA ENGENHARIA", [], ENE);
let aed = criaDisciplina(2, 2, 4, "ENE0013", "PRESENCIAL", "ALGORITMOS E ESTRUTURA DE DADOS", [cpe], ENE);
let sd = criaDisciplina(4, 0, 4, "ENE0039", "PRESENCIAL", "SISTEMAS DIGITAIS", [cpe], ENE);
let labsd = criaDisciplina(0, 4, 4, "ENE0040", "PRESENCIAL", "LABORATÓRIO DE SISTEMAS DIGITAIS", [cpe], ENE);
let sismic = criaDisciplina(4, 0, 4, "ENE0056", "PRESENCIAL", "SISTEMAS MICROPROCESSADOS", [sd, labsd], ENE);
let labsismic = criaDisciplina(0, 4, 4, "ENE0058", "PRESENCIAL", "LABORATÓRIO DE SISTEMAS MICROPROCESSADOS", [sd, labsd], ENE);
let fund1 = criaDisciplina(4, 0, 4, "ENE0274", "PRESENCIAL", "FUNDAMENTOS DE REDES", [pe, aed], ENE);

export const disciplinas: Disciplina[] = [cpe, aed, sd, labsd, sismic, labsismic, fund1, c1, c2, c3, ial, pe];
