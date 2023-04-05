import { Fragment } from "react";
import { Container, Box, Grid } from "@mui/material";

//Components
import Logo from "Components/Header/Logo";
import Search from "Components/Header/Search";
import Icon from "Components/Header/Icon";
import Nav from "Components/Header/Nav";
import BottomNav from "Components/Header/BottomNav";

//Styles
import styles from "Styles/Header/Header.styles";

const Header = () => {
    return (
        <Fragment>
            <Box component="header" sx={styles.StickyHeader}>
                <Container maxWidth="xxxl" disableGutters>
                    <Grid container spacing={{ lg: 3, xxs: 1 }} alignItems="center">
                        <Grid item {...{ lg: 2, xxs: 3 }} sx={{ mt: { lg: 0, xxs: "8px" } }}>
                            <Logo />
                        </Grid>
                        <Grid item {...{ lg: 6, xxs: 9 }}>
                            <Search />
                        </Grid>
                        <Grid item {...{ lg: 4, xxs: 12 }} sx={{ display: { lg: "block", xxs: "none" } }}>
                            <Icon />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Container maxWidth="xxxl" disableGutters sx={styles.NavBar}>
                <Nav />
            </Container>
            <BottomNav />
        </Fragment>
    );
};
export default Header;