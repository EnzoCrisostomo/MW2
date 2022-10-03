// https://colorhunt.co/palette/2c3333395b64a5c9cae7f6f2

//Tema sendo usado agora, ainda não decidi o tema claro
//https://coolors.co/222222-272729-222831-395b64-417d7a-67babf-ffffff


const Colors = {
    light: {
        text: "#222222",
        background: "#FFFFFF",
        tint: "#67BABF",
        ripple: "#1A3C40",
        highlight: "#8CD5D9",
        inputBackground: "#FFF",
        inputText: "#222222",
        card: "#F2F2F2",
        cardRipple: "#222222",
        border: "#F5F5F5",
        transparent: "transparent"
    },
    dark: {
        text: "#FEFEFE",
        background: "#222222",
        tint: "#395B64",
        ripple: "#FEFEFE",
        highlight: "#67BABF",
        inputBackground: "#FEFEFE",
        inputText: "#222222",
        card: "#222831",
        cardRipple: "#222222",
        border: "#272729",
        transparent: "transparent"
    },
};

export const light = {
    dark: false,
    colors: {
        primary: Colors.light.tint,
        background: Colors.light.background,
        card: Colors.light.card,
        text: Colors.light.text,
        border: Colors.light.border,
        notification: Colors.light.tint,
    },
};

export const dark = {
    dark: true,
    colors: {
        primary: Colors.dark.tint,
        background: Colors.dark.background,
        card: Colors.dark.card,
        text: Colors.dark.text,
        border: Colors.dark.border,
        notification: Colors.dark.tint,
    },
};

export default Colors;