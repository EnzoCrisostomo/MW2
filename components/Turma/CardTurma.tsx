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
                unstable_pressDelay={200}
                style={styles.container}
                android_ripple={{ color: ripple, borderless: true, foreground: true }}
                onPress={() => {
                    openModal();
                }}
            >
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={2}
                    style={styles.prof}
                >
                    {turma.professores.map((prof, index) => (
                        <Text key={index}>
                            {index > 0 ? ", " : ""}
                            {prof.nome}
                        </Text>
                    ))}
                </Text>
                <View style={styles.thinLine} />
                <View transparent style={styles.info}>
                    <View transparent>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>Turma: {turma.codigo}</Text>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>Campus: {turma.sede}</Text>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>
                            Vagas Ofertadas: {turma.vagasOfertadas}
                        </Text>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>
                            Vagas Restantes:{" "}
                            {`${turma.vagasOfertadas - turma.vagasOcupadas}`}
                        </Text>
                    </View>
                    <View transparent>
                        {turma.horarios.map((horario, index) => {
                            return (
                                <View card style={styles.horario} key={index}>
                                    <Text style={styles.local}>
                                        {horario.local.endereco}
                                    </Text>
                                    <Text style={styles.textoInfo} adjustsFontSizeToFit>
                                        <Text>{horario.dia}: </Text>
                                        <Text>{horario.horaInicio} - </Text>
                                        <Text>{horario.horaFim}</Text>
                                    </Text>
                                </View>
                            );
                        })}
                    </View>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    outerView: {
        borderRadius: 10,
        marginHorizontal: 10,
        overflow: "hidden"
    },
    container: {
        padding: 10,
        minWidth: "95%",
        alignItems: "center",
    },
    prof: {
        textAlign: "center",
        fontSize: 18,
        fontWeight: "500",
    },
    info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    textoInfo:{
        fontSize: 14,
        fontWeight: "300",
    },
    horario: {
        borderRadius: 10,
        padding: 5,
        margin: 3,
    },
    local: {
        textAlign: "center",
    },
    thinLine: {
        height: StyleSheet.hairlineWidth * 2,
        width: "90%",
        backgroundColor: "black",
        marginVertical: 5,
    },
});

export default CardTurma;
