import { useContext, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, FlatList, ListRenderItem, Alert } from "react-native";
import { Botao, Text, View } from "../components/Themed";
import { RootTabScreenProps, statusMatricula } from "../types";
import { MatriculasAlunos } from "../Mocks/matriculas";
import { AuthContext } from "../Store";
import { Matricula } from "../types";
import CardTurmaMatricula from "../components/TurmaMatricula/CardTurmaMatricula";

export default function TabMatriculas({
    navigation,
}: RootTabScreenProps<"TabMatriculas">) {
    const { matriculas, confirmarMatriculas } = useContext(AuthContext);

    const renderItem: ListRenderItem<Matricula> = ({ item }) => (
        <CardTurmaMatricula
            matricula={item}
            openModal={() => {
                navigation.navigate("ModalTurmaMatricula", item);
            }}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList<Matricula>
                data={matriculas.filter(
                    (item) => item.status === statusMatricula.EMAGUARDO
                )}
                style={styles.list}
                keyExtractor={(item, index) => {
                    return `${item.turma.disciplina.codigo}${item.turma.codigo}`;
                }}
                renderItem={renderItem}
                onRefresh={() => {}}
                refreshing={false}
                ItemSeparatorComponent={listSeparator}
                ListFooterComponent={listSpacer}
                ListHeaderComponent={
                    <View style={{ marginVertical: 2 }}></View>
                }
                ListEmptyComponent={emptyList}
            />
            {matriculas.filter(
                (item) => item.status === statusMatricula.EMAGUARDO
            ).length !== 0 && (
                <Botao
                    style={styles.botao}
                    onPress={() => {
                        if (
                            matriculas.filter(
                                (item) =>
                                    item.status === statusMatricula.EMAGUARDO
                            ).length === 0
                        ) {
                            Alert.alert(
                                "Atenção!",
                                "Você há matrículas para confirmar!",
                                [
                                    {
                                        text: "Ok",
                                    },
                                ]
                            );
                            return;
                        }
                        Alert.alert(
                            "Atenção!",
                            "Deseja Confirmar suas matrículas?",
                            [
                                {
                                    text: "Sim",
                                    onPress: () => {
                                        confirmarMatriculas();
                                    },
                                },
                                { text: "Não" },
                            ]
                        );
                    }}
                >
                    Confirmar
                </Botao>
            )}
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

function emptyList() {
    return (
        <View style={styles.viewEmpty}>
            <Text style={styles.textoEmpty}>
                Não há matrículas registradas!
            </Text>
            <Text style={styles.textoEmpty}>
                Para adicionar matriculas siga para a tela Ofertas.
            </Text>
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
    list: {
        paddingVertical: 5,
    },
    separator: {
        marginVertical: 3,
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
    botao: {
        marginBottom: 10,
    },
    textoEmpty: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "400",
    },
    viewEmpty: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "60%",
    },
});
