import {
    SafeAreaView,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    Image,
    Pressable,
} from "react-native";
import { Text, View } from "../components/Themed";
import { Disciplina } from "../types";

interface Props{
    disciplina: Disciplina;
}

export const CardDisciplina: React.FC<Props> = ({disciplina}) => {
    return (
        <Pressable style={styles.container} android_ripple={{color: "black"}} onPress={() => {alert(disciplina.nome)}}>
            <Text style={styles.texto}>Código: {disciplina.codigo.toString()}</Text>
            <Text style={styles.texto}>Nome: {disciplina.nome}</Text>
            <Text style={styles.texto}>Créditos: {disciplina.creditos.toString()}</Text>
            <Text style={styles.texto}>Unidade: {disciplina.unidadeAcademica}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        color: 'black',
        borderStyle: 'solid',
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        minWidth: "95%",
        marginHorizontal: 10,
    },
    texto: {
        color: "#395B64"
    }
});
