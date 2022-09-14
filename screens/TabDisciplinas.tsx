import { FlatList, ListRenderItem, StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { CardDisciplina } from "../components/CardDisciplina";
import { disciplinas } from "../Mocks/disciplinas";
import { Disciplina } from "../types";

export default function TabDisciplinas({
    navigation,
}: RootTabScreenProps<"TabDisciplinas">) {

  const renderItem: ListRenderItem<Disciplina> = ({ item }) => (
    <CardDisciplina disciplina={item} />
  );
    return (
            <View style={styles.container}>
                <Text style={styles.title}>Disciplinas</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                <FlatList<Disciplina>
                    data={disciplinas}
                    keyExtractor={(item, index) => {
                        return item.codigo.toString();
                    }}
                    renderItem={renderItem}
                    onRefresh={() => {}}
                    refreshing={false}
                />
            </View>
    );
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
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
