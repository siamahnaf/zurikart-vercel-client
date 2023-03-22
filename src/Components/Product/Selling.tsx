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

const Selling = () => {
    //Selector
    const { sellingProducts } = useAppSelector(state => state.getSelling);
    //State
    const [products, setProducts] = useState<ProductsData[]>(sellingProducts);
    //Effect
    return (
        <Box>
            <SectionHeader
                title="Top Selling Products"
                description="Check & Get Your Desired Product"
            />
            <ProductCarousel products={products} />
        </Box>
    );
};
export default Selling;