import { Theme } from "@mui/material/styles";

const styles = {
    Container: {
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        bgcolor: "background.default",
        py: "15px",
        zIndex: 99,
        display: {
            lgs: "none",
            xxs: "block"
        }
    },
    List: {
        li: {
            justifyContent: "center",
            mx: "2px",
            cursor: "pointer",
            textAlign: "center",
            a: {
                textDecoration: "none",
                color: "text.primary",
                display: "block",
                width: "100%",
                textAlign: "center",
                "& p": {
                    fontSize: "13px"
                },
                svg: {
                    fontSize: "22px"
                }
            }
        }
    }
};
export default styles;