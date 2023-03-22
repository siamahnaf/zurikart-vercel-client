import { useState, useMemo } from "react";
import { Box, Typography, NoSsr } from "@mui/material";
import ReactPlayer from "react-player";

//Styles
import styles from "Styles/Product/Video.styles";

//Types import
import { SingleProduct } from "Types/Product/Product.types";

//Redux
import { useAppSelector } from "Redux/Hook";

const Video = () => {
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
            {product?.youtubeLink &&
                <>
                    <Typography variant="h6" component="h6" sx={styles.Title}>
                        Product Videos
                    </Typography>
                    <Box sx={{ width: { lsm: "60%", xxs: "100%" } }}>
                        <Box sx={styles.Main}>
                            <Box sx={styles.content}>
                                <NoSsr>
                                    <ReactPlayer
                                        url={product.youtubeLink}
                                        controls
                                        width="100%"
                                        height="100%"
                                    />
                                </NoSsr>
                            </Box>
                        </Box>
                    </Box>
                </>
            }
        </Box>
    );
};
export default Video;