import { StyleSheet, Pressable } from "react-native";

import { Text, View } from "./Themed";

interface PropsBotao {
    children: string;
    onPress: () => void;
}

const Botao: React.FC<PropsBotao> = ({ children, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={styles.container}>
                <Text>{children}</Text>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "lightblue",
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
});

export default Botao;
