import useThemeColor from "../../hooks/useThemeColor";
import { View as DefaultView } from "react-native";
import { colorType } from "../../hooks/useThemeColor";

type ThemeProps = {
    lightColor?: string;
    darkColor?: string;
    card?: boolean;
    deep?: boolean;
    transparent?: boolean;
};

type ViewProps = ThemeProps & DefaultView["props"];

export default function View(props: ViewProps) {
    const { style, lightColor, darkColor, card, deep, transparent, ...otherProps } = props;

    let viewType : colorType = "background";
    if(card) viewType = "card";
    if(deep) viewType = "border";
    if(transparent) viewType = "transparent";
    
    const backgroundColor = useThemeColor(viewType, {
        light: lightColor,
        dark: darkColor,
    });

    let elevation = 0;
    if(card) elevation = 8;
    if(deep) elevation = 6;

    const viewStyle = {
        backgroundColor,
        elevation,
    };

    return <DefaultView style={[viewStyle, style]} {...otherProps} />;
}
