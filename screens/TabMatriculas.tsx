import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabMatriculas({
    navigation,
}: RootTabScreenProps<"TabMatriculas">) {
    return (
        <View style={styles.container}>
            <Text>Matriculas</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});