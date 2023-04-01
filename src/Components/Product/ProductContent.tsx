import { useState } from "react";
import { Box, Typography, Stack, NoSsr } from "@mui/material";
import Link from "next/link";
import { Icon } from "@iconify/react";
import parse from "html-react-parser";

//Styles
import styles from "Styles/Product/ProductContent.styles";

//Images
import DoorImage from "Assets/door.png";
import PickupImage from "Assets/pickup.png";

//Types import
import { SingleProduct, ReviewsData } from "Types/Product/Product.types";

//Redux
import { useAppSelector, useAppDispatch } from "Redux/Hook";

const ProductContent = () => {
    //Selector
    const { products } = useAppSelector(state => state.getSingleProduct);
    const { reviewsData } = useAppSelector(state => state.getReviews)
    //State
    const [product, setProduct] = useState<SingleProduct>(products);
    return (
        <Box>
            <Stack direction="row" alignItems="start">
                <Typography variant="h5" component="h5" sx={styles.Title}>
                    {product?.name}
                </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" sx={styles.ReviewsContainer}>
                <Box sx={{ bgcolor: "primary.main", borderRadius: "3px", p: "2px 10px", display: "flex", width: "max-content", color: "white", gap: "5px", alignItems: "center" }}>
                    <span>{"4." + (product?.view ? String(product.view)[0] : 0)}</span>
                    <Icon icon="ic:round-star-rate" />
                </Box>
                <Box sx={{ ml: "10px", span: { opacity: 0.6, fontSize: "14px" } }}>
                    ({product?.view || 0}) <span>/ Write a Review</span>
                </Box>
            </Stack>
            <Typography variant="body2" component="p" sx={styles.AvailabilityAndBrand}>
                Availability : {" "}
                <Typography variant="body2" component="span" sx={{ color: "primary.success" }}>
                    {product.quantity > 0 ? "In Stock" : "Out Of Stock"}
                </Typography>
            </Typography>
            <Box sx={{ mb: "20px" }}>
                <Typography variant="body2" component="p" sx={styles.AvailabilityAndBrand}>
                    Brand : {" "}
                    <Typography variant="body2" component="span">
                        {product?.brand?.name}
                    </Typography>
                </Typography>
            </Box>
            <Typography variant="h5" component="h5" sx={styles.Price}>
                KSh {product?.totalPrice}
            </Typography>
            {product?.notice &&
                <Typography variant="body1" component="p" sx={styles.Notice}>
                    NB: {product?.notice}
                </Typography>
            }
            {product?.attributes?.length > 0 &&
                <Box sx={styles.Size}>
                    <Typography variant="body1" component="p" className="title">
                        Variant:
                    </Typography>
                    <Box className="variants">
                        {product.attributes.map((item, i) => (
                            <Typography variant="body1" component="p" key={i}>
                                {item.variant}
                            </Typography>
                        ))}
                    </Box>
                </Box>
            }
            <Box>
                <NoSsr>
                    {parse(product?.shortSummery || "")}
                </NoSsr>
            </Box>
            <Box sx={styles.BuyButton}>
                <Link href={product.productUrl || "https://zuricart.co.ke/"}>
                    <a>Buy Now</a>
                </Link>
            </Box>
            <Box sx={{ mt: "25px" }}>
                {product?.tag?.map((item, i) => (
                    <Typography component="span" sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", fontSize: "12px", py: "4px", px: "15px", borderRadius: "25px" }} key={i}>
                        {item.name}
                    </Typography>
                ))}
            </Box>
        </Box >
    );
};
export default ProductContent;