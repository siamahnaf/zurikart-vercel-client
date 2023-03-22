import type { NextPage, GetServerSideProps } from "next";
import { Container, Box } from "@mui/material";

//Layout 
import Layout from "Layout";

//Redux
import { wrapper } from "Redux/Store";
import { getCategory, getFlashSale, getSitesSettings } from "Redux/Action/Common/common.action";
import { getCart } from "Redux/Action/Cart/cart.action";
import { getWishlist } from "Redux/Action/Wishlist/wishlist.action";
import { getProfile } from "Redux/Action/Profile/profile.action";

const ReturnPolicy: NextPage = () => {
    return (
        <Layout title="Returns Policy">
            <Container maxWidth="xxxl" disableGutters>
                <Box sx={{
                    fontSize: "15px", h2: { fontSize: "17px" }, h1: {
                        fontSize: "20px", mt: {
                            xxxl: "2em",
                            xxl: "1.8em",
                            xl: "1.5em",
                            lg: "1.3em",
                            md: "1.2em",
                            smd: "1.1em",
                            xxs: "1em"
                        }
                    }
                }}>
                    <h1>Cancellation & Returns</h1>

                    <h4>Returns & Replacement Policy:</h4>
                    <p>All products listed under a particular category may not have the same return/replacement period.</p>
                    <p>Promotion may or may not follow this policy.</p>
                    <p>Replacement Period after Delivery is applicable if product received is Defective or damaged or not as described.</p>
                    <p>If you have received a damaged or defective product or if it is not as described, you can raise a replacement request on the Website/App or making direct call to our customer care within the applicable Return Policy period. manufacturing defeats then you can replace within 72 hours from the date of product received.</p>
                    <p>যদি আপনি একটি ক্ষতিগ্রস্ত বা ত্রুটিপূর্ণ পণ্য পেয়ে থাকেন বা যদি এটি বর্ণিত না হয়, তাহলে আপনি প্রযোজ্য রিটার্ন পলিসি সময়কালের মধ্যে ওয়েবসাইট/অ্যাপে প্রতিস্থাপনের অনুরোধ করতে পারেন বা সরাসরি আমাদের কাস্টমার কেয়ারে কল করতে পারেন</p>
                </Box>
            </Container>
        </Layout>
    );
};
export default ReturnPolicy;

//Server side data fetching
export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    (store) =>
        async (context) => {
            await store.dispatch(getCategory());
            await store.dispatch(getFlashSale());
            await store.dispatch(getSitesSettings());
            if (context.req.cookies['secretId']) {
                await store.dispatch(getCart(context.req.cookies['secretId'] as string));
                await store.dispatch(getWishlist(context.req.cookies['secretId'] as string));
                await store.dispatch(getProfile(context.req.cookies['secretId'] as string));
            }
            return { props: {} };
        }
)