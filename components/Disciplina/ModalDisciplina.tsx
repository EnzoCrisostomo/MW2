import { useState } from "react";
import {
    StyleSheet,
    Alert,
    Pressable,
    Modal,
    FlatList,
    ListRenderItem,
} from "react-native";
import { Text, View, TextInput, Botao } from "../Themed";
import { Disciplina, Turma, ModalDisciplinaProps } from "../../types";
import { turmas } from "../../Mocks/turmas";
import CardTurma from "../Turma/CardTurma";
import { Feather } from "@expo/vector-icons";

export default function ModalDisciplina({
    navigation,
    route,
}: ModalDisciplinaProps) {
    const disciplina = route.params;

    const renderItem: ListRenderItem<Turma> = ({ item }) => (
        <CardTurma
            turma={item}
            openModal={() => {
                navigation.navigate("ModalTurma", item);
            }}
        />
    );

    return (
        <View style={styles.centeredViewModal}>
            <View card style={styles.infoDisciplina}>
                <Text
                    adjustsFontSizeToFit
                    style={styles.titulo}
                    numberOfLines={2}
                >
                    {disciplina.nome}
                </Text>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={2}
                    style={styles.texto}
                >
                    <Text>{disciplina.unidade.codigo} - </Text>
                    <Text>{disciplina.unidade.nome}</Text>
                </Text>
                <View style={styles.line} />
                <Text style={styles.texto}>Carga Horária:</Text>
                <Text adjustsFontSizeToFit style={styles.subTexto}>
                    <Text>Pratica: {disciplina.cargaHoraria.pratica} </Text>
                    <Text>Teórica: {disciplina.cargaHoraria.teorica}</Text>
                </Text>
                <View style={styles.line} />
                {disciplina.preRequisitos.length > 0 && (
                    <>
                        <Text adjustsFontSizeToFit style={styles.texto}>
                            Pré-Requesitos:
                        </Text>
                        {disciplina.preRequisitos.map((disciplina, index) => (
                            <Text
                                key={index}
                                adjustsFontSizeToFit
                                style={styles.subTexto}
                                numberOfLines={1}
                            >
                                <Text>{disciplina.codigo} - </Text>
                                <Text>{disciplina.nome}</Text>
                            </Text>
                        ))}
                        <View style={styles.line} />
                    </>
                )}
                <Text style={styles.texto}>Turmas</Text>
            </View>
            <FlatList<Turma>
                style={styles.list}
                data={turmas.filter((turma) => {
                    return turma.disciplina === disciplina;
                })}
                keyExtractor={(item, index) => {
                    return item.codigo;
                }}
                renderItem={renderItem}
                ItemSeparatorComponent={listSeparator}
                ListFooterComponent={listSpacer}
            ></FlatList>
        </View>
    );
}

function listSpacer() {
    return (
        <View style={styles.listSpace}>
            <View style={styles.thinLine}></View>
            <Feather name="x" />
            <View style={styles.thinLine}></View>
        </View>
    );
}

function listSeparator() {
    return <View style={styles.separator} />;
}

const styles = StyleSheet.create({
    centeredViewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    infoDisciplina: {
        borderRadius: 5,
        width: "100%",
        paddingHorizontal: "5%",
        paddingVertical: "3%",
    },
    titulo: {
        textAlign: "center",
        fontSize: 22,
        fontWeight: "600",
    },
    texto: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "400",
    },
    subTexto: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "200",
    },
    list: {
        width: "95%",
        paddingVertical: 5,
    },
    separator: {
        marginVertical: 3,
    },
    line: {
        marginVertical: 5,
        height: StyleSheet.hairlineWidth * 2,
        width: "70%",
        backgroundColor: "black",
        alignSelf: "center",
    },
    listSpace: {
        marginVertical: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    thinLine: {
        height: StyleSheet.hairlineWidth,
        width: "40%",
        backgroundColor: "black",
    },
});
