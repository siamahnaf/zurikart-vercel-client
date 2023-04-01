import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { AspectRatio } from "react-aspect-ratio";
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
                                <Grid item {...{ md: Number(dynamics.bannerType) || 3 }} key={i}>
                                    <Box>
                                        <Link href={item.link}>
                                            <a>
                                                <AspectRatio ratio="4/3" style={{ width: "100%" }} >
                                                    <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + item.url} alt="banner" key={i} layout={'fill'} style={{ borderRadius: "0 35px 0 35px" }} />
                                                </AspectRatio>
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