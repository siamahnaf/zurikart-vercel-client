import { Box, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

//Styles
import styles from "Styles/Footer/FooterTwo.styles";

//Data
const HelpsData = [
    { name: "Return & Refund Policy", url: "/returnpolicy" },
    { name: "Terms & Condition", url: "/terms" },
    { name: "Privacy Policy", url: "/privacypolicy" }
]

const FooterThree = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                Policy
            </Typography>
            <List dense disablePadding sx={styles.List}>
                {HelpsData &&
                    HelpsData.map((item, i) => (
                        <ListItem dense disableGutters disablePadding key={i}>
                            <Link href={item.url}>
                                <a>{item.name}</a>
                            </Link>
                        </ListItem>
                    ))
                }
            </List>
        </Box>
    );
};
export default FooterThree;