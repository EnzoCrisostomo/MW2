import useThemeColor from "../../hooks/useThemeColor";
import { TextInput as DefaultTextInput } from "react-native";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

type ViewProps = ThemeProps & DefaultTextInput["props"];

export default function TextInput(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor("inputBackground", {
        light: lightColor,
        dark: darkColor,
    });
    const color = useThemeColor("inputText", {
        light: lightColor,
        dark: darkColor,
    });

    return (
        <DefaultTextInput
            style={[{ backgroundColor, color }, style]}
            {...otherProps}
        />
    );
}
