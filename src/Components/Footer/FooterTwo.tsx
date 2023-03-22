import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import styles from "Styles/Footer/FooterTwo.styles";

//Data
const Links = [
    { name: "About us", url: "/about-us" }
]

const FooterTwo = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                About
            </Typography>
            <List dense disablePadding sx={styles.List}>
                {Links &&
                    Links.map((link, i) => (
                        <ListItem dense disableGutters disablePadding key={i}>
                            <Link href={link.url}>
                                <a>{link.name}</a>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default FooterTwo;