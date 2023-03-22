const styles = {
    Container: {
        bgcolor: "primary.whiter",
        p: "14px 18px",
        borderRadius: "10px"
    },
    Title: {
        color: "primary.main",
        textTransform: "uppercase",
        fontSize: "16px",
        fontWeight: 600,
        mb: "20px"
    },
    List: {
        li: {
            my: "15px",
            a: {
                textDecoration: "none",
                color: "text.primary",
                "& p": {
                    fontSize: ".875rem",
                    ml: "12px"
                }
            }
        }
    }
};

export default styles;