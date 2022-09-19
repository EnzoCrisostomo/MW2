import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabHistorico({
    navigation,
}: RootTabScreenProps<"TabHistorico">) {
    return (
        <View style={styles.container}>
            <Text>Historico</Text>
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