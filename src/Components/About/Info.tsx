import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/About/Info.styles";

const Info = () => {
    return (
        <Box sx={styles.Container}>
            <Typography variant="body2" component="p">
                Registered Office: <span>ShikderTower (2nd Floor). B-116/1 Shobanbag,
                    Savar, Dhaka-1340</span>
            </Typography>
            <Typography variant="body2" component="p">
                Corporate Office: <span>ShikderTower (2nd Floor). B-116/1 Shobanbag,
                    Savar, Dhaka-1340</span>
            </Typography>
        </Box>
    );
};
export default Info;