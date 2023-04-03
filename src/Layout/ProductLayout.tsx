import { Fragment, FC, ReactNode } from "react";
import { Box } from "@mui/material";

//Components
import Footer from "./Footer";
import Header from "./Header";
import Search from "Components/Header/ProductSearch";
import BottomNav from "Components/Header/BottomNav";

//Seo Components
import ProductSeo from "Utilis/ProductSeo";

//Types
interface Props {
    children: ReactNode;
}

const ProductLayout: FC<Props> = ({ children }) => {
    return (
        <Fragment>
            <ProductSeo />
            <Box sx={{ display: { md: "none", xxs: "block" }, px: "10px", mt: "15px" }}>
                <Search />
                <BottomNav />
            </Box>
            <Box sx={{ display: { md: "block", xxs: "none" } }}>
                <Header />
            </Box>

            {children}
            <Footer />
        </Fragment>
    );
};
export default ProductLayout;