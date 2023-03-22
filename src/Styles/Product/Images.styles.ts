import { Theme } from "@mui/material/styles";

const styles = {
    Images: {
        border: "2px solid transparent",
        width: "max-content",
        borderRadius: "5px",
        p: "5px",
        cursor: "pointer",
        span: {
            display: "block !important",
            img: {
                borderRadius: "5px"
            }
        },
        mb: "5px",
        "&.active": {
            border: (theme: Theme) => `2px solid ${theme.palette.primary.main}`,
        }
    }
}

export default styles;