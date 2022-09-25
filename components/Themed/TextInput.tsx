import useThemeColor from "../../hooks/useThemeColor";
import { TextInput as DefaultTextInput } from "react-native";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

type ViewProps = ThemeProps & DefaultTextInput["props"];

export default function TextInput(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "inputBackground"
    );
    const color = useThemeColor(
        { light: lightColor, dark: darkColor },
        "inputText"
    );

    return <DefaultTextInput style={[{ backgroundColor, color }, style]} {...otherProps} />;
}