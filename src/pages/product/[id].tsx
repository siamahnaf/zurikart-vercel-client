import type { NextPage, GetServerSideProps } from "next";
import { Container, Grid, Typography, Stack, Box } from "@mui/material";

//Layout
import ProductLayout from "Layout/ProductLayout";

//Components
import TopInfo from "Components/Product/TopInfo";
import ProductImage from "Components/Product/ProductImage";
import ProductContent from "Components/Product/ProductContent";
import ProductInfo from "Components/Product/ProductInfo";
import Selling from "Components/Product/Selling";
import Video from "Components/Product/Video";
import ProductSide from "Components/Product/ProductSide";
import Latest from "Components/Product/Latest";

//Redux
import { wrapper } from "Redux/Store";
import { useAppSelector } from "Redux/Hook";
import { getCategory, getSitesSettings } from "Redux/Action/Common/common.action";
import { getSingleProduct, getSellingProduct } from "Redux/Action/Product/product.action";
import { getProducts } from "Redux/Action/Product/product.action";

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
                        <Stack direction="row" sx={{ flexWrap: "wrap" }}>
                            <Box sx={{ flexBasis: "80%" }}>
                                <Grid container spacing={{ xxxl: 5, xxl: 4, xl: 3, smd: 2, xxs: 4 }}>
                                    <Grid item {...{ md: 6, xxs: 12 }} sx={{ position: { md: "sticky", xxs: "unset" }, height: "max-content", top: "70px" }}><ProductImage /></Grid>
                                    <Grid item {...{ md: 6, xxs: 12 }}><ProductContent /></Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ flexBasis: "20%" }}>
                                <ProductSide />
                            </Box>
                        </Stack>
                        <ProductInfo />
                        <Video />
                        <Selling />
                        <Latest />
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
            await store.dispatch(getProducts({ sortBy: "_id", order: "desc" }));
            return { props: {} };
        }
)