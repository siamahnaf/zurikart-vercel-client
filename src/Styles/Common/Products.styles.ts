const styles = {
    Card: {
        bgcolor: "background.default",
        px: "10px",
        py: "10px",
        boxShadow: "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)",
        borderRadius: "4px",
        position: "relative",
        a: {
            textDecoration: "none",
            color: "text.primary",
            img: {
                borderRadius: "10px",
            },
            "& p": {
                mt: "1.8rem",
                overflow: "hidden",
                display: "block",
                height: "46px",
                WebkitLineClamp: "2",
                WebkitBoxOrient: "vertical",
                fontSize: "16px"
            }
        }
    },
    Prices: {
        span: {
            fontWeight: 600,
            fontSize: "16px",
            opacity: 0.8
        }
    },
    ArrowButton: {
        button: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-120%)",
            bgcolor: "#e1e1d8",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            svg: {
                fontSize: {
                    sm: "22px",
                    xxs: "18px"
                }
            },
            "&.arrow--left": {
                left: "-20px",
            },
            "&.arrow--right": {
                right: "-20px",
            }
        }
    },
}

export default styles;