import { useState, useMemo } from "react";
import { Box, Typography, NoSsr, Collapse, ButtonBase } from "@mui/material";
import parse from "html-react-parser";

//Styles
import styles from "Styles/Product/ProductInfo.styles";

//Types import
import { SingleProduct } from "Types/Product/Product.types";

//Redux
import { useAppSelector } from "Redux/Hook";



const Description = () => {
    //Selector
    const { products } = useAppSelector(state => state.getSingleProduct);
    //State
    const [product, setProduct] = useState<SingleProduct>(products);
    //Effect
    useMemo(() => {
        if (products) {
            setProduct(products)
        }
    }, [products])
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };
    return (
        <Box>
            <Collapse sx={{ position: "relative" }} in={expanded} collapsedSize={250}>
                <Box>
                    <NoSsr>
                        <Box sx={tableStyles}>
                            {parse(product?.description || "")}
                        </Box>
                    </NoSsr>
                    <Typography variant="body1" component="p" sx={styles.Desclaimer}>
                        Disclaimer: {" "}
                        <Typography variant="body1" component="span">
                            {product?.disclaimer}
                        </Typography>
                    </Typography>
                    <Box sx={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "15px", background: "linear-gradient(to top, #fff,#fff, transparent)" }} />
                </Box>
            </Collapse>
            <ButtonBase onClick={toggleExpanded} sx={{ color: "primary.main", fontSize: "14px" }}>
                {expanded ? 'Show Less' : 'Show More'}
            </ButtonBase>
        </Box>
    );
};
export default Description;

const tableStyles = {
    table: {
        borderCollapse: "collapse",
        width: "100%",
        tableLayout: "auto",
        tr: {
            "td, th": {
                border: "1px solid rgba(0, 0, 0, 0.1) !important",
                tableLayout: "auto",
                m: 0,
                display: "table-cell",
                p: "6px 8px",
                "&:first-child": {
                    bgcolor: "#f0f2f5"
                }
            },
        }
    }
}