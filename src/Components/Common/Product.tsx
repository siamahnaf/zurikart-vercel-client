import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Image
import Default from "Assets/product.png";

//Styles
import styles from "Styles/Common/Products.styles";

//Import types
import { Products } from "Types/Home/Section.types";

//Types
interface Props {
    products: Products[]
}

const Product = ({ products }: Props) => {
    return (
        <Box>
            <Grid container spacing={{ sm: 3, xxs: 2 }}>
                {products?.length > 0 &&
                    products.map((product, i) => (
                        <Grid item {...{ xl: 2, lgs: 2.4, md: 3, smd: 4, sm: 6, xs: 6, xxs: 12 }} key={i}>
                            <Box sx={styles.Card}>
                                <Link href={`/product/${product.slug}`}>
                                    <a>
                                        {product.productImages.length > 0 ?
                                            (<Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + product.productImages[0]?.url} alt={product.name} height={500} width={500} placeholder="blur" blurDataURL={process.env.NEXT_PUBLIC_IMAGE_PATH + product.productImages[0]?.url} />) : (
                                                <Image src={Default} alt={product.name} height={500} width={500} placeholder="blur" blurDataURL={product.name} />
                                            )}
                                        <Typography variant="body1" component="p">
                                            {product.name}
                                        </Typography>
                                        <Box sx={styles.Prices}>
                                            {product.price > product.totalPrice &&
                                                <Typography variant="body1" component="span" className="priceTag">
                                                    ৳{product.price}
                                                </Typography>
                                            }
                                            <Typography variant="body1" component="span" >
                                                ৳{product.totalPrice}
                                            </Typography>
                                        </Box>
                                    </a>
                                </Link>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    );
};
export default Product;