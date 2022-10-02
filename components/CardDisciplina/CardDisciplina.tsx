import { useState } from "react";
import { StyleSheet, Alert, Pressable, Modal } from "react-native";
import { Text, View, TextInput } from "../Themed";
import { Disciplina } from "../../types";
import useThemeColor from "../../hooks/useThemeColor";

interface Props {
    disciplina: Disciplina;
    openModal: (disciplina: Disciplina) => void;
}

export const CardDisciplina: React.FC<Props> = ({ disciplina, openModal }) => {
    const color = useThemeColor("text");
    const backgroundColor = useThemeColor("tint");
    const ripple = useThemeColor("ripple");

    return (
        <View deep style={styles.outerView}>
            <Pressable
                unstable_pressDelay={200}
                style={styles.container}
                android_ripple={{ color: ripple, borderless: true }}
                onPress={() => {
                    openModal(disciplina);
                }}
            >
                <Text style={styles.texto}>
                    Código: {disciplina.codigo.toString()}
                </Text>
                <Text style={styles.texto}>Nome: {disciplina.nome}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    outerView:{
        borderRadius: 10,
        marginHorizontal: 10,
    },
    container: {
        padding: 15,
        minWidth: "95%",
    },
    texto: {},
});
