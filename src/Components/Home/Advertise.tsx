import { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Styles
import styles from "Styles/Home/Advertise.styles";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface SlidersData {
    name: string;
    url: string;
    banner: string;
}

const Advertise = () => {
    //Selector
    const { bannersData } = useAppSelector(state => state.getBanners);
    //State
    const [sliders, setSliders] = useState<SlidersData[]>(bannersData);
    return (
        <Box sx={{ position: "relative", mt: "1.5em" }}>
            <Box className="embla" sx={styles.Embla}>
                <Box className="embla__viewport">
                    <Box className="embla__container" sx={styles.EmblaContainer}>
                        {sliders &&
                            sliders.map((carousel, i) => (
                                <Box className="embla__slide" key={i} sx={styles.EmblaSlide}>
                                    <Link href={carousel.url}>
                                        <a rel="preload">
                                            <img src={process.env.NEXT_PUBLIC_IMAGE_PATH + carousel.banner}
                                                alt={carousel.name} />
                                            {/* <Box className="ratioImage">
                                                <Image
                                                    src={process.env.NEXT_PUBLIC_IMAGE_PATH + carousel.banner}
                                                    alt={carousel.name}
                                                    layout={'fill'}
                                                    placeholder="blur"
                                                    blurDataURL={process.env.NEXT_PUBLIC_IMAGE_PATH + carousel.banner}
                                                />
                                            </Box> */}
                                        </a>
                                    </Link>
                                </Box>
                            ))
                        }
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};
export default Advertise;