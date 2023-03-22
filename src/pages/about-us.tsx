import type { NextPage, GetServerSideProps } from "next";
import { Container, Typography, Box } from "@mui/material";
import Link from "next/link";

//Layout
import Layout from "Layout";

//Components
import Nekfood from "Components/About/Nekfood";
import Agro from "Components/About/Agro";
import Info from "Components/About/Info";

//Styles
import styles from "Styles/About/AboutUs.styles";

//Redux
import { wrapper } from "Redux/Store";
import { getCategory, getSitesSettings } from "Redux/Action/Common/common.action";

const Aboutus: NextPage = () => {
    return (
        <Layout title="About us">
            <Container maxWidth="xxxl" disableGutters>
                <Typography variant="h6" component="h6" sx={styles.Title}>
                    About Us
                </Typography>
                <Box sx={{ px: "20px" }}>
                    <Typography variant="h5" component="h5" sx={{ color: "primary.main", fontWeight: 500, mb: "6px" }}>
                        About Nekmart
                    </Typography>
                    <Typography variant="body2" component="p" sx={{ fontSize: "14px", mb: "2.5em", a: { textDecoration: "none", color: "primary.main" } }}>
                        Welcome to <Link href="https://nekmart.com"><a>Nekmart.com</a></Link>, We are an online commercial transaction platform. We started with one goal in mind to make lives easier with a vision to introduce to shopping without any barrier all over the world. We are determined to empower people to solve and simplify their daily needs. <br /><br />
                        Nekmart is an e-commerce brand under Nek Agro Ltd. In this Digital era of Bangladesh where e-commerce business is booming, here we are offering varieties of product and service to meet the market demand. After digitalization of Bangladesh there are many foreign brands came here and tried to fulfill the market supply and demand. But here being as a local company, Nekmart is proud to fulfill the local market demand and represent Bangladesh Globally.<br /><br />
                        Actually, Nekmart.com is the new generation e-commerce site decorated with customized facility and services to ensure all the human needs. We are burnished with finest technology and best plan to serve every member.. We are committed to reach faster than your expectations to make you smile with satisfaction. We have introduced some finest technology to make your desire easier and search tools that suits your expectations. For your every demand, we are designed with everything. For the first time in Bangladesh, We are connected, passionate and capable to deliver the value you are seeking.
                    </Typography>
                    <Nekfood />
                    <Agro />
                    <Info />
                </Box>
            </Container>
        </Layout>
    );
};
export default Aboutus;

//Server side data fetching
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (context) => {
            await store.dispatch(getCategory());
            await store.dispatch(getSitesSettings());
            return { props: {} };
        }
)