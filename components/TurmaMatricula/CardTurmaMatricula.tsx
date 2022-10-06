import { useState } from "react";
import { StyleSheet, Alert, Pressable, Modal } from "react-native";
import { Text, TextInput, View } from "../Themed";
import { Disciplina, Matricula } from "../../types";
import useThemeColor from "../../hooks/useThemeColor";

interface Props {
    matricula: Matricula;
    openModal: () => void;
}

const CardTurmaMatricula: React.FC<Props> = ({ matricula, openModal }) => {
    const color = useThemeColor("text");
    const backgroundColor = useThemeColor("tint");
    const ripple = useThemeColor("ripple");

    return (
        <View deep style={styles.outerView}>
            <Pressable
                unstable_pressDelay={200}
                style={styles.container}
                android_ripple={{
                    color: ripple,
                    borderless: true,
                    foreground: true,
                }}
                onPress={() => {
                    openModal();
                }}
            >
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={2}
                    style={styles.prof}
                >
                    {matricula.turma.disciplina.nome}
                </Text>
                <Text>
                    {matricula.turma.professores.map((prof, index) => (
                        <Text key={index}>
                            {index > 0 ? ", " : ""}
                            {prof.nome}
                        </Text>
                    ))}
                </Text>
                <View style={styles.thinLine} />
                <View transparent style={styles.info}>
                    <View transparent>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>
                            Turma: {matricula.turma.codigo}
                        </Text>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>
                            Campus: {matricula.turma.sede}
                        </Text>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>
                            Vagas Ofertadas: {matricula.turma.vagasOfertadas}
                        </Text>
                        <Text style={styles.textoInfo} adjustsFontSizeToFit>
                            Vagas Restantes:{" "}
                            {`${
                                matricula.turma.vagasOfertadas -
                                matricula.turma.vagasOcupadas
                            }`}
                        </Text>
                        <Text
                            style={[styles.textoInfo, { fontWeight: "600" }]}
                            adjustsFontSizeToFit
                        >
                            Prioridade: {`${matricula.prioridade}`}
                        </Text>
                    </View>
                    <View transparent>
                        {matricula.turma.horarios.map((horario, index) => {
                            return (
                                <View card style={styles.horario} key={index}>
                                    <Text style={styles.local}>
                                        {horario.local.endereco}
                                    </Text>
                                    <Text
                                        style={styles.textoInfo}
                                        adjustsFontSizeToFit
                                    >
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
        overflow: "hidden",
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
    textoInfo: {
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

export default CardTurmaMatricula;
