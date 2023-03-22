import { Theme } from "@mui/material/styles";

const styles = {
    Buttons: {
        button: {
            textTransform: "capitalize",
            color: "text.primary",
            fontWeight: 600,
            fontSize: "17px",
            border: (theme: Theme) => `2px solid transparent`,
            borderRadius: "10px",
            height: "auto",
            minHeight: "auto",
            p: "6px 14px",
            mr: "10px",
            "&.Mui-selected": {
                color: "text.primary",
                border: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
            }
        }
    },
    Desclaimer: {
        mt: "3em",
        lineHeight: 1.8,
        fontWeight: 700,
        color: "primary.main",
        fontSize: "17px",
        span: {
            color: "text.primary",
            fontWeight: 500,
            fontSize: "17px"
        }
    },
    TableContainer: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.borderColor}`
    },
    TableCell: {
        borderRight: (theme: Theme) => `1px solid ${theme.palette.primary.borderColor}`
    }
}
export default styles;