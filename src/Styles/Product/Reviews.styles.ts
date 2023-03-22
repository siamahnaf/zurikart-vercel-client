import { Theme } from "@mui/material";

const styles = {
    Card: {
        bgcolor: "background.default",
        boxShadow: (theme: Theme) => `0 0 10px ${theme.palette.primary.boxShadow}`,
        mb: "1.5em",
        borderRadius: "10px",
        p: "12px 20px 20px"
    },
    Images: {
        img: {
            borderRadius: "50%"
        },
        "& p": {
            ml: "10px",
            fontSize: "18px",
            fontWeight: 600
        }
    },
    Rating: {
        textAlign: "center",
        pt: "5px",
        bgcolor: "primary.borderColor",
        width: "45px",
        height: "45px",
        ml: "auto",
        borderRadius: "5px"
    },
    Description: {
        mt: "10px",
        fontSize: "15px"
    }
}
export default styles;