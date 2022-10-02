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
import { Disciplina, Turma, ModalScreenProps } from "../../types";
import { turmas } from "../../Mocks/turmas";
import CardTurma from "./CardTurma";

export default function ModalCardDisciplina({
    navigation,
    route,
}: ModalScreenProps) {
    const disciplina = route.params;

    const renderItem: ListRenderItem<Turma> = ({ item }) => (
        <CardTurma
            turma={item}
            openModal={() => {
                alert(item.codigo);
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
                <View style={styles.separator}></View>
                <Text style={styles.texto}>Carga Horária:</Text>
                <Text adjustsFontSizeToFit style={styles.subTexto}>
                    <Text>Pratica: {disciplina.cargaHoraria.pratica} </Text>
                    <Text>Teorica: {disciplina.cargaHoraria.teorica}</Text>
                </Text>
                <View style={styles.separator}></View>
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
                    </>
                )}
            </View>
            <FlatList<Turma>
                style={styles.list}
                data={turmas.filter((turma) => {return turma.disciplina === disciplina})}
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
    return <View style={styles.listSpace}></View>;
}

function listSeparator() {
    return <View style={styles.separator}></View>;
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
        paddingTop: 5,
    },
    separator: {
        backgroundColor: "black",
        height: StyleSheet.hairlineWidth * 2,
        width: "85%",
        borderRadius: 5,
        alignSelf: "center",
        marginVertical: 3,
    },
    listSpace: {
        height: 80,
    },
});
