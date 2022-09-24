import React, {
    useState,
    createContext,
    useEffect,
    ReactComponentElement,
} from "react";
import { Aluno, Coordenador, TipoUsuario } from "./types";
import { alunos } from "./Mocks/alunos";

interface Props {
    children: React.ReactNode;
}

interface AuthContextType {
    loading: Boolean;
    tipoUsuario: TipoUsuario | undefined;
    aluno: Aluno | undefined;
    coordenador: Coordenador | undefined;
    loginSenha: (matricula: string, senha: string) => Promise<Aluno | Coordenador | undefined>;
    deslogar: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const Store: React.FC<Props> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [tipoUsuario, setTipoUsuario] = useState<TipoUsuario | undefined>(undefined);
    const [aluno, setAluno] = useState<Aluno | undefined>(undefined);
    const [coordenador, setCoordenador] = useState<Coordenador | undefined>(undefined);

    const loginSenha = async (matricula : string, senha : string) => {
        const aluno = alunos.find(aluno => matricula == aluno.matricula);
        if(aluno){
            setAluno(aluno);
            setTipoUsuario(TipoUsuario.ALUNO);
            return aluno;
        }
        // TODO login coordenador 
        return undefined;
    };

    const deslogar = async () => {
        setTipoUsuario(undefined);
        setAluno(undefined);
        setCoordenador(undefined);
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
