import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableNativeFeedback } from "react-native";
import useThemeColor from "../../hooks/useThemeColor";
import View from "./View";
import Text from "./Text";
import {View as DefaultView} from "react-native";

interface BotaoProps {
    lightColor?: string;
    darkColor?: string;
    children: string;
    onPress: () => void;
    icon?: {
        name: React.ComponentProps<typeof Feather>["name"];
        color?: string;
        size?: number;
    };
}

export default function Botao(props: BotaoProps & DefaultView['props']) {
    const { style, lightColor, darkColor, children, onPress, icon, ...otherProps } = props;

    const color = useThemeColor("text", { light: lightColor, dark: darkColor });
    const backgroundColor = useThemeColor("tint", { light: lightColor, dark: darkColor });
    const ripple = useThemeColor("ripple", { light: lightColor, dark: darkColor });

    return (
        <View style={[styles.container, style]} {...otherProps}>
            <TouchableNativeFeedback
                style={styles.button}
                onPress={onPress}
                background={TouchableNativeFeedback.Ripple(ripple, true)}
            >
                <View style={{backgroundColor, ...styles.inside}}>
                    {icon && <Feather style={styles.icon} color={color}{...icon} />}
                    <Text style={styles.text}>{children}</Text>
                </View>
            </TouchableNativeFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
    },
    button: {
        borderRadius: 10,
    },
    inside:{
        borderRadius: 10,
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontSize: 18,
        textAlign: "center",
    },
    icon:{
        marginRight: 8,
    }
});
