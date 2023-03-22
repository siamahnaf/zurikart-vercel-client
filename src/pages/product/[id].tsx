import type { NextPage, GetServerSideProps } from "next";
import { Container, Grid, Typography } from "@mui/material";

//Layout
import ProductLayout from "Layout/ProductLayout";

//Components
import TopInfo from "Components/Product/TopInfo";
import ProductImage from "Components/Product/ProductImage";
import ProductContent from "Components/Product/ProductContent";
import ProductInfo from "Components/Product/ProductInfo";
import Selling from "Components/Product/Selling";
import Video from "Components/Product/Video";

//Redux
import { wrapper } from "Redux/Store";
import { useAppSelector } from "Redux/Hook";
import { getCategory, getSitesSettings } from "Redux/Action/Common/common.action";
import { getSingleProduct, getSellingProduct } from "Redux/Action/Product/product.action";

const Product: NextPage = () => {
    //Selector
    const { message } = useAppSelector(state => state.getSingleProduct);
    return (
        <ProductLayout>
            <Container maxWidth="xxxl" disableGutters sx={{ my: "30px" }}>
                {message ? (
                    <Typography variant="body1" component="p" sx={{ textAlign: "center", fontWeight: 600, color: "primary.main" }}>
                        {message}
                    </Typography>
                ) : (
                    <>
                        <TopInfo />
                        <Grid container spacing={{ xxxl: 5, xxl: 4, xl: 3, smd: 2, xxs: 4 }}>
                            <Grid item {...{ md: 6, xxs: 12 }} sx={{ position: { md: "sticky", xxs: "unset" }, height: "max-content", top: "70px" }}><ProductImage /></Grid>
                            <Grid item {...{ md: 6, xxs: 12 }}><ProductContent /></Grid>
                        </Grid>
                        <ProductInfo />
                        <Video />
                        <Selling />
                    </>
                )}
            </Container>
        </ProductLayout>
    );
};
export default Product;

//Server side data fetching
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (context) => {
            await store.dispatch(getCategory());
            await store.dispatch(getSitesSettings());
            await store.dispatch(getSingleProduct(context.query.id as string));
            await store.dispatch(getSellingProduct(context.query.id as string));
            return { props: {} };
        }
)