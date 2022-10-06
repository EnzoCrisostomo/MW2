import { FlatList, ListRenderItem, StyleSheet, ScrollView } from "react-native";
import { useContext } from "react";
import { Text, View } from "../components/Themed";
import {
    RootTabScreenProps,
    Disciplina,
    DisciplinaHistoricoAcademico,
    Matricula,
    statusMatricula,
} from "../types";
import { CardDisciplinaHistorico } from "../components/CardDisciplinaHistorico";
import { disciplinasHistorico } from "../Mocks/disciplinaHistorico";
import { AuthContext } from "../Store";

export default function TabHistorico({
    navigation,
}: RootTabScreenProps<"TabHistorico">) {
    const { matriculas } = useContext(AuthContext);
    const renderItem: ListRenderItem<Matricula> = ({ item }) => (
        <CardDisciplinaHistorico matricula={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList<Matricula>
                data={matriculas.filter(
                    (item) => item.status !== statusMatricula.EMAGUARDO
                )}
                keyExtractor={(item, index) => {
                    return `${item.turma.disciplina.codigo}${item.turma.codigo}`;
                }}
                renderItem={renderItem}
                onRefresh={() => {}}
                refreshing={false}
                ListEmptyComponent={emptyList}
            />
        </View>
    );
}

function emptyList() {
    return (
        <View style={styles.viewEmpty}>
            <Text style={styles.textoEmpty}>
                Seu histórico está vazio.
            </Text>
            <Text style={styles.textoEmpty}>
                Confirme matrículas na tela de matrícula para atualizar seu histórico.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
