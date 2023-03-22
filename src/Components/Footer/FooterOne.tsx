import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { Icon } from "@iconify/react";

//Styles
import styles from "Styles/Footer/FooterOne.styles";

//Types import
import { SitesSettings } from "Types/Common/Sites.types";

//Redux
import { useAppSelector } from "Redux/Hook";


const FooterOne = () => {
    //Selector
    const { sitesData } = useAppSelector(state => state.siteSettings);
    //State
    const [sites, setSites] = useState<SitesSettings>(sitesData);
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                Contact
            </Typography>
            <Typography variant="body1" component="p" sx={styles.Text}>
                Corporate Office: {sites?.additionInfo?.corporateOffice}
                <br />
                Office: {sites?.additionInfo?.headOffice}
            </Typography>
            <Box sx={styles.IconBox}>
                <Typography variant="body1" component="p">
                    <Icon icon="fa:paper-plane" /> {sites?.additionInfo?.email}
                </Typography>
                <Typography variant="body1" component="p">
                    <Icon icon="bi:telephone-fill" /> {sites?.additionInfo?.phone}
                </Typography>
            </Box>
        </Box >
    );
};
export default FooterOne;