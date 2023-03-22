import type { NextPage } from "next";
import { Container, Box, Typography, } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Image
import ErrorImage from "Assets/404.svg";

//Styles
import styles from "Styles/404/Error.styles";

const ErrorPage: NextPage = () => {
    return (
        <Container maxWidth="xxxl" disableGutters sx={{ py: "3em" }}>
            <Box sx={styles.Container}>
                <Image src={ErrorImage} alt="404" width={300} height={300} />
                <Typography variant="h4" component="h4" sx={styles.Title}>
                    Page Not Found!
                </Typography>
                <Typography variant="body1" component="p" sx={styles.Description}>
                    The page you are looking for has not been found on our server.
                </Typography>
                <Box sx={styles.Button}>
                    <Link href="/">
                        <a>Go to Home Page</a>
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};
export default ErrorPage;