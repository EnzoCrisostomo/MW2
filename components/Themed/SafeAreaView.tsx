import useThemeColor from "../../hooks/useThemeColor";
import { View } from "react-native";
import { SafeAreaView as DefaultSafeAreaView } from "react-native-safe-area-context";
type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
};

type ViewProps = ThemeProps & View["props"];

export default function SafeAreaView(props: ViewProps) {
    const { style, lightColor, darkColor, ...otherProps } = props;
    const backgroundColor = useThemeColor(
        { light: lightColor, dark: darkColor },
        "background"
    );

    return <DefaultSafeAreaView style={[{ backgroundColor }, style]} {...otherProps} />;
}