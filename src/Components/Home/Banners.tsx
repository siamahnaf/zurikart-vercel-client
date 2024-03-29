import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import "react-aspect-ratio/aspect-ratio.css";

//Interface
import { DynamicBanners } from "Types/Home/Section.types";
interface Props {
    dynamicBanner: DynamicBanners[];
}

const Banners = ({ dynamicBanner }: Props) => {
    return (
        <Box>
            {dynamicBanner.map((dynamics, i) => (
                <Box sx={{ mb: "25px" }} key={i}>
                    <Typography sx={{ fontWeight: 600, fontSize: "17px", my: "10px" }}>
                        {dynamics.title}
                    </Typography>
                    <Grid container spacing={3}>
                        {dynamics?.banners?.length > 0 &&
                            dynamics?.banners?.map((item, i) => (
                                <Grid item {...{ md: Number(dynamics.bannerType) || 3, xxs: 12 }} key={i}>
                                    <Box>
                                        <Link href={item.link}>
                                            <a>
                                                <img src={process.env.NEXT_PUBLIC_IMAGE_PATH + item.url} alt="banner" placeholder="blur" width="100%" height="100%" />
                                            </a>
                                        </Link>
                                    </Box>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Box>
            ))}
        </Box>
    );
};

export default Banners;