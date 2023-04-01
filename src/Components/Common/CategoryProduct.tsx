import { Box, Grid, Typography, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

//Images
import Exce from "Assets/exx.png";

//Styles
import styles from "Styles/Common/Products.styles";

//Image
import Default from "Assets/product.png";
import Nothings from "Assets/nothing.png";

//Type import 
import { ProductsData } from "Types/Category/category.type";

//Types
interface Props {
    products: ProductsData[]
}

const CategoryProduct = ({ products }: Props) => {
    return (
        <Box>
            <Grid container spacing={1}>
                {products.length > 0 &&
                    products.map((product, i) => (
                        <Grid item {...{ xxxl: 2, lgs: 3, lg: 4, md: 3, lsm: 4, sm: 6, xs: 6, xxs: 12 }} key={i}>
                            <Box sx={styles.Card}>
                                <Link href={`/product/${product.slug}`}>
                                    <a aria-label="carousel">
                                        {product.productImages.length > 0 ?
                                            (<Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + product.productImages[0]?.url} alt={product.name} height={500} width={500} />) : (
                                                <Image src={Default} alt={product.name} height={500} width={500} />
                                            )}
                                        <Typography variant="body1" component="p">
                                            {product.name}
                                        </Typography>
                                        <Box sx={styles.Prices}>
                                            <Typography variant="body1" component="span" >
                                                Ksh {product.totalPrice}
                                            </Typography>
                                        </Box>
                                        <Stack direction="row" alignItems="center" sx={{ mt: "10px" }}>
                                            <Box sx={{ flexBasis: "40%", mt: "5px" }}>
                                                <Image src={Exce} alt="sdfsgd" />
                                            </Box>
                                            <Box sx={{ flex: 1, textAlign: "right" }}>
                                                <Box sx={{ bgcolor: "primary.main", borderRadius: "3px", p: "2px 10px", display: "flex", width: "max-content", ml: "auto", color: "white", gap: "5px", alignItems: "center" }}>
                                                    <span>{"4." + (product?.view ? String(product.view)[0] : 0)}</span>
                                                    <Icon icon="ic:round-star-rate" />
                                                </Box>
                                            </Box>
                                            <Box sx={{ ml: "5px" }}>
                                                ({product?.view || 0})
                                            </Box>
                                        </Stack>
                                    </a>
                                </Link>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
            {
                products.length === 0 &&
                <Box sx={{ textAlign: "center", mt: "35px" }}>
                    <Image src={Nothings} alt="Nothing found" width={400} height={400} />
                </Box>
            }
        </Box >
    );
};
export default CategoryProduct;