import type { NextPage, GetServerSideProps } from "next";
import { Container, Grid } from "@mui/material";

//Layout
import Layout from "Layout";

//Components
import Categories from "Components/Category/Category";
import Brand from "Components/Category/Brand";
import Price from "Components/Category/Price";
import Description from "Components/Category/Description";
import PageInfo from "Components/Category/PageInfo";
import Products from "Components/Category/Products";

//Redux
import { wrapper } from "Redux/Store";
import { getCategory, getSitesSettings } from "Redux/Action/Common/common.action";
import { getProducts } from "Redux/Action/Product/product.action";
import { getBrands } from "Redux/Action/Home/home.action";

const Category: NextPage = () => {
    return (
        <Layout title="Category">
            <Container maxWidth="xxxl" disableGutters sx={{ mt: "2em", mb: "5em" }}>
                <Grid container spacing={3}>
                    <Grid item {...{ xxxl: 2, lgs: 2.5, lg: 3 }} sx={{ display: { lg: "block", xxs: "none" } }}>
                        <Categories />
                        <Brand />
                        <Price />

                    </Grid>
                    <Grid item {...{ xxxl: 10, lgs: 9.5, lg: 9, xxs: 12 }}>
                        <PageInfo />
                        <Products />
                    </Grid>
                </Grid>
                <Description />
            </Container>
        </Layout>
    );
};
export default Category;

//Server side data fetching
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (context) => {
            await store.dispatch(getCategory());
            await store.dispatch(getBrands());
            await store.dispatch(getSitesSettings());
            await store.dispatch(getProducts(context.query));
            return { props: {} };
        }
)