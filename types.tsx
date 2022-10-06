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
    ModalDisciplina: Disciplina;
    ModalTurma: Turma;
    ModalTurmaMatricula: Matricula;
    NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
    NativeStackScreenProps<RootStackParamList, Screen>;

export type ModalDisciplinaProps = NativeStackScreenProps<
    RootStackParamList,
    "ModalDisciplina"
>;
export type ModalTurmaProps = NativeStackScreenProps<
    RootStackParamList,
    "ModalTurma"
>;
export type ModalTurmaMatriculaProps = NativeStackScreenProps<
    RootStackParamList,
    "ModalTurmaMatricula"
>;

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
    totalMinima: number;
    totalObrigatoria: number;
    optativaMinima: number;
    eletivaMaxima: number;
    maximaPorPeriodo: number;
};

export type Unidade = {
    codigo: string;
    nome: string;
};

export type Localidade = {
    endereco: string;
};

export type HorarioSemanal = {
    dia: string;
    horaInicio: string;
    horaFim: string;
    local: Localidade;
};

export type Professor = {
    nome: string;
};

export type CargaHorariaDisciplina = {
    total: number;
    teorica: number;
    pratica: number;
};

export type PrazoConclusao = {
    minimo: number;
    medio: number;
    maximo: number;
};

export type PeriodoLetivo = {
    ano: number;
    numero: number;
};

export type Coordenador = {
    matricula: string;
    nome: string;
    email: string;
};

export type Turma = {
    codigo: string;
    vagasOfertadas: number;
    vagasOcupadas: number;
    sede: string;
    horarios: HorarioSemanal[];
    professores: Professor[];
    periodo: PeriodoLetivo;
    disciplina: Disciplina;
};

export type Curso = {
    codigo: string;
    nome: string;
    grau: string;
    modalidade: string;
    turno: string;
    coordenador: Coordenador;
    unidades: Unidade[];
    curriculos: EstruturaCurricular[];
};

export type Aluno = {
    matricula: string;
    nome: string;
    email: string;
    ira: number;
    curriculo: string;
    status: boolean;
    periodoIngresso: PeriodoLetivo;
    curso: Curso;
};

export enum statusMatricula {
    EMAGUARDO = "EMAGUARDO",
    SOLICITADO = "SOLICITADO",
    INDEFERIDO = "INDEFERIDO",
    PROCESSANDO = "PROCESSANDO",
    DEFERIDO = "DEFERIDO",
}

export type Matricula = {
    status: statusMatricula;
    prioridade: number;
    motivoIndeferimento: string;
    aluno: Aluno;
    turma: Turma;
};

export type HistoricoAcademico = {
    aluno: Aluno;
    disciplinas: DisciplinaHistoricoAcademico[];
};

export type Disciplina = {
    codigo: string;
    nome: string;
    modalidade: string;
    cargaHoraria: CargaHorariaDisciplina;
    unidade: Unidade;
    preRequisitos: Disciplina[];
};

export type DisciplinaHistoricoAcademico = {
    status: string;
    mencao: string;
    periodo: PeriodoLetivo;
    disciplina: Disciplina;
};

export type DisciplinaEstruturaCurricular = {
    tipo: string;
    nivel: number;
    disciplina: Disciplina;
};

export type EstruturaCurricular = {
    codigo: string;
    status: string;
    periodoLetivoEntradaVigor: PeriodoLetivo;
    disciplinas: Disciplina[];
    prazoConclusao: PrazoConclusao;
    cargaHoraria: CargaHorariaCurso;
};

export enum TipoUsuario {
    ALUNO,
    COORDENADOR,
}
