import { useState } from "react";
import { Box, Typography, Stack, Grid } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

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
                <Typography variant="body2" component="p" sx={styles.Reviews}>
                    {product.view && (product.view < 10 ? `0${product.view}` : product.view) || 0} views
                </Typography>
                <Typography variant="body2" component="p" sx={{ fontSize: "14px" }}>
                    SKU: {product?.id}
                </Typography>
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
            {product?.totalPrice < product?.price &&
                <Typography variant="h5" component="h5" sx={styles.OriginalPrice}>
                    ৳{product?.price}
                    <Typography variant="body1" component="span">
                        /1
                    </Typography>
                </Typography>
            }
            <Typography variant="h4" component="h4" sx={styles.Price}>
                ৳{product?.totalPrice}
                <Typography variant="body1" component="span">
                    /1
                </Typography>
            </Typography>
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
            <Box sx={{ my: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item {...{ md: 12 }}>
                        <Stack direction="row" gap={3} sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", py: "10px", px: "10px", borderRadius: "10px" }}>
                            <Box sx={{ flexBasis: "10%" }}>
                                <Image src={DoorImage} alt="Door Image" />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" component="h5" sx={{ fontSize: "17px", fontWeight: 600 }}>Door Delivery</Typography>
                                <Typography variant="body1" component="p" sx={{ fontSize: "14px" }}>
                                    Shipping KSh{product.doorDeliveryFee}
                                </Typography>
                                <Typography variant="body1" component="p" sx={{ fontSize: "14px" }}>
                                    Delivery by 24 hours delivery when you order within next 20hrs 8mins
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item {...{ md: 12 }}>
                        <Stack direction="row" gap={3} sx={{ border: "1px solid rgba(0, 0, 0, 0.2)", py: "10px", px: "10px", borderRadius: "10px" }}>
                            <Box sx={{ flexBasis: "10%" }}>
                                <Image src={PickupImage} alt="Door Image" />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="h5" component="h5" sx={{ fontSize: "17px", fontWeight: 600 }}>Pickup Station</Typography>
                                <Typography variant="body1" component="p" sx={{ fontSize: "14px" }}>
                                    Shipping KSh{product.pickupFee}
                                </Typography>
                                <Typography variant="body1" component="p" sx={{ fontSize: "14px" }}>
                                    Delivery by 24 hours delivery when you order within next 20hrs 8mins
                                </Typography>
                            </Box>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={styles.BuyButton}>
                <Link href={product.productUrl || "https://zuricart.co.ke/"}>
                    <a>Buy Now</a>
                </Link>
            </Box>
        </Box >
    );
};
export default ProductContent;