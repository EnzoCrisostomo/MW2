import {
    StyleSheet,
    Button,
    Alert,
    Image,
} from "react-native";
import { Botao, Text, SafeAreaView, TextInput } from "../components/Themed";
import { Aluno } from "../types";
import { alunos } from "../Mocks/alunos";
import { AuthContext } from "../Store";
import { useContext, useState } from "react";

interface Props {}

export const LoginScreen: React.FC<Props> = ({}) => {
    const { loginSenha } = useContext(AuthContext);
    const [matricula, setMatricula] = useState("180123456");
    const [senha, setSenha] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.unbImage}
                source={require("../assets/images/UnB.png")}
            />
            <Text style={styles.title}>Matrícula Web II</Text>
            <TextInput
                style={styles.input}
                placeholder="Matrícula"
                onChangeText={setMatricula}
                value={matricula}
            />
            <TextInput
                style={styles.input}
                onChangeText={setSenha}
                value={senha}
                placeholder="Senha"
            />
            <Botao
                onPress={async () => {
                    const success = await loginSenha(matricula, senha);
                    if (!success) {
                        alert("Falha ao fazer login");
                    }
                }}
            >
                Entrar
            </Botao>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
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
        borderRadius: 8,
    },
    unbImage: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});
