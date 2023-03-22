import { useState, useMemo } from "react";
import { Box, Typography, NoSsr } from "@mui/material";
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
    return (
        <Box>
            <NoSsr>
                <Typography variant="body1" component="p" sx={{ fontSize: "15px" }}>
                    {parse(product?.description || "")}
                </Typography>
            </NoSsr>
            <Typography variant="body1" component="p" sx={styles.Desclaimer}>
                Disclaimer: {" "}
                <Typography variant="body1" component="span">
                    {product?.disclaimer}
                </Typography>
            </Typography>
        </Box>
    );
};
export default Description;