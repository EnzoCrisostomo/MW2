import { Disciplina, Turma, HorarioSemanal } from "../types";
import { disciplinasObj } from "./disciplinas";

function criaTurma(
    sede: string,
    professores: string[],
    codigo: string,
    disciplina: Disciplina,
    anoPeriodo: number,
    numPeriodo: number,
    vagasOfertadas: number,
    vagasOcupadas: number,
    horarios: HorarioSemanal[]
): Turma {
    return {
        sede,
        professores: professores.map((item: string) => {
            return { nome: item };
        }),
        codigo,
        disciplina,
        periodo: { ano: anoPeriodo, numero: numPeriodo },
        vagasOfertadas,
        vagasOcupadas,
        horarios,
    };
}

export const turmas : Turma[] = [
        //cpe
        criaTurma("Darcy", ["Daniel Guerreiro"], "A", disciplinasObj.cpe, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Vinicius"], "B", disciplinasObj.cpe, 2022, 2, 10, 4, 
        [{dia: "QUA", horaInicio: "10:00", horaFim: "11:50", local: {endereco: "LCCC2"}},
         {dia: "SEX", horaInicio: "10:00", horaFim: "11:50", local: {endereco: "LCCC3"}}
        ]),
        //aed
        criaTurma("Darcy", ["Daniel Guerreiro"], "A", disciplinasObj.aed, 2022, 2, 10, 8, 
        [{dia: "SEG", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC2"}},
         {dia: "QUA", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC2"}}
        ]),
        criaTurma("Darcy", ["Vinicius"], "B", disciplinasObj.aed, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LabRedes"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LabRedes"}}
        ]),
        //sd
        criaTurma("Darcy", ["João Luiz"], "A", disciplinasObj.sd, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "SG11 A1 31/2"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "SG11 A1 31/2"}}
        ]),
        criaTurma("Darcy", ["Café"], "B", disciplinasObj.sd, 2022, 2, 10, 8, 
        [{dia: "SEG", horaInicio: "16:00", horaFim: "17:50", local: {endereco: "SG11 A1 31/2"}},
         {dia: "QUA", horaInicio: "16:00", horaFim: "17:50", local: {endereco: "SG11 A1 31/2"}}
        ]),
        criaTurma("Darcy", ["Eduardo Peixoto"], "C", disciplinasObj.sd, 2022, 2, 10, 8, 
        [{dia: "QUA", horaInicio: "14:00", horaFim: "15:50", local: {endereco: "SG11 A1 31/2"}},
         {dia: "SEX", horaInicio: "14:00", horaFim: "15:50", local: {endereco: "SG11 A1 31/2"}}
        ]),
        //labsd
        criaTurma("Darcy", ["Eduardo Peixoto"], "A", disciplinasObj.labsd, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Eduardo Peixoto"], "B", disciplinasObj.labsd, 2022, 2, 10, 8, 
        [{dia: "SEX", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["João Luiz"], "C", disciplinasObj.labsd, 2022, 2, 10, 8, 
        [{dia: "SEG", horaInicio: "16:00", horaFim: "17:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["João Luiz"], "D", disciplinasObj.labsd, 2022, 2, 10, 8, 
        [{dia: "QUA", horaInicio: "16:00", horaFim: "17:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Molinaro"], "E", disciplinasObj.labsd, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC5"}}
        ]),
        criaTurma("Darcy", ["Molinaro"], "F", disciplinasObj.labsd, 2022, 2, 10, 8, 
        [{dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC5"}}
        ]),
        //sismic
        criaTurma("Darcy", ["Ricardo Zelenosvki"], "A", disciplinasObj.sismic, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "10:00", horaFim: "11:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "10:00", horaFim: "11:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Eduardo Peixoto"], "B", disciplinasObj.sismic, 2022, 2, 10, 8, 
        [{dia: "QUA", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "SEX", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        //lab sismic
        criaTurma("Darcy", ["Ricardo Zelenosvki"], "A", disciplinasObj.labsismic, 2022, 2, 10, 8, 
        [{dia: "SEG", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Ricardo Zelenosvki"], "B", disciplinasObj.labsismic, 2022, 2, 10, 8, 
        [{dia: "QUA", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Eduardo Peixoto"], "C", disciplinasObj.labsismic, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Eduardo Peixoto"], "D", disciplinasObj.labsismic, 2022, 2, 10, 8, 
        [{dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Rosevaldo"], "E", disciplinasObj.labsismic, 2022, 2, 10, 8, 
        [{dia: "SEX", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Rosevaldo"], "F", disciplinasObj.labsismic, 2022, 2, 10, 8, 
        [{dia: "SEX", horaInicio: "10:00", horaFim: "11:50", local: {endereco: "LCCC1"}}
        ]),
        //fund 1
        criaTurma("Darcy", ["Georges"], "A", disciplinasObj.fund1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Marcos silva"], "B", disciplinasObj.fund1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "14:00", horaFim: "15:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "14:00", horaFim: "15:50", local: {endereco: "LCCC1"}}
        ]),
        //c1
        criaTurma("Darcy", ["Daniel Guerreiro"], "A", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "B", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "C", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "D", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "E", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "F", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "G", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "H", disciplinasObj.c1, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        //c2
        criaTurma("Darcy", ["Silva Santo"], "A", disciplinasObj.c2, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "B", disciplinasObj.c2, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "C", disciplinasObj.c2, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "D", disciplinasObj.c2, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "E", disciplinasObj.c2, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "F", disciplinasObj.c2, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        //c3
        criaTurma("Darcy", ["Daniel Guerreiro"], "A", disciplinasObj.c3, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "B", disciplinasObj.c3, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "C", disciplinasObj.c3, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "D", disciplinasObj.c3, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
        ]),
        //ial
        criaTurma("Darcy", ["Daniel Guerreiro"], "A", disciplinasObj.ial, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "B", disciplinasObj.ial, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "C", disciplinasObj.ial, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        //pe
        criaTurma("Darcy", ["Daniel Guerreiro"], "A", disciplinasObj.pe, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "B", disciplinasObj.pe, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "C", disciplinasObj.pe, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ]),
        criaTurma("Darcy", ["Daniel Guerreiro"], "D", disciplinasObj.pe, 2022, 2, 10, 8, 
        [{dia: "TER", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}},
         {dia: "QUI", horaInicio: "08:00", horaFim: "09:50", local: {endereco: "LCCC1"}}
        ])];