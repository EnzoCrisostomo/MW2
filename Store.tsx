import React, {
    useState,
    createContext,
    useEffect,
    ReactComponentElement,
} from "react";
import { Aluno, Coordenador } from "./types";
import { alunos } from "./Mocks/alunos";

interface Props {
    children: React.ReactNode;
}

interface AuthContextType {
    loading: Boolean;
    usuario: Aluno | Coordenador | undefined;
    loginSenha: (matricula: string, senha: string) => Promise<Aluno | Coordenador | undefined>;
    deslogar: () => void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const Store: React.FC<Props> = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [usuario, setUsuario] = useState<Aluno | Coordenador | undefined>(
        undefined
    );

    const loginSenha = async (matricula : string, senha : string) => {
        const result = alunos.find(aluno => matricula == aluno.matricula);
        if(result)
            setUsuario(result);

        return result;
    };

    const deslogar = async () => {
        setUsuario(undefined);
    };

    const authContextVal: AuthContextType = {
        loading,
        usuario,
        loginSenha,
        deslogar,
    };
    return (
        <AuthContext.Provider value={authContextVal}>
            {children}
        </AuthContext.Provider>
    );
};
