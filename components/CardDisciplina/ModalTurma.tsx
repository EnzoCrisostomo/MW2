import { useState } from "react";
import {
    StyleSheet,
    Alert,
    Pressable,
    ListRenderItem,
} from "react-native";
import { Text, View, TextInput, Botao } from "../Themed";
import { Disciplina, Turma, ModalTurmaProps } from "../../types";
import { turmas } from "../../Mocks/turmas";
import CardTurma from "./CardTurma";
import { Feather } from "@expo/vector-icons";

export default function ModalTurma({
    navigation,
    route,
}: ModalTurmaProps) {
    const turma = route.params;


    return (
        <View style={styles.centeredViewModal}>
            <View card style={styles.infoDisciplina}>
                <Text
                    adjustsFontSizeToFit
                    style={styles.titulo}
                    numberOfLines={2}
                >
                    {turma.codigo}
                </Text>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={2}
                    style={styles.texto}
                >
                    <Text>{turma.disciplina.nome} - </Text>
                    <Text>{turma.periodo.ano}</Text>
                </Text>
                <View style={styles.separator}></View>
                <Text style={styles.texto}>Carga Horária:</Text>
                <Text adjustsFontSizeToFit style={styles.subTexto}>
                    <Text>Pratica: {turma.periodo.ano} </Text>
                    <Text>Teorica: {turma.periodo.ano}</Text>
                </Text>
                <View style={styles.separator}></View>
                {turma.periodo.ano > 0 && (
                    <>
                        <Text adjustsFontSizeToFit style={styles.texto}>
                            Pré-Requesitos:
                        </Text>
                    </>
                )}
            </View>
        </View>
    );
}

function listSpacer() {
    return (
        <View style={styles.listSpace}>
            <View style={styles.thinLine}></View>
            <Feather name="x"/>
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
        fontWeight: "500",
    },
    texto: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "300",
    },
    subTexto: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: "300",
    },
    list: {
        width: "95%",
        paddingVertical: 5,
    },
    separator: {
        marginVertical: 3,
    },
    listSpace: {
        marginVertical: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    thinLine:{
        height: StyleSheet.hairlineWidth,
        width: "40%",
        backgroundColor: "black",
    }
});