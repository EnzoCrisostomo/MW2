import useThemeColor from "../../hooks/useThemeColor";
import { Text as DefaultText } from "react-native";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

type TextProps = ThemeProps & DefaultText["props"];

export default function Text(props: TextProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

    return <DefaultText style={[{ color }, style]} {...otherProps} />;
}
