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

const Terms: NextPage = () => {
    return (
        <Layout title="Terms and Condition">
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
                    <h2 style={{ textAlign: "center" }}><b>Terms & Condition</b></h2>
                    <p>1. <b>AGREEMENT TO TERMS</b></p>
                    <p>These Terms of Use constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and nek mart, doing business as __________ (&quot;<strong>__________</strong>&quot;, “<strong>we</strong>”, “<strong>us</strong>”, or “<strong>our</strong>”), concerning your access to and use of the <a href="https://www.nekmart.com">https://www.nekmart.com</a> website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the “Site”). <b>You agree that by accessing the Site, you have read, understood, and agreed to be bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.</b></p>
                    <p>Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. We will alert you about any changes by updating the “Last updated” date of these Terms of Use, and you waive any right to receive specific notice of each such change. Please ensure that you check the applicable Terms every time you use our Site so that you understand which Terms apply. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Terms of Use by your continued use of the Site after the date such revised Terms of Use are posted.</p>
                    <p>2. <b>INTELLECTUAL PROPERTY RIGHTS</b></p>
                    <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws of the United States, international copyright laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
                    <p>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site and to download or print a copy of any portion of the Content to which you have properly gained access solely for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site, the Content and the Marks</p>
                    <p>3. <b>USER REPRESENTATIONS</b></p>
                    <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Use; (4) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Site; (5) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable law or regulation.</p>
                    <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Site (or any portion thereof).</p>
                    <p>4. <b>USER REGISTRATION</b></p>
                    <p>You may be required to register with the Site. You agree to keep your password confidential and will be responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or otherwise objectionable.</p>
                    <p>5. <b>PRODUCTS</b></p>
                    <p>We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on the Site. However, we do not guarantee that the colors, features, specifications, and details of the products will be accurate, complete, reliable, current, or free of other errors, and your electronic display may not accurately reflect the actual colors and details of the products. All products are subject to availability, and we cannot guarantee that items will be in stock. We reserve the right to discontinue any products at any time for any reason. Prices for all products are subject to change.</p>
                    <p>6. <b>PURCHASES AND PAYMENT</b></p>
                    <p>We accept the following forms of payment:</p>
                    <span>- Visa</span> <br />
                    <span>- Mastercard</span><br />
                    <span>- bkash</span><br />
                    <span>- nagad</span><br />
                    <span>- ucash</span><br />
                    <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Site. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in tk.</p>
                    <p>7. <b>RETURN/REFUNDS POLICY</b></p>
                    <p>Please review our Return Policy posted on the Site prior to making any purchases.</p>
                    <p>8. <b>PROHIBITED ACTIVITIES</b></p>
                    <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                    <p>As a user of the Site, you agree not to:</p>
                    <ul>
                        <li>Systematically retrieve data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                        <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                        <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Site and/or the Content contained therein.</li>
                        <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
                    </ul>
                    <p>Use any information obtained from the Site in order to harass, abuse, or harm another person.</p>
                    <p>9. <b>CONTRIBUTION LICENSE</b></p>
                    <p>You and Site agree that we may access, store, process, and use any information and personal data that you provide following the terms of the Privacy Policy and your choices (including settings).</p>
                    <p>By submitting suggestions or other feedback regarding the Site, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
                    <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>
                    <p>10. <b>GUIDELINES FOR REVIEWS</b></p>
                    <p>We may provide you areas on the Site to leave reviews or ratings. When posting a review, you must comply with the following criteria: (1) you should have firsthand experience with the person/entity being reviewed; (2) your reviews should not contain offensive profanity, or abusive, racist, offensive, or hate language; (3) your reviews should not contain discriminatory references based on religion, race, gender, national origin, age, marital status, sexual orientation, or disability; (4) your reviews should not contain references to illegal activity; (5) you should not be affiliated with competitors if posting negative reviews; (6) you should not make any conclusions as to the legality of conduct; (7) you may not post any false or misleading statements; and (8) you may not organize a campaign encouraging others to post reviews, whether positive or negative.</p>
                    <p>We may accept, reject, or remove reviews in our sole discretion. We have absolutely no obligation to screen reviews or to delete reviews, even if anyone considers reviews objectionable or inaccurate. Reviews are not endorsed by us, and do not necessarily represent our opinions or the views of any of our affiliates or partners. We do not assume liability for any review or for any claims, liabilities, or losses resulting from any review. By posting a review, you hereby grant to us a perpetual, non-exclusive, worldwide, royalty-free, fully-paid, assignable, and sublicensable right and license to reproduce, modify, translate, transmit by any means, display, perform, and/or distribute all content relating to review.</p>
                    <p>11. <b>MOBILE APPLICATION LICENSE</b></p>
                    <p><b>Use License</b></p>
                    <p>If you access the Marketplace Offerings via a mobile application, then we grant you a revocable, non-exclusive, non-transferable, limited right to install and use the mobile application on wireless electronic devices owned or controlled by you, and to access and use the mobile application on such devices strictly in accordance with the terms and conditions of this mobile application license contained in these Terms of Use. You shall not: (1) except as permitted by applicable law, decompile, reverse engineer, disassemble, attempt to derive the source code of, or decrypt the application; (2) make any modification, adaptation, improvement, enhancement, translation, or derivative work from the application; (3) violate any applicable laws, rules, or regulations in connection with your access or use of the application; (4) remove, alter, or obscure any proprietary notice (including any notice of copyright or trademark) posted by us or the licensors of the application; (5) use the application for any revenue generating endeavor, commercial enterprise, or other purpose for which it is not designed or intended; (6) make the application available over a network or other environment permitting access or use by multiple devices or users at the same time; (7) use the application for creating a product, service, or software that is, directly or indirectly, competitive with or in any way a substitute for the application; (8) use the application to send automated queries to any website or to send any unsolicited commercial e-mail; or (9) use any proprietary information or any of our interfaces or our other intellectual property in the design, development, manufacture, licensing, or distribution of any applications, accessories, or devices for use with the application.</p>
                    <p><b>Apple and Android Devices</b></p>
                    <p>The following terms apply when you use a mobile application obtained from either the Apple Store or Google Play (each an “App Distributor”) to access the Marketplace Offerings: (1) the license granted to you for our mobile application is limited to a non-transferable license to use the application on a device that utilizes the Apple iOS or Android operating systems, as applicable, and in accordance with the usage rules set forth in the applicable App Distributor’s terms of service; (2) we are responsible for providing any maintenance and support services with respect to the mobile application as specified in the terms and conditions of this mobile application license contained in these Terms of Use or as otherwise required under applicable law, and you acknowledge that each App Distributor has no obligation whatsoever to furnish any maintenance and support services with respect to the mobile application; (3) in the event of any failure of the mobile application to conform to any applicable warranty, you may notify the applicable App Distributor, and the App Distributor, in accordance with its terms and policies, may refund the purchase price,</p>
                    <p>12. <b>CONTACT US</b></p>
                    <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:</p>
                    <p><b>nek mart</b></p>
                    <p>__________</p>
                    <p><b>Bangladesh</b></p>
                    <p><b>Phone: 01683838384</b></p>
                    <p><b>support@nekmart.com</b></p>
                </Box>
            </Container>
        </Layout>
    );
};
export default Terms;

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