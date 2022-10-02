import { useState } from "react";

import {
    FlatList,
    ListRenderItem,
    StyleSheet,
    ScrollView,
} from "react-native";

import { Text, View, TextInput, Botao } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { CardDisciplina } from "../components/CardDisciplina/CardDisciplina";
import { disciplinas } from "../Mocks/disciplinas";
import { Disciplina } from "../types";
import { Feather } from "@expo/vector-icons";

export default function TabOferta({
    navigation,
}: RootTabScreenProps<"TabOferta">) {
    const renderItem: ListRenderItem<Disciplina> = ({ item }) => (
        <CardDisciplina disciplina={item} openModal={setModal} />
    );

    function setModal(disciplina: Disciplina){
        navigation.navigate("ModalDisciplina", disciplina);
    }

    const [disciplinasFiltradas, setDisciplinasFiltradas] =
        useState(disciplinas);

    function filtrarOferta(texto: String): void {
        const dadosFiltrados = disciplinas.filter((item) => {
            let fullString: String = item.codigo + "%" + item.nome;

            fullString = fullString.toUpperCase();

            //remover acentos
            fullString = fullString.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
            texto = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

            return fullString.indexOf(texto.toUpperCase()) > -1;
        });
        setDisciplinasFiltradas(dadosFiltrados);
    }

    
    return (
        <View style={styles.container}>
            <FlatList<Disciplina>
                data={disciplinasFiltradas}
                style={styles.list}
                keyExtractor={(item, index) => {
                    return item.codigo.toString();
                }}
                renderItem={renderItem}
                onRefresh={() => {}}
                refreshing={false}
                ItemSeparatorComponent={listSeparator}
                ListFooterComponent={listSpacer}
            />
            <TextInput
                style={styles.input}
                placeholder="Nome ou Código "
                onChangeText={(text) => {
                    filtrarOferta(text);
                }}
            />
            {/* <ModalCardDisciplina
                visible={modalVisible}
                setDisciplina={setModal}
                disciplina={disciplinaModal}
            /> */}
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
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    input: {
        height: 45,
        width: "80%",
        margin: 16,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 8,
    },
    list:{
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
