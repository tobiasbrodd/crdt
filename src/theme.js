import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        primary: {
            main: "#555B6E"
        },
        secondary: {
            main: "#FAF9F9"
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            '"Roboto"',
            '"Oxygen"',
            '"Ubuntu"',
            '"Cantarell"',
            '"Fira Sans"',
            '"Droid Sans"',
            '"Helvetica Neue"',
            'sans-serif'
        ].join(','),
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontSize: 18,
        htmlFontSize: 20,
        h1: {
            fontSize: "2.5rem",
            lineHeight: "2.75rem",
            fontWeight: 500,
            color: "#262626"
        },
        h2: {
            fontSize: "2rem",
            lineHeight: "2.25rem",
            fontWeight: 500,
            color: "#262626"
        },
        h3: {
            fontSize: "1.75rem",
            lineHeight: "2.0rem",
            fontWeight: 500,
            color: "#262626"
        },
        h4: {
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontWeight: 500,
            color: "#262626"
        },
        h5: {
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            color: "#262626"
        },
        h6: {
            fontSize: "1rem",
            lineHeight: "1.25rem",
            fontWeight: 500,
            color: "#262626"
        },
        subtitle1: {
            fontSize: "1.5rem",
            lineHeight: "1.75rem",
            fontWeight: 500,
            color: "#262626"
        },
        subtitle2: {
            fontSize: "1.25rem",
            lineHeight: "1.5rem",
            fontWeight: 500,
            color: "#262626"
        },
        body1: {
            fontSize: "1rem",
            fontWeight: 400,
            color: "#595959"
        },
        body2: {
            fontSize: "1.2rem",
            fontWeight: 400,
            color: "#595959"
        },
        button: {
            fontSize: "1.2rem",
            fontWeight: 500,
            textTransform: 'none'
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: true
        }
    },
    overrides: {
        MuiTabs: {
            indicator: {
                backgroundColor: "#555B6E",
                transition: "none"
            }
        },
        MuiMenuItem: {
            root: {
                fontSize: "1.2rem"
            }
        }
    }
});