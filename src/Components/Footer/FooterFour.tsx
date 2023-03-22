import { useState } from "react";
import { Box, Stack, List, ListItem, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

//Images
import App from "Assets/app.png";
import Google from "Assets/google.png";

//Styles
import styles from "Styles/Footer/FooterFour.styles";

//Types import
import { SitesSettings } from "Types/Common/Sites.types";

//Redux
import { useAppSelector } from "Redux/Hook";

const FooterFour = () => {
    //Selector
    const { sitesData } = useAppSelector(state => state.siteSettings);
    //State
    const [sites, setSites] = useState<SitesSettings>(sitesData);
    return (
        <Box>
            {sites?.social &&
                <Typography variant="h5" component="h5" sx={styles.Title}>
                    Join us
                </Typography>
            }
            <List dense disablePadding sx={styles.Social}>
                {sites?.social?.facebook &&
                    <ListItem dense disableGutters disablePadding>
                        <Link href={sites?.social?.facebook} >
                            <a target="_blank" aria-label="facebook">
                                <Icon icon="fa-brands:facebook-f" />
                            </a>
                        </Link>
                    </ListItem>
                }
                {sites?.social?.instagram &&
                    <ListItem dense disableGutters disablePadding>
                        <Link href={sites?.social?.instagram} >
                            <a target="_blank" aria-label="instagram">
                                <Icon icon="akar-icons:instagram-fill" />
                            </a>
                        </Link>
                    </ListItem>
                }
                {sites?.social?.youtube &&
                    <ListItem dense disableGutters disablePadding>
                        <Link href={sites?.social?.youtube} >
                            <a target="_blank" aria-label="youtube">
                                <Icon icon="fa:youtube" />
                            </a>
                        </Link>
                    </ListItem>
                }
                {sites?.social?.twitter &&
                    <ListItem dense disableGutters disablePadding>
                        <Link href={sites?.social?.twitter} >
                            <a target="_blank" aria-label="twitter">
                                <Icon icon="bi:twitter" />
                            </a>
                        </Link>
                    </ListItem>
                }
                {sites?.social?.linkedIn &&
                    <ListItem dense disableGutters disablePadding>
                        <Link href={sites?.social?.linkedIn} >
                            <a target="_blank" aria-label="linkedin">
                                <Icon icon="cib:linkedin-in" />
                            </a>
                        </Link>
                    </ListItem>
                }
            </List>
        </Box>
    );
};
export default FooterFour;