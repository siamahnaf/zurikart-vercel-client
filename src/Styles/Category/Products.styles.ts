import { Theme } from "@mui/material/styles";

const styles = {
    Pagination: {
        textAlign: "center",
        mt: "2.5em",
        ul: {
            justifyContent: "center",
            li: {
                button: {
                    bgcolor: "primary.borderColor",
                    color: "primary.main",
                    "&:hover, &.Mui-selected ": {
                        bgcolor: (theme: Theme) => theme.palette.primary.main + "!important",
                        color: "background.default"
                    }
                }
            }
        }
    }
}
export default styles;