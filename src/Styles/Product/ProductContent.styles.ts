import { Theme } from "@mui/material/styles";

const styles = {
    Title: {
        flex: 1,
        fontSize: {
            sm: "1.5rem",
            xxs: "1.2rem"
        },
        fontWeight: 600,
        lineHeight: "1.4"
    },
    WishButton: {
        bgcolor: "primary.main",
        color: "background.default",
        p: "12px 12px",
        border: (theme: Theme) => `2px solid ${theme.palette.primary.borderColor}`,
        borderRadius: "10px",
        ml: "2em",
        svg: {
            fontSize: "16px"
        }
    },
    ReviewsContainer: {
        my: "10px"
    },
    Reviews: {
        opacity: 0.5,
        fontSize: "14px",
        mr: "10px",
        pr: "10px",
        borderRight: (theme: Theme) => `1px solid ${theme.palette.primary.borderColor}`
    },
    AvailabilityAndBrand: {
        mt: "10px",
        fontSize: "13px",
        fontWeight: 600,
        span: {
            ml: "10px",
            fontWeight: 600
        }
    },
    OriginalPrice: {
        my: "10px",
        fontSize: "1.25rem",
        textDecoration: "line-through",
        opacity: 0.6
    },
    Price: {
        mb: "10px",
        fontWeight: 600,
        color: "primary.main",
        span: {
            color: "text.primary",
            ml: "10px",
            opacity: 0.6,
            fontSize: "14px"
        }
    },
    Size: {
        mb: "20px",
        "& .title": {
            fontSize: "14px",
            fontWeight: 600,
            mb: "15px"
        },
        "& .variants": {
            display: "flex",
            flexWrap: "wrap",
            "& p": {
                border: (theme: Theme) => `1px solid ${theme.palette.primary.borderColor}`,
                p: "8px 18px",
                mr: "10px",
                borderRadius: "5px",
                cursor: "pointer",
                mb: "15px",
                width: "max-content",
                "&.active": {
                    border: (theme: Theme) => `1px solid ${theme.palette.primary.main}`,
                }
            }
        },

    },
    Quantity: {
        mb: "15px",
        "& p": {
            fontSize: "14px",
            fontWeight: 600,
            mb: "15px"
        }
    },
    QuantityBox: {
        "& .InputBase": {
            width: "45px",
            bgcolor: "#f6f6f6",
            py: "5px",
            input: {
                textAlign: "center"
            }
        },
        button: {
            bgcolor: "primary.main",
            py: "6px",
            color: "background.default",
            px: "14px",
            "&:first-child": {
                borderRadius: "5px 0 0 5px"
            },
            "&:last-child": {
                borderRadius: "0 5px 5px 0"
            }
        }
    },
    AvailCount: {
        mt: "10px",
        ml: "10px",
        fontSize: "13px",
        opacity: 0.6
    },
    Total: {
        "& p": {
            fontSize: "14px",
            fontWeight: 600,
            mb: "5px"
        },
        h5: {
            color: "primary.main",
            fontWeight: 600,
            fontSize: "1.5rem"
        }
    },
    AddToCart: {
        mt: "2em",
        width: "100%",
        bgcolor: "primary.cart",
        color: "background.default",
        fontSize: "15px",
        fontWeight: 600,
        borderRadius: "10px",
        py: "10px",
        mb: "15px",
        "&.disabled": {
            opacity: 0.5
        }
    },
    BuyButton: {
        mt: "2em",
        a: {
            textDecoration: "none",
            bgcolor: "primary.main",
            color: "white",
            width: "100%",
            display: "block",
            py: "8px",
            textAlign: "center",
            borderRadius: "5px"
        }
    }
}

export default styles;