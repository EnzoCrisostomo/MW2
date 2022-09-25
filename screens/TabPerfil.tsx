import { Pressable, StyleSheet, Image } from "react-native";

import { Text, View } from "../components/Themed";
import { Aluno, Coordenador, RootTabScreenProps, TipoUsuario } from "../types";
import { AuthContext } from "../Store";
import { useContext } from "react";
import Botao from "../components/Themed/Botao";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabPerfil({
    navigation,
}: RootTabScreenProps<"TabPerfil">) {
    const {tipoUsuario, aluno, coordenador, deslogar} = useContext(AuthContext);

    return(
        <SafeAreaView style={styles.container}>
            <Image 
                defaultSource={require("../assets/images/defaultProfile.jpg")}
                source={{uri:`https://robohash.org/set_set5/bgset_bg1/${aluno?.nome}.png`}}
                style={{width: 200, height:200, borderRadius:100}}
            />
            {tipoUsuario === TipoUsuario.ALUNO && aluno &&
                <PerfilAluno aluno={aluno}/>
            }
            {tipoUsuario === TipoUsuario.COORDENADOR && coordenador &&
                <PerfilCoordenador coordenador={coordenador}/>
            }
            <Botao onPress={() => {deslogar()}} icon={{name: "log-out"}}>Sair</Botao>
        </SafeAreaView>
    )
}

function PerfilAluno (props: {
    aluno: Aluno,
}){
    return(
        <View style={styles.container}>
            <Text>{props.aluno.nome}</Text>
            <Text>{props.aluno.email}</Text>
            <Text>{props.aluno.matricula}</Text>
            <Text>{props.aluno.curriculo}</Text>
            <Text>{JSON.stringify(props.aluno.curso)}</Text>
            <Text>{props.aluno.ira.toString()}</Text>
            <Text>{JSON.stringify(props.aluno.periodoIngresso)}</Text>
            <Text>{`${props.aluno.status}`}</Text>
        </View>
    )
}

function PerfilCoordenador (props: {
    coordenador: Coordenador
}){
    return(
        <View style={styles.container}>
            <Text>{props.coordenador.nome}</Text>
            <Text>{props.coordenador.email}</Text>
            <Text>{props.coordenador.matricula}</Text>
            <Pressable></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
});
