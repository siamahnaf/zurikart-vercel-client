import { Box, Typography } from "@mui/material";

//Styles
import styles from "Styles/About/Single.styles";

const Nekfood = () => {
    return (
        <Box>
            <Typography variant="h5" component="h5" sx={styles.Title}>
                About Nekfood
            </Typography>
            <Typography variant="body2" component="p" sx={styles.Description}>
                Nek Food Ltd. provides the link between the customers and the farmers so that, customers can get safe organic food and products directly from the growers or the producers. <strong>Nekfood is an brand under Nek Agro Ltd</strong>. Our main focus is to inspire farmers to deliver safe food and products that are free from insecticides, chemical fertilizers, harmful chemicals, and preservatives. These, in turn, may enable consumers to have natural, safe and nutritious food, and products for healthy living. <br /> <br />
                Safe food is our basic human right. Safe foods are becoming scarce and inaccessible commodities in Bangladesh as the dependencies towards unhealthy ways of cultivation and preservation are on the rise. One of the main reasons Bangladeshi farmers are reluctant to grow healthy food is, they are unable to access the organic products market directly to sell those produced. But when they do, it is through the middleman who keeps a fair share of their profit. Finally, when the products reach the consumer’s hand they end up paying a higher amount for organic products that are not in the fresh state or have a lower nutritional value.<br /> <br />
                Our mission is to empower Bangladeshi organic farmers to grow safe, healthy, and nutritious food. We provide the support Bangladeshi farmers needed to get a better life by helping them grow and sell safe foods and products directly to the consumers.  “organic & fresh ”, is our slogan.<br /> <br />
                Right now we are providing our services in the Dhaka division. Our vision is to expand our services to all eight divisions of Bangladesh by 2025. We maintain strict regulations to ensure our farmers are complying with the organic safe foods and products code of conduct. So that consumers can have truly organic foods and products with the highest standard possible.
            </Typography>
        </Box>
    );
};
export default Nekfood;