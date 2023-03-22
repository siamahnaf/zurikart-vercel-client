import { Dispatch, SetStateAction, useState, useMemo } from "react";
import { Box, Grid } from "@mui/material";
import Image from "next/image";

//Styles
import styles from "Styles/Product/Images.styles";

//Types import
import { SingleProduct } from "Types/Product/Product.types";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface Props {
    setCurrent: Dispatch<SetStateAction<number>>,
    current: number
}

const Images = ({ setCurrent, current }: Props) => {
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
            <Grid container spacing={0} direction={{ lg: "column", xxs: "row" }}>
                {product?.productImages?.length > 0 &&
                    product.productImages.map((img, i) => (
                        <Grid item {...{ md: 2.5, smd: 2, lsm: 2, sm: 3, xs: 4, xxs: 6 }} key={i}>
                            <Box className={current === i ? "active" : ""} onClick={() => setCurrent(i)} key={i} sx={styles.Images}>
                                <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + img.url} alt={`product${i}`} width={80} height={80} />
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Images;