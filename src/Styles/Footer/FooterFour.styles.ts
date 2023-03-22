import { Theme } from "@mui/material/styles";

const styles = {
    Title: {
        color: "background.default",
        textTransform: "uppercase",
        fontWeight: 500,
        fontSize: "1rem",
        mb: "0.5rem"
    },
    SubscribeContainer: {
        position: "relative",
        mb: "1.5rem"
    },
    InputBase: {
        bgcolor: "background.default",
        p: "6px 15px",
        fontSize: "15px",
        borderRadius: "5px"
    },
    Subscribe: {
        position: "absolute",
        right: 0,
        height: "100%",
        bgcolor: "primary.main",
        borderRadius: "0 4px 4px 0",
        px: "15px",
        color: "background.default",
        fontSize: "14px",
        textTransform: "uppercase",
        fontWeight: 600
    },
    Social: {
        mt: "10px",
        display: "flex",
        flexDirection: "row",
        li: {
            width: "unset",
            a: {
                textDecoration: "none",
                color: "background.default",
                border: (theme: Theme) => `1px solid ${theme.palette.background.default}`,
                mr: "10px",
                width: "45px",
                height: "45px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "3px",
                svg: {
                    fontSize: "22px"
                }
            }
        }
    }
}

export default styles;