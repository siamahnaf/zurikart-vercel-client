import { useState, useEffect, useCallback } from "react";
import { Box, ButtonBase } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react"
import styles from "Styles/Header/Nav.styles";
import { useAppSelector } from "Redux/Hook";
interface SubCategory {
    id: string,
    name: string,
    slug: string;
}
interface Categories {
    id: string;
    name: string;
    slug: string;
    subCategory: SubCategory[]
}
const Nav = () => {
    const { categoriesData } = useAppSelector(state => state.getCategory);
    const [categories, setCategories] = useState<Categories[]>(categoriesData);
    const [hover, setHover] = useState<number | null>(null);
    const [viewportRef, embla] = useEmblaCarousel({
        containScroll: "trimSnaps",
        dragFree: true
    });
    const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
    const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

    const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
    const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
    const onSelect = useCallback(() => {
        if (!embla) return;
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
    }, [embla]);

    useEffect(() => {
        if (!embla) return;
        embla.on("select", onSelect);
        onSelect();
    }, [embla, onSelect]);
    useEffect(() => {
        if (!embla) return;
        embla.reInit()
    }, [embla])
    return (
        <Box sx={{ position: "relative", py: "10px", display: { md: "block", xxs: "none" } }} onMouseLeave={() => setHover(null)}>
            <Box className="embla" sx={styles.Embla}>
                {categories.length > 0 &&
                    <Box className="embla__viewport" ref={viewportRef}>
                        <Box className="embla__container" sx={styles.Embla__container}>
                            {categories.map((item, i) => (
                                <Box className="embla__slide" key={i} sx={styles.Embla_Slide}>
                                    <Link href={`/category/${item.slug}`}>
                                        <a onMouseEnter={() => setHover(i)}>
                                            {item.name}
                                        </a>
                                    </Link>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                }
            </Box>
            {hover !== null && categories[hover as number].subCategory.length > 0 &&
                <Box sx={styles.Megamenu}>
                    {categories[hover as number].subCategory.map((item, i) => (
                        <Link href={`/category/${categories[hover as number].slug}?subcategory=${item.slug}`} key={i}>
                            <a>{item.name}</a>
                        </Link>
                    ))}
                </Box>
            }
            <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
            <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        </Box>
    );
};
export default Nav;



//ButtonProps
interface ButtonProps {
    enabled: boolean;
    onClick: () => void;
}
//Prev button
export const PrevButton = ({ enabled, onClick }: ButtonProps) => (
    <ButtonBase
        className={!enabled ? "hidden" : ""}
        onClick={onClick}
        disabled={!enabled}
        sx={styles.PrevButton}
    >
        <Icon icon="carbon:chevron-left" />
    </ButtonBase>
);
//Next button
export const NextButton = ({ enabled, onClick }: ButtonProps) => (
    <ButtonBase
        className={!enabled ? "hidden" : ""}
        onClick={onClick}
        disabled={!enabled}
        sx={styles.NextButton}
    >
        <Icon icon="carbon:chevron-right" />
    </ButtonBase>
);