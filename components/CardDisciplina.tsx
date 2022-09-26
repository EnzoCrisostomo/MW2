import { useState } from "react";
import {
    StyleSheet,
    Alert,
    Pressable,
    Modal,
} from "react-native";
import { Text, View, TextInput } from "../components/Themed";
import { Disciplina } from "../types";

interface Props {
    disciplina: Disciplina;
}

export const CardDisciplina: React.FC<Props> = ({ disciplina }) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Pressable
            unstable_pressDelay={100}
            style={styles.container}
            android_ripple={{ color: "black" }}
            onPress={() => {
                setModalVisible(true);
            }}
        >
            <Text style={styles.texto}>
                Código: {disciplina.codigo.toString()}
            </Text>
            <Text style={styles.texto}>Nome: {disciplina.nome}</Text>
            <ModalTurmas visible={modalVisible} setVisible={setModalVisible} disciplina={disciplina}></ModalTurmas>
        </Pressable>
    );
};

interface ModalProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>,
    disciplina: Disciplina;
}

const ModalTurmas: React.FC<ModalProps> = ({ disciplina, visible, setVisible }) => {
    return (
        <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setVisible(!visible);
        }}
      >
        <View style={styles.centeredViewModal}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{disciplina.nome}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setVisible(!visible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
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
    texto: {
        color: "#395B64",
    },
    centeredViewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
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
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "black"
      }
});
