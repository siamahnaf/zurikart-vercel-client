import { useState, useMemo } from "react";
import { Box, Breadcrumbs, Stack, Typography, List, ListItem, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";
import { EmailShareButton, TwitterShareButton, FacebookShareButton, LinkedinShareButton, WhatsappShareButton } from "react-share";

//Styles
import styles from "Styles/Product/TopInfo.styles";

//Types import
import { SingleProduct } from "Types/Product/Product.types";

//Redux
import { useAppSelector } from "Redux/Hook";

const TopInfo = () => {
    //Selector
    const { products } = useAppSelector(state => state.getSingleProduct);
    //State
    const [product, setProduct] = useState<SingleProduct>(products);
    //Handler
    const router = useRouter();
    //Effect
    useMemo(() => {
        if (products) {
            setProduct(products)
        }
    }, [products])
    return (
        <Box>
            <Stack direction="row" alignItems="center" flexWrap="wrap">
                <Box sx={{ flex: { lsm: 1, xxs: "100%" } }}>
                    <Breadcrumbs
                        separator={<Icons sx={styles.Separator} icon="fa:angle-right" />}
                        sx={styles.Breadcrumb}
                    >
                        <Link href={`/category/${product?.category?.slug}`}>
                            <a>{product?.category?.name}</a>
                        </Link>
                        <Typography variant="body1" component="p">
                            {product?.name}
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box sx={{ flex: { lsm: "unset", xxs: "100%" }, mt: { lsm: "0", xxs: "20px" } }}>
                    <List dense disablePadding component={Stack} direction="row" alignItems="center" justifyContent={{ lsm: "right", xxs: "left" }} sx={styles.List}>
                        <ListItem dense disableGutters disablePadding>
                            <Typography variant="body2" component="p">
                                Share:
                            </Typography>
                        </ListItem>
                        <ListItem dense disableGutters disablePadding>
                            <EmailShareButton url={"https://nekmart.com/" + router.asPath} >
                                <Icons icon="carbon:email" />
                            </EmailShareButton>
                        </ListItem>
                        <ListItem dense disableGutters disablePadding>
                            <TwitterShareButton url={"https://nekmart.com/" + router.asPath} >
                                <Icons icon="ant-design:twitter-outlined" />
                            </TwitterShareButton>
                        </ListItem>
                        <ListItem dense disableGutters disablePadding>
                            <FacebookShareButton url={"https://nekmart.com/" + router.asPath} >
                                <Icons icon="dashicons:facebook-alt" />
                            </FacebookShareButton>
                        </ListItem>
                        <ListItem dense disableGutters disablePadding>
                            <LinkedinShareButton url={"https://nekmart.com/" + router.asPath} >
                                <Icons icon="akar-icons:linkedin-fill" />
                            </LinkedinShareButton>
                        </ListItem>
                        <ListItem dense disableGutters disablePadding>
                            <WhatsappShareButton url={"https://nekmart.com/" + router.asPath} >
                                <Icons icon="bxl:whatsapp" />
                            </WhatsappShareButton>
                        </ListItem>
                    </List>
                </Box>
            </Stack>
            <Divider sx={styles.Divider} />
        </Box >
    );
};
export default TopInfo;

//Custom styles
const Icons = styled(Icon)``;
