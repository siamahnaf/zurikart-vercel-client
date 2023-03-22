import { useState } from "react";
import { Typography, Box } from "@mui/material";
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
    description: string;
    image: string;
    subCategory: SubCategory[];
}


const Description = () => {
    const { categoriesData } = useAppSelector(state => state.getCategory);
    const [categories, setCategories] = useState<Categories[]>(categoriesData);

    const router = useRouter();
    return (
        <Box sx={{ ...styles.Container, mt: "15px" }}>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Description
            </Typography>
            <Typography>
                {categories.find((item) => item.slug === router.query.index)?.description}
            </Typography>
        </Box>
    );
};

export default Description;