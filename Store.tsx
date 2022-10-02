import React, { useState, createContext, useEffect } from "react";
import { Aluno, Coordenador, TipoUsuario } from "./types";
import { alunos } from "./Mocks/alunos";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {
    children: React.ReactNode;
}

interface AuthContextType {
    loading: Boolean;
    tipoUsuario: TipoUsuario | undefined;
    aluno: Aluno | undefined;
    coordenador: Coordenador | undefined;
    loginSenha: (
        matricula: string,
        senha: string
    ) => Promise<Aluno | Coordenador | undefined>;
    deslogar: () => void;
}

export const AuthContext = createContext<AuthContextType>(
    {} as AuthContextType
);

const loginKey = "loginInfo";

export const Store: React.FC<Props> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [tipoUsuario, setTipoUsuario] = useState<TipoUsuario | undefined>(
        undefined
    );
    const [aluno, setAluno] = useState<Aluno | undefined>(undefined);
    const [coordenador, setCoordenador] = useState<Coordenador | undefined>(
        undefined
    );

    useEffect(() => {
        autoLogin();

        return () => {};
    }, []);

    const autoLogin = async () => {
        try {
            const matricula = await AsyncStorage.getItem(loginKey);
            if(matricula !== null) {
              loginSenha(matricula, "");
            }
          } catch(e) {
            console.log(e);
          }
    }

    const loginSenha = async (matricula: string, senha: string) => {
        const aluno = alunos.find((aluno) => matricula == aluno.matricula);
        if (aluno) {
            setAluno(aluno);
            setTipoUsuario(TipoUsuario.ALUNO);

            try {
                await AsyncStorage.setItem(loginKey, aluno.matricula);
            } catch (e) {
                console.log(e);
            }
            return aluno;
        }
        // TODO login coordenador
        return undefined;
    };

    const deslogar = async () => {
        setTipoUsuario(undefined);
        setAluno(undefined);
        setCoordenador(undefined);
        try {
            await AsyncStorage.removeItem(loginKey);
        } catch (e) {
            console.log(e);
        }
    };

    const authContextVal: AuthContextType = {
        loading,
        tipoUsuario,
        aluno,
        coordenador,
        loginSenha,
        deslogar,
    };
    return (
        <AuthContext.Provider value={authContextVal}>
            {children}
        </AuthContext.Provider>
    );
};
