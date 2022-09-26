import { useState } from "react";
import { StyleSheet, Alert, Pressable, Modal } from "react-native";
import { Text, View, TextInput } from "../Themed";
import { Disciplina } from "../../types";

interface Props {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>;
    disciplina: Disciplina;
}

const ModalCardDisciplina: React.FC<Props> = ({
    disciplina,
    visible,
    setVisible,
}) => {
    return (
        <Modal
            animationType="fade"
            transparent={false}
            visible={visible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setVisible(!visible);
            }}
        >
            <View style={styles.centeredViewModal}>
              
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredViewModal: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
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

export default ModalCardDisciplina;
