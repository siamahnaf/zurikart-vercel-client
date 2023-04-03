import { useState, KeyboardEvent, MouseEvent, useMemo } from "react";
import { Box, List, ListItem, Typography, Stack, ButtonBase } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";
import dynamic from "next/dynamic";

//Styles
import styles from "Styles/Header/BottomNav.styles";

//Components
const Drawers = dynamic(() => import("./Categories"));

const BottomNav = () => {
    //State
    const [open, setOpen] = useState<boolean>(false);
    //Handler
    const toggleDrawer = (prop: boolean) =>
        (event: KeyboardEvent | MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setOpen(prop);
        };
    return (
        <Box sx={styles.Container}>
            <List component={Stack} direction="row" sx={styles.List} dense disablePadding>
                <ListItem dense disableGutters disablePadding>
                    <Link href="/">
                        <a>
                            <Icon icon="vaadin:home-o" />
                            <Typography variant="body1" component="p">
                                Home
                            </Typography>
                        </a>
                    </Link>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <a onClick={toggleDrawer(true)}>
                        <Icon icon="simple-line-icons:docs" />
                        <Typography variant="body1" component="p">
                            Category
                        </Typography>
                    </a>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <Link href={"https://zuricart.co.ke/"}>
                        <a>
                            <Box className="iconBox">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 75 75">
                                    <g><path style={{ opacity: 0.908 }} fill="#534014" d="M 26.5,-0.5 C 29.1667,-0.5 31.8333,-0.5 34.5,-0.5C 36.0322,1.78132 37.3656,1.78132 38.5,-0.5C 41.1667,-0.5 43.8333,-0.5 46.5,-0.5C 50.2407,2.55598 51.4073,6.55598 50,11.5C 41.7767,27.0872 33.1101,27.4206 24,12.5C 21.5673,7.49789 22.4006,3.16456 26.5,-0.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#f07384" d="M 28.5,2.5 C 31.5415,2.55129 34.2082,3.55129 36.5,5.5C 38.2077,5.29717 39.541,4.46384 40.5,3C 47.8794,3.57557 49.3794,7.07557 45,13.5C 37.7591,22.7506 31.7591,21.7506 27,10.5C 26.1093,7.5024 26.6093,4.83574 28.5,2.5 Z" /></g>
                                    <g><path style={{ opacity: 0.878 }} fill="#766121" d="M 35.5,25.5 C 35.4431,26.609 35.1098,27.609 34.5,28.5C 25.4355,27.8636 16.7688,28.5302 8.5,30.5C 6.33663,33.4932 4.66997,36.8266 3.5,40.5C 3.95689,41.2975 4.62356,41.6309 5.5,41.5C 6.5,41.5 7.5,41.5 8.5,41.5C 8.73731,42.791 8.40397,43.791 7.5,44.5C 4.83333,44.5 2.16667,44.5 -0.5,44.5C -0.5,42.8333 -0.5,41.1667 -0.5,39.5C 1.66114,35.014 3.99447,30.514 6.5,26C 16.1609,25.5002 25.8276,25.3335 35.5,25.5 Z" /></g>
                                    <g><path style={{ opacity: 0.972 }} fill="#564312" d="M 35.5,25.5 C 46.1719,25.3335 56.8385,25.5002 67.5,26C 69.5619,30.7205 71.8952,35.2205 74.5,39.5C 74.5,41.1667 74.5,42.8333 74.5,44.5C 71.8333,44.5 69.1667,44.5 66.5,44.5C 66.8074,54.5824 66.4741,64.5824 65.5,74.5C 46.1667,74.5 26.8333,74.5 7.5,74.5C 7.5,64.5 7.5,54.5 7.5,44.5C 8.40397,43.791 8.73731,42.791 8.5,41.5C 15.175,41.6663 21.8417,41.4996 28.5,41C 30.858,37.4522 32.5247,33.6189 33.5,29.5C 34.1667,29.5 34.5,29.1667 34.5,28.5C 35.1098,27.609 35.4431,26.609 35.5,25.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#d2a31e" d="M 34.5,28.5 C 34.5,29.1667 34.1667,29.5 33.5,29.5C 25.5,29.5 17.5,29.5 9.5,29.5C 9.73731,30.791 9.40397,31.791 8.5,32.5C 8.5,31.8333 8.5,31.1667 8.5,30.5C 16.7688,28.5302 25.4355,27.8636 34.5,28.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#f7ba02" d="M 33.5,29.5 C 32.5247,33.6189 30.858,37.4522 28.5,41C 21.8417,41.4996 15.175,41.6663 8.5,41.5C 7.5,41.5 6.5,41.5 5.5,41.5C 5.64687,38.2084 6.64687,35.2084 8.5,32.5C 9.40397,31.791 9.73731,30.791 9.5,29.5C 17.5,29.5 25.5,29.5 33.5,29.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#f6e4ab" d="M 45.5,28.5 C 46.6172,32.7338 48.2839,36.7338 50.5,40.5C 48.5,40.5 46.5,40.5 44.5,40.5C 43.1217,36.7405 41.455,33.0738 39.5,29.5C 41.396,28.5344 43.396,28.2011 45.5,28.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#f8bb03" d="M 45.5,28.5 C 52.1998,28.17 58.8665,28.5033 65.5,29.5C 67.3999,32.6293 68.7333,35.9627 69.5,39.5C 63.3554,40.4902 57.0221,40.8235 50.5,40.5C 48.2839,36.7338 46.6172,32.7338 45.5,28.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#ecd48e" d="M 8.5,30.5 C 8.5,31.1667 8.5,31.8333 8.5,32.5C 6.64687,35.2084 5.64687,38.2084 5.5,41.5C 4.62356,41.6309 3.95689,41.2975 3.5,40.5C 4.66997,36.8266 6.33663,33.4932 8.5,30.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#f1e0aa" d="M 35.5,42.5 C 34.1667,42.5 32.8333,42.5 31.5,42.5C 32.9269,39.9764 34.0936,37.3098 35,34.5C 35.4974,37.146 35.6641,39.8127 35.5,42.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#a5801f" d="M 69.5,39.5 C 70.0431,39.56 70.3764,39.8933 70.5,40.5C 61.6755,41.8214 53.0088,41.8214 44.5,40.5C 46.5,40.5 48.5,40.5 50.5,40.5C 57.0221,40.8235 63.3554,40.4902 69.5,39.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#ffecaf" d="M 17.5,44.5 C 17.5,53.5 17.5,62.5 17.5,71.5C 15.5,71.5 13.5,71.5 11.5,71.5C 11.5,62.5 11.5,53.5 11.5,44.5C 13.5,44.5 15.5,44.5 17.5,44.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#fecb00" d="M 31.5,42.5 C 32.8333,42.5 34.1667,42.5 35.5,42.5C 35.5,52.1667 35.5,61.8333 35.5,71.5C 29.5,71.5 23.5,71.5 17.5,71.5C 17.5,62.5 17.5,53.5 17.5,44.5C 21.8461,44.6657 26.1794,44.499 30.5,44C 31.056,43.6174 31.3893,43.1174 31.5,42.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#fecd05" d="M 62.5,62.5 C 54.5994,63.0674 46.5994,63.0674 38.5,62.5C 38.3336,53.4938 38.5002,44.4938 39,35.5C 39.8917,38.2837 41.0584,40.9504 42.5,43.5C 49.1335,44.4967 55.8002,44.83 62.5,44.5C 62.5,50.5 62.5,56.5 62.5,62.5 Z" /></g>
                                    <g><path style={{ opacity: 1 }} fill="#ffc400" d="M 38.5,62.5 C 46.5994,63.0674 54.5994,63.0674 62.5,62.5C 62.5,65.5 62.5,68.5 62.5,71.5C 54.5,71.5 46.5,71.5 38.5,71.5C 38.5,68.5 38.5,65.5 38.5,62.5 Z" /></g>
                                </svg>

                            </Box>
                            <Typography variant="body1" component="p">
                                Clearance
                            </Typography>
                        </a>
                    </Link>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <Link href={"https://zuricart.co.ke/"}>
                        <a>
                            <Icon icon="ic:outline-shopping-cart" />
                            <Typography variant="body1" component="p">
                                Cart
                            </Typography>
                        </a>
                    </Link>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <Link href={"https://zuricart.co.ke/"}>
                        <a>
                            <Icon icon="fa:user-o" />
                            <Typography variant="body1" component="p">
                                Account
                            </Typography>
                        </a>
                    </Link>
                </ListItem>
            </List>
            <Drawers
                open={open}
                handleClose={toggleDrawer}
            />
        </Box>
    );
};
export default BottomNav;