import { Fragment, useRef, useState, useEffect } from "react";
import { Container, Box, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Search from "Components/Header/Search";
import Icon from "Components/Header/Icon";
import Nav from "Components/Header/Nav";

//Styles
import styles from "Styles/Header/Header.styles";

const Header = () => {
    return (
        <Fragment>
            <Box component="header" sx={styles.StickyHeader}>
                <Container maxWidth="xxxl" disableGutters>
                    <Grid container spacing={3} alignItems="center">
                        <Grid item {...{ lg: 2, md: 3, smd: 3.2, msm: 4, sm: 5, xs: 6, xxs: 7 }}>
                            <Logo />
                        </Grid>
                        <Grid item {...{ lg: 6, md: 6, smd: 5.8, }} sx={{ display: { smd: "block", xxs: "none" } }}>
                            <Search />
                        </Grid>
                        <Grid item {...{ lg: 4, md: 3, smd: 3, msm: 8, sm: 7, xs: 6, xxs: 5 }}>
                            <Icon />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth="xxxl" disableGutters sx={styles.NavBar}>
                <Nav />
            </Container>
        </Fragment>
    );
};
export default Header;