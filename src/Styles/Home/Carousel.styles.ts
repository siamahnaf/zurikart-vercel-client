const styles = {
    Embla: {
        overflow: "hidden"
    },
    EmblaContainer: {
        display: "flex"
    },
    EmblaSlide: {
        position: "relative",
        flex: "0 0 100%",
        a: {
            pt: "35.425%",
            width: "100%",
            position: "relative",
            display: "block",
            "& .ratioImage": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }
        }
    },
    Dot: {
        position: "absolute",
        bottom: "2%",
        left: "50%",
        transform: "translateX(-50%)",
        button: {
            width: "7px",
            height: "7px",
            bgcolor: "background.default",
            mx: "5px",
            borderRadius: "50%",
            "&.is-selected": {
                bgcolor: "primary.main"
            }
        }
    }
}

export default styles;