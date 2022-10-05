import { Curso } from "../types"
import { disciplinas } from "./disciplinas";

const engEletrica: Curso = {
    codigo: "",
    nome: "Engenharia Elétrica",
    grau: "String",
    modalidade: "String",
    turno: "String",
    coordenador: { email: "", matricula: "", nome: "" },
    unidades: [],
    curriculos: [],
};

const engRedes: Curso = {
    "codigo": "6351",
    "nome": "ENGENHARIA DE REDES DE COMUNICAÇÃO",
    "modalidade": "PRESENCIAL",
    "grau": "BACHAREL",
    "turno": "DIURNO",
    "coordenador": {
        "nome": "DANIEL GUERREIRO E SILVA",
        "matricula": "1234567",
        "email": "danielgs@ene.unb.br",
    },
    "unidades": [

        {
            "codigo": "ENE",
            "nome": "UNIDADE DE ENGENHARIA ELÉTRICA"
        },

    ],
    "curriculos": [
        {
            "codigo": "6351/2",
            "status": "Ativo",
            "disciplinas": disciplinas,
            "periodoLetivoEntradaVigor": {
                "ano": 2020,
                "numero": 1
            },
            "cargaHoraria": {
                "totalMinima": 3750,
                "totalObrigatoria": 2640,
                "optativaMinima": 1110,
                "eletivaMaxima": 360,
                "maximaPorPeriodo": 450
            },
            "prazoConclusao": {
                "minimo": 10,
                "medio": 10,
                "maximo": 20
            }
        }
    ]
}

export default {engRedes, engEletrica};