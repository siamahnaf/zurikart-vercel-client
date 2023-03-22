import { Fragment, FC, ReactNode } from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

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
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};
export default ProductLayout;