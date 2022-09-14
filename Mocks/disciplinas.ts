import { Disciplina, Unidade } from "../types";

const uniEne : Unidade = {
  codigo: "ENE",
  nome: "Depto de Engenharia Elétrica"
};

let cpe : Disciplina = {
  cargaHoraria: {
    pratica: 2,
    teorica: 2,
    total: 4
  },
  codigo: "ENE0334",
  modalidade: "PRESENCIAL",
  nome: "COMPUTACAO PARA ENGENHARIA",
  preRequisitos: [], 
  unidade: uniEne,
};

let aed : Disciplina = {
  cargaHoraria: {
    pratica: 2,
    teorica: 2,
    total: 4
  },
  codigo: "ENE0013",
  modalidade: "PRESENCIAL",
  nome: "ALGORITMOS E ESTRUTURA DE DADOS",
  preRequisitos: [cpe], 
  unidade: uniEne
};
let sd : Disciplina = {
  cargaHoraria: {
    pratica: 2,
    teorica: 2,
    total: 4
  },
  codigo: "ENE0039",
  modalidade: "PRESENCIAL",
  nome: "SISTEMAS DIGITAIS",
  preRequisitos: [aed], 
  unidade: uniEne
};

export const disciplinas: Disciplina[] = [cpe, aed, sd];
