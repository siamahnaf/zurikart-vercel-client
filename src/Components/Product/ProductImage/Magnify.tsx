import { useState, useMemo } from "react";
import { Box } from "@mui/material";
import ReactImageMagnify from "react-image-magnify";

//Types import
import { SingleProduct } from "Types/Product/Product.types";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface Props {
    current: number
}

const Magnify = ({ current }: Props) => {
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
        <Box sx={{ width: "100%", height: "100%", display: "flex" }}>
            <ReactImageMagnify
                className="ImageMagnification"
                smallImage={{
                    alt: "Product",
                    src: process.env.NEXT_PUBLIC_IMAGE_PATH + product?.productImages[current]?.url,
                    isFluidWidth: true
                }}
                largeImage={{
                    src: process.env.NEXT_PUBLIC_IMAGE_PATH + product?.productImages[current]?.url,
                    width: 1500,
                    height: 1800
                }}
                style={{
                    borderRadius: "10px"
                }}
                imageStyle={{
                    borderRadius: "10px"
                }}
                enlargedImagePosition="over"
                enlargedImageContainerStyle={{
                    borderRadius: "10px"
                }}
            />
        </Box>
    );
};
export default Magnify;