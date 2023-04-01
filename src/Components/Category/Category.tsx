import { useState } from "react";
import { Box, Typography, Stack, List, ListItem, Collapse } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//Styles
import styles from "Styles/Category/Category.styles";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface SubCategory {
    id: string,
    name: string,
    slug: string;
}
interface Categories {
    id: string;
    name: string;
    slug: string;
    image: string;
    subCategory: SubCategory[];
}

const Category = () => {
    //Selector
    const { categoriesData } = useAppSelector(state => state.getCategory);
    //State
    const [categories, setCategories] = useState<Categories[]>(categoriesData);
    //Handler
    const router = useRouter();
    const { index, ...prams } = router.query;
    return (
        <Box sx={styles.Container}>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Categories
            </Typography>
            <List dense disablePadding sx={styles.List}>
                {categories?.length > 0 &&
                    categories.map((category, i) => (
                        <ListItem dense disableGutters disablePadding key={i}>
                            <Box>
                                <Link href={`/category/${category.slug}`}>
                                    <a>
                                        <Stack direction="row">
                                            {category?.image &&
                                                <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + category.image} width={25} height={25} alt={category.name} placeholder="blur" blurDataURL={process.env.NEXT_PUBLIC_IMAGE_PATH + category.image} />
                                            }
                                            <Typography variant="body2" component="p">
                                                {category.name}
                                            </Typography>
                                        </Stack>
                                    </a>
                                </Link>
                                <Collapse in={category.slug === router.query.index}>
                                    {category.subCategory.length > 0 &&
                                        <List dense disablePadding sx={{ ml: "25px" }}>
                                            {category.subCategory.map((item, i) => (
                                                <ListItem dense disableGutters disablePadding key={i}>
                                                    <Link href={{
                                                        pathname: `/category/${category.slug}`,
                                                        query: {
                                                            ...prams,
                                                            subcategory: item.slug
                                                        }
                                                    }} key={i}>
                                                        <a>
                                                            <Typography variant="body1" component="p">
                                                                {item.name}
                                                            </Typography>
                                                        </a>
                                                    </Link>
                                                </ListItem>
                                            ))}
                                        </List>
                                    }
                                </Collapse>
                            </Box>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default Category;