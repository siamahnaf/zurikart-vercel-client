import { Theme } from "@mui/material/styles";

const styles = {
    List: {
        display: "flex",
        flexDirection: "row",
        textAlign: "right",
        justifyContent: "right",
        li: {
            width: "unset",
            ml: {
                md: "25px",
                xxs: "0"
            },
            a: {
                textDecoration: "none",
                color: "text.primary",
                p: {
                    xxxl: "14px",
                    lg: "10px",
                    xxs: "10px"
                },
                display: "flex",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                svg: {
                    fontSize: "16px"
                },
                span: {
                    fontWeight: 700
                }
            }
        }
    },
    MobileSearchBar: {
        position: "fixed",
        top: 0,
        transform: "translateY(-100%)",
        left: 0,
        width: "100%",
        transition: "all 0.3s",
        opacity: 0,
        bgcolor: "background.default",
        py: {
            sm: "22px",
            xxs: "15px"
        },
        zIndex: 99,
        display: {
            smd: "none",
            xxs: "block"
        },
        px: {
            sm: "40px",
            xs: "20px",
            xxs: "10px"
        },
        "&.active": {
            transform: "translateY(0%)",
            opacity: 1
        }
    }
}

export default styles;