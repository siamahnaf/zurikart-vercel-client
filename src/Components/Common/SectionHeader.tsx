import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/Common/SectionHeader.styles";

//Types
interface Props {
    title: string;
    description: string;
}

const SectionHeader = ({ title, description }: Props) => {
    return (
        <Box sx={styles.Content}>
            <Typography variant="h5" component="h5">
                {title}
            </Typography>
            <Typography variant="body1" component="p">
                {description}
            </Typography>
        </Box>
    );
};
export default SectionHeader;