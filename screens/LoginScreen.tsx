import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    Image,
} from "react-native";
import { Text, View } from "../components/Themed";

interface Props {
    loginFunc: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoginScreen: React.FC<Props> = ({loginFunc}) => {
    return (
        <>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.unbImage}
                    source={require("../assets/images/UnB.png")}
                />
                <Text style={styles.title}>Matrícula Web II</Text>
                <TextInput style={styles.input} placeholder="Matrícula" />
                <TextInput
                    style={styles.input}
                    // onChangeText={onChangeNumber}
                    // value={number}
                    placeholder="Senha"
                />
                <Button title="Entrar" color="#395B64" onPress={() => {loginFunc(true)}} />
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#2C3333",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 20,
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    input: {
        height: 40,
        width: 160,
        margin: 16,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#ffffff",
        borderRadius: 8,
    },
    unbImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});
