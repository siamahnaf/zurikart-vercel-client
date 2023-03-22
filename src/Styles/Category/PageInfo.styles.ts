import { Theme } from "@mui/material/styles";

const styles = {
    Title: {
        fontSize: "17px",
        fontWeight: 600
    },
    Breadcrumb: {
        mt: "5px",
        a: {
            opacity: 0.6,
            fontSize: "14px",
            textDecoration: "none",
            color: "text.primary"
        },
        "& p": {
            fontSize: "14px"
        },
        li: {
            fontSize: "14px"
        }
    },
    SortBy: {
        fontSize: "14px",
        mb: "8px",
        ml: "10px"
    },
    Select: {
        width: "220px",
        border: (theme: Theme) => `1px solid ${theme.palette.primary.borderColor}`,
        borderRadius: "25px",
        select: {
            p: "8px 15px",
            borderRadius: "25px",
            fontSize: {
                xxxl: "16px",
                xxl: "15px",
                msm: "14px",
                xxs: "13px"
            },
            height: "auto",
            "&:focus": {
                background: "transparent"
            }
        },
        "& .MuiSelect-select": {
            minHeight: "0em !important"
        },
        "&:before": {
            border: "none"
        },
        "&:after": {
            border: "none"
        },
        "&:hover": {
            "&:before": {
                border: "none !important"
            }
        }
    },
    Filter: {
        ml: "40px",
        mt: "40px",
        cursor: "pointer",
        flex: {
            msm: "unset",
            xxs: 1
        },
        textAlign: {
            msm: "unset",
            xxs: "right"
        },
        display: {
            lg: "none",
            xxs: "block"
        },
        svg: {
            fontSize: "20px",
        }
    }
}
export default styles;