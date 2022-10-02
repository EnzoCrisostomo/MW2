import { useState } from "react";
import { StyleSheet, Alert, Pressable, Modal } from "react-native";
import { Text, TextInput, View } from "../Themed";
import { Disciplina, Turma } from "../../types";
import useThemeColor from "../../hooks/useThemeColor";

interface Props {
    turma: Turma;
    openModal: () => void;
}

const CardTurma: React.FC<Props> = ({ turma, openModal }) => {
    const color = useThemeColor("text");
    const backgroundColor = useThemeColor("tint");
    const ripple = useThemeColor("ripple");

    return (
        <View deep style={styles.outerView}>
            <Pressable
                unstable_pressDelay={120}
                style={styles.container}
                android_ripple={{ color: ripple, borderless: true }}
                onPress={() => {
                    openModal();
                }}
            >
                <View transparent>
                    {turma.professores.map((prof, index) => (
                        <Text key={index}>{prof.nome}</Text>
                    ))}
                    <Text>Turma: {turma.codigo}</Text>
                    <Text>{turma.sede}</Text>
                    <Text>
                        Vagas:{" "}
                        {(
                            turma.vagasOfertadas - turma.vagasOcupadas
                        ).toString()}
                    </Text>
                </View>
                <View transparent>
                    {turma.horarios.map((horario, index) => {
                        return (
                            <View transparent key={index}>
                                <Text>
                                    <Text>{horario.dia}: </Text>
                                    <Text>{horario.horaInicio} - </Text>
                                    <Text>{horario.horaFim}</Text>
                                </Text>
                                <Text>{horario.local.endereco}</Text>
                            </View>
                        );
                    })}
                </View>
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
        flexDirection: "row",
        justifyContent: "space-between",
    },
    texto: {},
});

export default CardTurma;
