import { Theme } from "@mui/material/styles";

const styles = {
    Drawer: {
        "& .MuiPaper-root": {
            width: {
                xxxl: "470px",
                xxl: "450px",
                xl: "400px",
                lg: "350px",
                md: "360px",
                smd: "330px",
                msm: "340px",
                sm: "320px",
                xxs: "280px"
            },
            overflow: "hidden",
            zIndex: 9
        }
    },
    LogoArea: {
        py: "8px",
        px: {
            xxxl: "28px",
            xxl: "25px",
            xl: "20px",
            lg: "15px",
            md: "10px",
            msm: "12px",
            sm: "10px",
            xxs: "8px"
        },
        Button: {
            svg: {
                fontSize: "28px"
            }
        }
    },
    CategoryArea: {
        borderTop: (theme: Theme) => `1px solid ${theme.palette.primary.borderColor}`,
        borderBottom: (theme: Theme) => `1px solid ${theme.palette.primary.borderColor}`,
        py: "12px",
        px: {
            xxxl: "28px",
            xxl: "25px",
            xl: "20px",
            lg: "15px",
            md: "10px",
            msm: "12px",
            sm: "10px",
            xxs: "8px"
        },
        h6: {
            fontWeight: 600,
            flex: 1,
            fontSize: "18px"
        }
    },
    Category: {
        mt: "5px",
        px: {
            xxxl: "28px",
            xxl: "25px",
            xl: "20px",
            lg: "15px",
            md: "10px",
            msm: "12px",
            sm: "10px",
            xxs: "8px"
        },
        overflow: "auto",
        li: {
            a: {
                textDecoration: "none",
                color: "text.primary",
                my: "12px",
                display: "block",
                width: "max-content",
                transition: "none",
                "& p": {
                    fontSize: "14px"
                },
                "&:hover": {
                    color: "primary.main"
                }
            }
        },
        "&::-webkit-scrollbar": {
            width: "4px"
        },
        "&::-webkit-scrollbar-track": {
            bgcolor: "#EDEDEE"
        },
        "&::-webkit-scrollbar-thumb": {
            bgcolor: "#D7D8DA"
        }
    },
    ButtonStyle: {
        button: {
            opacity: 0.5,
            pointerEvents: "none",
            "&.active": {
                opacity: 1,
                pointerEvents: "unset",
            },
            svg: {
                transition: "0.3s ease",
                "&.active": {
                    rotate: "90deg"
                }
            }
        }
    }
}

export default styles;