import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";

export type colorType = keyof typeof Colors.light & keyof typeof Colors.dark;

export default function useThemeColor(
    colorName: colorType,
    props?: { light?: string; dark?: string }
) {
    const theme = useColorScheme();
    const colorFromProps = props ? props[theme] : undefined;

    if (colorFromProps) {
        return colorFromProps;
    } else {
        return Colors[theme][colorName];
    }
}
