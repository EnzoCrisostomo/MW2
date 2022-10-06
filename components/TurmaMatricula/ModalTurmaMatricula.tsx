import { useState, useContext } from "react";
import { StyleSheet, Alert, Pressable, ListRenderItem } from "react-native";
import { Text, View, TextInput, Botao } from "../Themed";
import {
    Disciplina,
    Turma,
    ModalTurmaMatriculaProps,
    statusMatricula,
} from "../../types";
import { turmas } from "../../Mocks/turmas";
import CardTurma from "./CardTurmaMatricula";
import { Feather } from "@expo/vector-icons";
import { disciplinas } from "../../Mocks/disciplinas";
import { AuthContext } from "../../Store";

export default function ModalTurmaMatricula({ navigation, route }: ModalTurmaMatriculaProps) {
    const { updateMatricula, aluno, matriculas } = useContext(AuthContext);
    const turma = route.params.turma;
    const [prioridade, setPrioridade] = useState(route.params.prioridade);

    function cadastrarMatricula() {
        if (prioridade < 1 || prioridade > 5) {
            alert("Selecione uma prioridade!");
            return;
        }
        if (aluno){
            updateMatricula({
                aluno,
                motivoIndeferimento: "",
                status: statusMatricula.EMAGUARDO,
                turma,
                prioridade,
            });
            navigation.navigate("Root", {
                screen: "TabMatriculas",
            });
        }
    }

    return (
        <View style={styles.centeredViewModal}>
            <View transparent style={styles.infoTurma}>
                <Text
                    adjustsFontSizeToFit
                    style={styles.titulo}
                    numberOfLines={2}
                >
                    {turma.disciplina.nome} - {turma.codigo}
                </Text>
                <View style={styles.separador} />
                <ItemPerfil
                    titulo="Código: "
                    conteudo={turma.disciplina.codigo}
                />
                <ItemPerfil
                    titulo="Carga Horária: "
                    conteudo={[
                        `Prática: ${
                            turma.disciplina.cargaHoraria.pratica * 15
                        }h`,
                        `Teórica: ${
                            turma.disciplina.cargaHoraria.teorica * 15
                        }h`,
                        `Total: ${turma.disciplina.cargaHoraria.total * 15}h`,
                    ]}
                />

                <ItemPerfil
                    titulo="Pré Requisitos: "
                    conteudo={
                        turma.disciplina.preRequisitos.length > 0
                            ? turma.disciplina.preRequisitos.map(
                                  (disciplina) =>
                                      `${disciplina.codigo} - ${disciplina.nome}`
                              )
                            : "Nenhum"
                    }
                />

                <ItemPerfil
                    titulo="Período: "
                    conteudo={`${turma.periodo.ano}/${turma.periodo.numero}`}
                />
                <ItemPerfil titulo="Turma" conteudo={turma.codigo}></ItemPerfil>
                <ItemPerfil
                    titulo={
                        turma.professores.length > 1
                            ? "Professores: "
                            : "Professor: "
                    }
                    conteudo={turma.professores.map((prof) => prof.nome)}
                />
                <ItemPerfil
                    titulo="Horários: "
                    conteudo={turma.horarios.map(
                        (hora) =>
                            `${hora.local.endereco} - ${hora.dia}: ${hora.horaInicio} - ${hora.horaFim}`
                    )}
                />
                <Text numberOfLines={1} style={styles.tituloInfo}>
                    Prioridade:
                </Text>
                <View transparent style={styles.botoes}>
                    {[
                        { color: "green", textColor: "black" },
                        { color: "lightgreen", textColor: "black" },
                        { color: "yellow", textColor: "black" },
                        { color: "orange", textColor: "black" },
                        { color: "red", textColor: "black" },
                    ].map((item, index) => {
                        index++;
                        return (
                            <Botao
                                textColor={
                                    prioridade === index
                                        ? item.textColor
                                        : undefined
                                }
                                bgColor={
                                    prioridade === index
                                        ? item.color
                                        : undefined
                                }
                                key={index}
                                onPress={() => {
                                    setPrioridade(index);
                                }}
                            >
                                {index.toString()}
                            </Botao>
                        );
                    })}
                </View>
                <View style={styles.separador} />
                <View transparent style={styles.botoes}>
                    <Botao
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        Cancelar
                    </Botao>
                    <Botao onPress={cadastrarMatricula}>Confirmar</Botao>
                </View>
            </View>
        </View>
    );
}

function ItemPerfil(props: { titulo: string; conteudo: string | string[] }) {
    return (
        <>
            <Text numberOfLines={1} style={styles.tituloInfo}>
                {props.titulo}
            </Text>
            {!Array.isArray(props.conteudo) ? (
                <Text numberOfLines={1} style={styles.textoInfo}>
                    {props.conteudo}
                </Text>
            ) : (
                props.conteudo.map((item: string, index: number) => (
                    <Text
                        key={index}
                        numberOfLines={1}
                        style={styles.textoInfo}
                    >
                        {item}
                    </Text>
                ))
            )}
            <View style={styles.separador} />
        </>
    );
}

const styles = StyleSheet.create({
    centeredViewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    infoTurma: {
        borderRadius: 5,
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: "3%",
    },
    titulo: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "500",
    },
    tituloInfo: {
        fontWeight: "500",
        fontSize: 18,
    },
    textoInfo: {
        fontSize: 16,
        fontWeight: "200",
    },
    separador: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: 4,
    },
    botoes: {
        flexDirection: "row",
        alignSelf: "center",
        width: "90%",
        justifyContent: "space-around",
        padding: 10,
    },
    prioridade: {},
});
