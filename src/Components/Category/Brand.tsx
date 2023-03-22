import { useState } from "react";
import { Box, Typography, Stack, List, ListItem } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Styles
import styles from "Styles/Category/Category.styles";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface BrandsData {
    id: string;
    name: string;
    image: string;
    slug: string;
    description: string;
}

const Brand = () => {
    //Selector
    const { brandsData } = useAppSelector(state => state.getBrands);
    //State
    const [brands, setBrands] = useState<BrandsData[]>(brandsData);
    return (
        <Box sx={{ ...styles.Container, mt: "15px" }}>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Brands
            </Typography>
            <List dense disablePadding sx={styles.List}>
                {brands?.length > 0 &&
                    brands.map((brand, i) => (
                        <ListItem dense disableGutters disablePadding key={i}>
                            <Box>
                                <Link href={{
                                    pathname: `/category/brand`,
                                    query: {
                                        query: brand.slug
                                    }
                                }}>
                                    <a>
                                        <Stack direction="row">
                                            {brand?.image &&
                                                <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + brand.image} width={25} height={25} alt={brand.name} />
                                            }
                                            <Typography variant="body2" component="p">
                                                {brand.name}
                                            </Typography>
                                        </Stack>
                                    </a>
                                </Link>
                            </Box>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default Brand;