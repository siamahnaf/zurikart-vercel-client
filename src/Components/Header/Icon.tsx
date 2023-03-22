import { Box, List, ListItem, Badge } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";

//Styles
import styles from "Styles/Header/Icon.styles";


const Icons = () => {
    return (
        <Box>
            <List dense disablePadding sx={styles.List}>
                <ListItem dense disableGutters disablePadding>
                    <Link href="https://zuricart.co.ke/">
                        <a aria-label="flash_deal">
                            <Icon icon="fa:user-o" />
                            <span>Account</span>
                        </a>
                    </Link>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <Link href="https://zuricart.co.ke/">
                        <a aria-label="flash_deal">
                            <Icon icon="ic:outline-help-outline" />
                            <span>Help</span>
                        </a>
                    </Link>
                </ListItem>
                <ListItem dense disableGutters disablePadding>
                    <Link href="https://zuricart.co.ke/">
                        <a aria-label="flash_deal">
                            <Badge badgeContent="0" color="secondary" sx={{ svg: { fontSize: "26px !important" } }}>
                                <Icon icon="ic:outline-shopping-cart" />
                            </Badge>
                            <span>Cart</span>
                        </a>
                    </Link>
                </ListItem>
            </List>
        </Box>
    );
};
export default Icons;