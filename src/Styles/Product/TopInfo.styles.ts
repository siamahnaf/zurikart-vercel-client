const styles = {
    Breadcrumb: {
        a: {
            textDecoration: "none",
            color: "primary.main",
            fontSize: "15px"
        },
        "& p": {
            fontSize: "15px",
            color: "text.primary"
        }
    },
    Separator: {
        fontSize: "12px"
    },
    List: {
        li: {
            width: {
                lsm: "100%",
                xxs: "unset"
            },
            mx: {
                lsm: 0,
                xxs: "15px"
            },
            ml: {
                lsm: "12px",
                xxs: "0"
            },
            "& p": {
                fontSize: "15px",
                mb: "5px",
                mt: "-4px"
            },
            svg: {
                fontSize: "18px",
                color: "primary.main"
            },
            "&:hover": {
                svg: {
                    color: "primary.blue"
                }
            }
        }
    },
    Divider: {
        mt: "20px",
        mb: "18px"
    }
}

export default styles;