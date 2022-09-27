import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { DisciplinaHistoricoAcademico } from "../types";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { AntDesign } from "@expo/vector-icons";

interface Props {
  disciplina: DisciplinaHistoricoAcademico;
}

export const CardDisciplinaHistorico: React.FC<Props> = ({ disciplina }) => {
  return (
    <View>
      <Collapse style={styles.container}>
        <CollapseHeader>
          <Text style={styles.texto}>
            Código: {disciplina.disciplina.codigo.toString()}
          </Text>
          <View style={styles.containerMenor}>
            <Text style={styles.texto}>Nome: {disciplina.disciplina.nome}</Text>
            <AntDesign
              name="caretdown"
              size={14}
              color="white"
              style={styles.seta}
            />
          </View>
        </CollapseHeader>
        <CollapseBody>
          <Text style={styles.texto}>Status: {disciplina.status}</Text>
          <Text style={styles.texto}>Menção: {disciplina.mencao}</Text>
          <Text style={styles.texto}>
            Período: {disciplina.periodo.ano}/{disciplina.periodo.numero}
          </Text>
        </CollapseBody>
      </Collapse>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#417D7A",
    color: "black",
    borderStyle: "solid",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    minWidth: "95%",
    marginHorizontal: 10,
    marginBottom: 8,
  },
  containerMenor: {
    backgroundColor: "",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  texto: {
    color: "white",
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  seta: {},
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: "black",
  },
});
