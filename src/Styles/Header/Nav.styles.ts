const styles = {
    Embla: {
        overflow: "hidden"
    },
    Embla__container: {
        display: "flex",
        gap: "20px",
        alignItems: "center"
    },
    Embla_Slide: {
        a: {
            display: "block",
            width: "max-content",
            textDecoration: "none",
            fontSize: "15px",
            color: "text.primary",
            userSelect: "none",
            position: "relative"
        }
    },
    Megamenu: {
        position: "absolute",
        bgcolor: "white",
        border: "1px solid rgba(0, 0, 0, 0.15)",
        top: "100%",
        width: "100%",
        p: "10px",
        left: 0,
        zIndex: 99999,
        display: "Grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gridGap: "10px",
        a: {
            display: "block",
            textDecoration: "none",
            my: "8px",
            color: "black",
            fontSize: "15px"
        }
    },
    PrevButton: {
        position: "absolute",
        left: -10,
        background: "linear-gradient(to left, transparent, #f6f6f6,  #f6f6f6)",
        top: 0,
        height: "100%",
        pr: "30px",
        fontSize: "20px",
        svg: {
            fontSize: "22px",
            mb: "-2px"
        },
        "&.hidden": {
            display: "none"
        }
    },
    NextButton: {
        position: "absolute",
        right: -10,
        background: "linear-gradient(to right, transparent, #f6f6f6,  #f6f6f6)",
        top: 0,
        height: "100%",
        pl: "30px",
        fontSize: "20px",
        svg: {
            fontSize: "22px",
            mb: "-2px"
        },
        "&.hidden": {
            display: "none"
        }
    }
}

export default styles;