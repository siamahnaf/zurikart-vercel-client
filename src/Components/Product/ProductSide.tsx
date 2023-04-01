import { useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Images
import Exce from "Assets/exx.png";

//Images
import DoorImage from "Assets/door.png";
import PickupImage from "Assets/pickup.png";
import Policy from "Assets/policy.png";
//Types import
import { SingleProduct, ReviewsData } from "Types/Product/Product.types";
//Redux
import { useAppSelector, useAppDispatch } from "Redux/Hook";

const ProductSide = () => {
    //Selector
    const { products } = useAppSelector(state => state.getSingleProduct);
    //State
    const [product, setProduct] = useState<SingleProduct>(products);
    return (
        <Box>
            <Box sx={{ border: "1px solid rgba(0, 0, 0, 0.3)", p: "8px 10px", borderRadius: "5px" }}>
                <Typography variant="body2">
                    Delivery & Return
                </Typography>
                <Box sx={{ width: "80px", mt: "12px" }}>
                    <Image src={Exce} alt="Hard" />
                </Box>
            </Box>
            <Box sx={{ border: "1px solid rgba(0, 0, 0, 0.3)", p: "8px 10px", borderRadius: "5px", mt: "20px" }}>
                <Stack direction="row" gap={2} sx={{ mb: "10px" }}>
                    <Box sx={{ flexBasis: "18%" }}>
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
                <Stack direction="row" gap={2} sx={{ mb: "10px" }}>
                    <Box sx={{ flexBasis: "18%" }}>
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
                <Stack direction="row" gap={2}>
                    <Box sx={{ flexBasis: "18%" }}>
                        <Image src={Policy} alt="Door Image" />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                        <Typography variant="h5" component="h5" sx={{ fontSize: "17px", fontWeight: 600 }}>Return Policy</Typography>
                        <Typography variant="body1" component="p" sx={{ fontSize: "14px" }}>
                            Easy Return. Quick Refund <Link href="https://zuricart.co.ke/return-and-cancellation"><a>See More</a></Link>
                        </Typography>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default ProductSide;