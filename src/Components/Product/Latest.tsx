import { useState } from "react";
import { Box } from "@mui/material";

//Section Header
import SectionHeader from "Components/Common/SectionHeader";

//Components
import ProductCarousel from "Components/Common/ProductCarousel";

//Types import 
import { ProductsData } from "Types/Category/category.type";

//Redux
import { useAppSelector } from "Redux/Hook";

const Latest = () => {
    //Selector
    const { productsData } = useAppSelector(state => state.getProduct);
    //State
    const [products, setProducts] = useState<ProductsData[]>(productsData);
    //Effect
    return (
        <Box>
            <SectionHeader
                title="More Selling Product"
                description="Check & Get Your Desired Product"
            />
            <ProductCarousel products={products} />
        </Box>
    );
};

export default Latest;