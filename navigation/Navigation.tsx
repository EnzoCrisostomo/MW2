/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable, Alert } from "react-native";

import Colors, { dark, light } from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabMatriculas from "../screens/TabMatriculas";
import TabOferta from "../screens/TabOferta";
import TabHistorico from "../screens/TabHistorico";
import TabPerfil from "../screens/TabPerfil";
import ModalDisciplina from "../components/Disciplina/ModalDisciplina";
import {
    RootStackParamList,
    RootTabParamList,
    RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { AuthContext } from "../Store";
import { LoginScreen } from "../screens/LoginScreen";
import ModalTurma from "../components/Turma/ModalTurma";

export default function Navigation({
    colorScheme,
}: {
    colorScheme: ColorSchemeName;
}) {
    return (
        <NavigationContainer
            linking={LinkingConfiguration}
            theme={colorScheme === "dark" ? dark : light}
        >
            <RootNavigator />
        </NavigationContainer>
    );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    const { tipoUsuario } = React.useContext(AuthContext);
    if (tipoUsuario === undefined) {
        return <LoginScreen />;
    }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Root"
                component={BottomTabNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NotFound"
                component={NotFoundScreen}
                options={{ title: "Oops!" }}
            />
            <Stack.Group
                screenOptions={{
                    presentation: "fullScreenModal",
                    animation: "fade_from_bottom",
                }}
            >
                <Stack.Screen
                    name="ModalDisciplina"
                    component={ModalDisciplina}
                    options={({ route }) => ({
                        title: "Disciplina",
                        headerTitle: `Oferta - ${route.params.codigo}`,
                    })}
                />
                <Stack.Screen
                    name="ModalTurma"
                    component={ModalTurma}
                    options={({ route }) => ({
                        title: "Turma",
                        headerTitle: `Adicionar Turma ${route.params.codigo} - ${route.params.disciplina.codigo}`,
                    })}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
    const colorScheme = useColorScheme();
    const { deslogar } = React.useContext(AuthContext);

    return (
        <BottomTab.Navigator
            initialRouteName="TabMatriculas"
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme].highlight,
            }}
        >
            <BottomTab.Screen
                name="TabMatriculas"
                component={TabMatriculas}
                options={{
                    title: "Matrícula",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="book" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabOferta"
                component={TabOferta}
                options={{
                    title: "Ofertas",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="search" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabHistorico"
                component={TabHistorico}
                options={{
                    title: "Histórico",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="history" color={color} />
                    ),
                }}
            />
            <BottomTab.Screen
                name="TabPerfil"
                component={TabPerfil}
                options={({ navigation }: RootTabScreenProps<"TabPerfil">) => ({
                    title: "Perfil",
                    tabBarIcon: ({ color }) => (
                        <TabBarIcon name="user" color={color} />
                    ),
                    headerRight: () => (
                        <Pressable
                            onPress={() => {
                                Alert.alert(
                                    "Atenção!",
                                    "Deseja sair da sua conta?",
                                    [
                                        { text: "Sim", onPress: deslogar },
                                        { text: "Não" },
                                    ]
                                );
                            }}
                            style={({ pressed }) => ({
                                opacity: pressed ? 0.5 : 1,
                            })}
                        >
                            <Feather
                                name="log-out"
                                size={25}
                                color={Colors[colorScheme].text}
                                style={{ marginRight: 15 }}
                            />
                        </Pressable>
                    ),
                })}
            />
        </BottomTab.Navigator>
    );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>["name"];
    color: string;
}) {
    return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
