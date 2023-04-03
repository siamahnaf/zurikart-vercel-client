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
                    <Grid container spacing={3} alignItems="center">
                        <Grid item {...{ lg: 2, xxs: 12 }}>
                            <Logo />
                        </Grid>
                        <Grid item {...{ lg: 6, xxs: 12 }}>
                            <Search />
                        </Grid>
                        <Grid item {...{ lg: 4, xxs: 12 }}>
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