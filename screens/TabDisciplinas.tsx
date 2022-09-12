import { FlatList, StyleSheet, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { CardDisciplina } from "../components/CardDisciplina";
import { Disciplinas } from "../Mocks/disciplinas.json";

export default function TabDisciplinas({
    navigation,
}: RootTabScreenProps<"TabDisciplinas">) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Disciplinas</Text>
                <View
                    style={styles.separator}
                    lightColor="#eee"
                    darkColor="rgba(255,255,255,0.1)"
                />
                <View>
                    {Disciplinas.map((item) => {
                        return <CardDisciplina disciplina={item} />;
                    })}
                </View>
                <CardDisciplina disciplina={Disciplinas[1]}></CardDisciplina>
            </View>
        </ScrollView>
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
