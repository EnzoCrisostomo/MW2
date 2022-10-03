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
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.titulo}
                >
                    {disciplina.nome}
                </Text>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.subTitulo}
                >{`${disciplina.codigo}`}</Text>
                <View style={styles.thinLine} />

                <Text style={styles.texto}>
                    {`Carga Horária: ${disciplina.cargaHoraria.total*15}hrs`}
                </Text>
                <Text style={styles.texto}>
                    {disciplina.modalidade}
                </Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    outerView: {
        borderRadius: 10,
        marginHorizontal: 10,
    },
    container: {
        padding: 15,
        minWidth: "95%",
    },
    titulo: {
        textAlign: "center",
        fontSize: 18,
    },
    subTitulo: {
        textAlign: "center",
        fontSize: 14,
    },
    texto: {},
    thinLine: {
        height: StyleSheet.hairlineWidth * 2,
        width: "90%",
        backgroundColor: "black",
        marginVertical: 5,
        alignSelf: "center",
    },
});
