/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
    CompositeScreenProps,
    NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParamList {}
    }
}

export type RootStackParamList = {
    Root: NavigatorScreenParams<RootTabParamList> | undefined;
    Modal: undefined;
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type RootTabParamList = {
    TabMatriculas: undefined;
    TabOferta: undefined;
    TabHistorico: undefined;
    TabPerfil: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> =
    CompositeScreenProps<
        BottomTabScreenProps<RootTabParamList, Screen>,
        NativeStackScreenProps<RootStackParamList>
    >;

//Tipos específicos do MW2

export type CargaHorariaCurso = {
    totalMinima: Number;
    totalObrigatoria: Number;
    optativaMinima: Number;
    eletivaMaxima: Number;
    maximaPorPeriodo: Number;
};

export type Unidade = {
    codigo: String;
    nome: String;
};

export type Localidade = {
    endereco: String;
};

export type HorarioSemanal = {
    dia: String;
    horaInicio: String;
    horaFim: String;
    local: Localidade;
};

export type Professor = {
    nome: String;
};

export type CargaHorariaDisciplina = {
    total: Number;
    teorica: Number;
    pratica: Number;
};

export type PrazoConclusao = {
    minimo: Number;
    medio: Number;
    maximo: Number;
};

export type PeriodoLetivo = {
    ano: Number;
    numero: Number;
};

export type Coordenador = {
    matricula: String;
    nome: String;
    email: String;
};

export type Turma = {
    codigo: String;
    vagasOfertadas: Number;
    vagasOcupadas: Number;
    sede: String;
    horarios: HorarioSemanal[];
    professores: Professor[];
    periodo: PeriodoLetivo;
    disciplina: Disciplina;
};

export type Curso = {
    codigo: String;
    nome: String;
    grau: String;
    modalidade: String;
    turno: String;
    coordenador: Coordenador;
    unidades: Unidade[];
    curriculos: EstruturaCurricular[];
};

export type Aluno = {
    matricula: String;
    nome: String;
    email: String;
    ira: Number;
    curriculo: String;
    status: Boolean;
    periodoIngresso: PeriodoLetivo;
    curso: Curso;
};

export type Matricula = {
    status: String;
    prioridade: Number;
    motivoIndeferimento: String;
    aluno: Aluno;
    turma: Turma;
};

export type HistoricoAcademico = {
    aluno: Aluno;
    disciplinas: Disciplina[];
};

export type Disciplina = {
    codigo: String;
    nome: String;
    modalidade: String;
    cargaHoraria: CargaHorariaDisciplina;
    unidade: Unidade;
    preRequisitos: Disciplina[];
};

export type DisciplinaHistoricoAcademico = {
    status: String;
    mencao: String;
    periodo: PeriodoLetivo;
    disciplina: Disciplina;
};

export type DisciplinaEstruturaCurricular = {
    tipo: String;
    nivel: Number;
    disciplina: Disciplina;
};

export type EstruturaCurricular = {
    codigo: String;
    status: String;
    periodoLetivoEntradaVigor: PeriodoLetivo;
    disciplinas: Disciplina[];
    prazoConclusao: PrazoConclusao;
    cargaHoraria: CargaHorariaCurso;
};
