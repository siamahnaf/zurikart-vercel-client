import { Theme } from "@mui/material/styles";

const styles = {
    SearchBox: {
        border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
        p: {
            xxxl: "8px 14px",
            lg: "6px 12px",
            md: "6px 12px",
            smd: "4px 10px",
            sm: "5px 10px",
            xxs: "5px 10px"
        },
        fontSize: "14px",
        position: "relative"
    },
    SearchButton: {
        bgcolor: "#ff4747",
        fontSize: "15px",
        color: "white",
        px: "26px",
        borderRadius: "0 3px 3px 0",
        display: {
            sm: "block",
            xxs: "none"
        }
    },
    SearchIcon: {
        svg: {
            fontSize: "20px"
        }
    },
    SuggestionBar: {
        bgcolor: "background.default",
        position: "absolute",
        top: "100%",
        left: "0",
        width: "100%",
        zIndex: 9,
        p: "15px 15px 0 15px",
        borderRadius: "10px",
        boxShadow: (theme: Theme) => `0 0 10px ${theme.palette.primary.boxShadow}`,
        maxHeight: "450px",
        overflowY: "auto",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
            display: "none"
        },
        a: {
            mb: "15px",
            display: "block",
            textDecoration: "none",
            color: "text.primary",
            img: {
                borderRadius: "5px"
            }
        }
    },
    title: {
        fontSize: "14px"
    },
    Prices: {
        mt: "1px",
        span: {
            fontSize: "15px",
            mr: "10px",
            "&:first-child": {
                opacity: 0.6,
                textDecoration: "line-through"
            },
            "&:last-child": {
                color: "primary.main",
                fontWeight: 600
            }
        }
    },
    MobileSearchCloseIcon: {
        svg: {
            fontSize: "25px"
        }
    }
}

export default styles;