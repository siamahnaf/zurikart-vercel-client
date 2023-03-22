import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/About/Single.styles";

const Agro = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                About Nek Agro Ltd.
            </Typography>
            <Typography variant="body2" component="p" sx={styles.Description}>
                We had started our business in the year of 2022 under the name of NEK AGRO. After one years of successful business in Poultry Industry.
            </Typography>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                Our Mission
            </Typography>
            <Typography variant="body2" component="p" sx={styles.Description}>
                Our mission is to serve the Nation by distributing Innovative products based on modern technology & research.
            </Typography>
        </Box>
    );
};
export default Agro;