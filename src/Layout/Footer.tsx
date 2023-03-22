import { Container, Grid, Divider } from "@mui/material";

//Components
import FooterOne from "Components/Footer/FooterOne";
import FooterTwo from "Components/Footer/FooterTwo";
import FooterThree from "Components/Footer/FooterThree";
import FooterFour from "Components/Footer/FooterFour";

//Styles
import styles from "Styles/Footer/Footer.styles";

const Footer = () => {
    return (
        <Container maxWidth="xxxl" disableGutters sx={styles.Container}>
            <Grid container spacing={5}>
                <Grid item {...{ md: 3, smd: 5.5, msm: 7, sm: 8, xxs: 12 }}><FooterOne /></Grid>
                <Grid item {...{ md: 2, smd: 3.25, msm: 5, sm: 4, xxs: 6 }}><FooterTwo /></Grid>
                <Grid item {...{ md: 2.5, smd: 3.25, msm: 5, sm: 12, xxs: 6 }}><FooterThree /></Grid>
                <Grid item {...{ md: 4.5, smd: 12, msm: 7, sm: 12, xxs: 12 }}><FooterFour /></Grid>
            </Grid>
        </Container >
    );
};

export default Footer;