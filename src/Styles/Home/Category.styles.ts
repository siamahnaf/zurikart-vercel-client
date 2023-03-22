const styles = {
    Card: {
        textAlign: "center",
        a: {
            borderRadius: "10px",
            bgcolor: "background.default",
            py: {
                xxxl: "70px",
                xxl: "45px",
                xl: "30px",
                lg: "35px",
                md: "25px",
                smd: "22px",
                msm: "35px",
                sm: "28px",
                xxs: "15px"
            },
            px: "25px",
            textDecoration: "none",
            color: "text.primary",
            display: "block",
            "& p": {
                mt: "15px",
                fontSize: "15px",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                WebkitLineClamp: "1"
            }
        }
    },
    MoreButton: {
        textAlign: "center",
        mt: "3rem",
        button: {
            a: {
                textDecoration: "none",
                color: "background.default",
                bgcolor: "primary.main",
                fontSize: "15px",
                p: "12px 40px",
                borderRadius: "12px"
            }
        }
    }
}

export default styles;