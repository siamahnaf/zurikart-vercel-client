import { useState, useEffect, useCallback, useRef } from "react";
import { Box, ButtonBase } from "@mui/material";
import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

//Styles
import styles from "Styles/Home/Carousel.styles";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface BannersData {
    name: string;
    url: string;
    banner: string;
}

const Carousel = () => {
    //Selector
    const { bannersData } = useAppSelector(state => state.getBanners);
    //State
    const [banners, setBanners] = useState<BannersData[]>(bannersData);
    //Handler
    const autoplay = useRef(
        Autoplay(
            { delay: 5000, stopOnInteraction: false }
        ) as AutoplayType
    );
    const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false }, [autoplay.current]) as UseEmblaCarouselType;
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const scrollTo = useCallback((index: number) => embla && embla.scrollTo(index), [
        embla
    ]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setSelectedIndex(embla.selectedScrollSnap());
    }, [embla, setSelectedIndex]);
    //Effect
    useEffect(() => {
        if (!embla) return;
        onSelect();
        setScrollSnaps(embla.scrollSnapList());
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);
    return (
        <Box sx={{ position: "relative" }}>
            <Box className="embla" sx={styles.Embla}>
                <Box className="embla__viewport" ref={viewportRef}>
                    <Box className="embla__container" sx={styles.EmblaContainer}>
                        {banners &&
                            banners.map((carousel, i) => (
                                <Box className="embla__slide" key={i} sx={styles.EmblaSlide}>
                                    <Link href={carousel.url}>
                                        <a aria-label="carousel" rel="preload">
                                            <Box className="ratioImage">
                                                <Image
                                                    src={process.env.NEXT_PUBLIC_IMAGE_PATH + carousel.banner}
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
            <Box className="embla__dots" sx={styles.Dot}>
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        selected={index === selectedIndex}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </Box>
        </Box>
    );
};
export default Carousel;


//Dot Button Props
interface Props {
    selected: boolean,
    onClick: () => void
}

//Dot Button
export const DotButton = ({ selected, onClick }: Props) => (
    <ButtonBase
        className={`embla__dot ${selected ? "is-selected" : ""}`}
        type="button"
        onClick={onClick}
        aria-label="embla_dot"
    />
);