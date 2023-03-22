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
    slider: string;
}

const Advertise = () => {
    //Selector
    const { slidersData } = useAppSelector(state => state.getSliders);
    //State
    const [sliders, setSliders] = useState<SlidersData[]>(slidersData);
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
                                            <Box className="ratioImage">
                                                <Image
                                                    src={process.env.NEXT_PUBLIC_IMAGE_PATH + carousel.slider}
                                                    alt={carousel.name}
                                                    layout={'fill'}
                                                />
                                            </Box>
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