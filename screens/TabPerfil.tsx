import {
    Pressable,
    StyleSheet,
    Image,
    ActivityIndicator,
    Alert,
} from "react-native";

import { Text, View } from "../components/Themed";
import { Aluno, Coordenador, RootTabScreenProps, TipoUsuario } from "../types";
import { AuthContext } from "../Store";
import { useContext, useState } from "react";
import Botao from "../components/Themed/Botao";

export default function TabPerfil({
    navigation,
}: RootTabScreenProps<"TabPerfil">) {
    const { tipoUsuario, aluno, coordenador, deslogar } =
        useContext(AuthContext);
    const [imgLoading, setimgLoading] = useState(true);
    return (
        <View style={styles.container}>
            <View style={styles.areaFoto}>
                {imgLoading && <ActivityIndicator size={60}/>}
                <Image
                    onLoad={() => {
                        setimgLoading(false);
                    }}
                    onLoadStart={() => {
                        setimgLoading(true);
                    }}
                    source={{
                        uri: `https://robohash.org/set_set5/bgset_bg1/${
                            aluno
                                ? aluno.matricula.replace(/\s+/g, "")
                                : coordenador?.matricula.replace(/\s+/g, "")
                        }.png`,
                    }}
                    style={{
                        width: 200,
                        height: 200,
                        borderRadius: 100,
                        display: imgLoading ? "none" : "flex",
                    }}
                />
                <View></View>
            </View>
            <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.textoNome}
                >
                    {aluno ? aluno.nome : coordenador?.nome}
                </Text>
                <Text
                    adjustsFontSizeToFit
                    numberOfLines={1}
                    style={styles.textoNome}
                >
                    {aluno ? aluno.matricula : coordenador?.matricula}
                </Text>
            <View style={styles.areaInfo}>
                {tipoUsuario === TipoUsuario.ALUNO && aluno && (
                    <PerfilAluno aluno={aluno} />
                )}
                {tipoUsuario === TipoUsuario.COORDENADOR && coordenador && (
                    <PerfilCoordenador coordenador={coordenador} />
                )}
                <Botao
                    style={styles.botao}
                    onPress={() => {
                        Alert.alert("Atenção!", "Deseja sair da sua conta?", [
                            { text: "Sim", onPress: deslogar },
                            { text: "Não" },
                        ]);
                    }}
                    icon={{ name: "log-out" }}
                >
                    Sair
                </Botao>
            </View>
        </View>
    );
}

function ItemPerfil(props: { titulo: string; conteudo: string }) {
    return (
        <>
            <Text adjustsFontSizeToFit style={styles.tituloInfo}>
                {props.titulo}
            </Text>
            <Text adjustsFontSizeToFit style={styles.textoInfo}>
                {props.conteudo}
            </Text>
            <View style={styles.separador} />
        </>
    );
}

function PerfilAluno(props: { aluno: Aluno }) {
    return (
        <View style={styles.info}>
            <ItemPerfil
                titulo="E-mail"
                conteudo={props.aluno.email}
            ></ItemPerfil>
            <ItemPerfil
                titulo="Curriculo"
                conteudo={props.aluno.curriculo}
            ></ItemPerfil>
            <ItemPerfil
                titulo="Curso"
                conteudo={props.aluno.curso.nome}
            ></ItemPerfil>
            <ItemPerfil
                titulo="Ira"
                conteudo={props.aluno.ira.toFixed(2).toString()}
            ></ItemPerfil>
            <ItemPerfil
                titulo="Ingresso"
                conteudo={`${props.aluno.periodoIngresso.numero}/${props.aluno.periodoIngresso.ano}`}
            ></ItemPerfil>
            <ItemPerfil
                titulo="Status"
                conteudo={props.aluno.status ? "Regular" : "Irregular"}
            ></ItemPerfil>
        </View>
    );
}

function PerfilCoordenador(props: { coordenador: Coordenador }) {
    return (
        <View style={styles.info}>
            <Text>{props.coordenador.email}</Text>
            <Text>{props.coordenador.matricula}</Text>
            <Pressable></Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    areaFoto: {
        flex: 4,
        alignItems: "center",
        justifyContent: "center",
    },
    textoNome: {
        textAlign: "center",
        fontSize: 26,
        fontWeight: "500",
    },
    areaInfo: {
        flex: 6,
        justifyContent: "space-around",
        width: "90%",
    },
    info: {},
    tituloInfo: {
        fontWeight: "500",
        fontSize: 18,
    },
    textoInfo: {
        fontSize: 18,
        fontWeight: "200",
    },
    separador: {
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    botao: {
        width: "30%",
        alignSelf: "center",
    },
});
