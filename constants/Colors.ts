// https://colorhunt.co/palette/2c3333395b64a5c9cae7f6f2

//Tema sendo usado agora, ainda não decidi o tema claro
//https://coolors.co/222222-272729-222831-395b64-417d7a-67babf-ffffff


const Colors = {
    light: {
        text: "rgb(28, 28, 30)",
        background: "rgb(242, 242, 242)",
        tint: "#67BABF",
        ripple: "#1A3C40",
        highlight: "#395B64",
        inputBackground: "#FFF",
        inputText: "#000",
        card: "rgb(255, 255, 255)",
        cardRipple: "#222222",
        border: "rgb(216, 216, 216)",
    },
    dark: {
        text: "#fff",
        background: "#222222",
        tint: "#395B64",
        ripple: "#fff",
        highlight: "#67BABF",
        inputBackground: "#FFF",
        inputText: "#000",
        card: "#222831",
        cardRipple: "#222222",
        border: "#272729",
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