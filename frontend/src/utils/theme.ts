import { createMuiTheme } from "@material-ui/core";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#FF0055",
        },
        secondary: {
            main: "#F8DF00",
        },
    },
    // typography: {
    //     fontFamily: ["Nunito", "sans-serif"],
    // },
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
            },
        },
    },
    props: {
        MuiButton: {
            disableRipple: true,
        },
    },
});
