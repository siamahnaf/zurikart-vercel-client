import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface PaletteColor {
        darker: string;
        lighter: string;
        boxShadow: string;
        whiter: string;
        whiterHover: string;
        borderColor: string;
        stepBorder: string;
        darkerWhite: string;
        blue: string;
        facebook: string;
        google: string;
        timer: string;
        success: string;
        cart: string;
        support: string;
        MuiGradientCart: string;
        MuiGradientWish: string;
        MuiGradientOrder: string;
    }
    interface PaletteColorOptions {
        main: string;
        darker: string;
        lighter: string;
        boxShadow: string;
        whiter: string;
        whiterHover: string;
        borderColor: string;
        stepBorder: string;
        darkerWhite: string;
        blue: string;
        facebook: string;
        google: string;
        timer: string;
        success: string;
        cart: string;
        support: string;
        MuiGradientCart: string;
        MuiGradientWish: string;
        MuiGradientOrder: string;
    }
    interface BreakpointOverrides {
        xs: true;
        xxs: true;
        sm: true;
        msm: true;
        lsm: true;
        smd: true;
        md: true;
        lg: true;
        lgs: true;
        xl: true;
        xxl: true;
        xxxl: true
    }
}

const theme = createTheme({
    typography: {
        fontFamily: '"Open Sans", sans-serif',
    },
    palette: {
        mode: "light",
        text: {
            primary: "#1B1B28", // Default Text Color,
        },
        background: {
            default: "#ffffff"
        },
        primary: {
            main: "#124b9a", // Main Document Color
            darker: "#232f3e", // Darker 
            darkerWhite: "#c7c7c7", // Darker white
            lighter: "#fbcfd5", // Primary main lighter
            boxShadow: "#00000024", // Box Shadow color,
            whiter: "#f6f6f6", //Whiter color
            whiterHover: "#dae0e5", // Whiter Hover color
            borderColor: "#e2e5ec", // Border color,
            stepBorder: "#cbd5e0", //Stepper border color
            blue: "#0062cc", //Blue color,
            facebook: "#3B5998", //Facebook color
            google: "#E62833", //Google color
            timer: "#c1c23a", //Timer color
            success: "#0abb75", //Success color
            cart: "#dd9f08", //Cart button color
            support: "#8f97ab", //Support Gray Color
            MuiGradientCart: "linear-gradient(315deg,#eb4786 0%,#b854a6 74%)",
            MuiGradientWish: "linear-gradient(315deg,#875fc0 0%,#5346ba 74%)",
            MuiGradientOrder: "linear-gradient(315deg,#47c5f4 0%,#6791d9 74%)"
        }
    },
    breakpoints: {
        values: {
            xxs: 0, // Double Extra Small Devices
            xs: 360, // Extra Small Devices ---- Default BreakPoints
            sm: 480, // Small Devices ---- Default BreakPoints
            msm: 576, // Medium Small Medium Devices
            lsm: 640, // Large Small Medium Devices
            smd: 768, // Small Medium Devices
            md: 992, // Medium Devices ---- Default BreakPoints
            lg: 1200, // Large Devices  ---- Default BreakPoints
            lgs: 1365, //Large small devices --Default BreakPoints
            xl: 1536, // Extra Large Devices ---- Default BreakPoints
            xxl: 1980, // Double Extra Large Devices
            xxxl: 2560 // Triple Extra Devices
        }
    },
    components: {
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    fontFamily: "Open Sans"
                }
            },
            defaultProps: {
                disableRipple: true
            }
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    paddingLeft: '4%',
                    paddingRight: '4%'
                }
            }
        }
    }
});

export default theme;