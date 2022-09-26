import { useState } from "react";
import { StyleSheet, Alert, Pressable, Modal } from "react-native";
import { Text, View, TextInput } from "../Themed";
import { Disciplina } from "../../types";
import ModalCardDisciplina from "./ModalCardDisciplina";
import useThemeColor from "../../hooks/useThemeColor";

interface Props {
    disciplina: Disciplina;
}

export const CardDisciplina: React.FC<Props> = ({ disciplina }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const color = useThemeColor("text");
    const backgroundColor = useThemeColor("tint");
    const ripple = useThemeColor("ripple");

    return (
        <Pressable
            unstable_pressDelay={100}
            style={styles.container}
            android_ripple={{ color: ripple }}
            onPress={() => {
                setModalVisible(true);
            }}
        >
            <Text style={styles.texto}>
                Código: {disciplina.codigo.toString()}
            </Text>
            <Text style={styles.texto}>Nome: {disciplina.nome}</Text>
            <ModalCardDisciplina
                visible={modalVisible}
                setVisible={setModalVisible}
                disciplina={disciplina}
            />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
        padding: 15,
        minWidth: "95%",
        marginHorizontal: 10,
        marginBottom: 8,
    },
    texto: {},
});
