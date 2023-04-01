import { useState } from "react";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";


//Images
import Exce from "Assets/exx.png";

//Image
import Default from "Assets/product.png";

//Styles
import styles from "Styles/Common/Products.styles";

//Import types
import { Products } from "Types/Home/Section.types";

//Types
interface Props {
    products: Products[]
}

const ProductCarousel = ({ products }: Props) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        mode: "snap",
        loop: true,
        breakpoints: {
            '(min-width: 1537px)': {
                slides: {
                    perView: 6,
                    spacing: 10
                }
            },
            '(max-width: 1536px) and (min-width: 993px)': {
                slides: {
                    perView: 6,
                    spacing: 10
                }
            },
            '(max-width: 992px) and (min-width: 769px)': {
                slides: {
                    perView: 5,
                    spacing: 10
                }
            },
            '(max-width: 768px) and (min-width: 641px)': {
                slides: {
                    perView: 4,
                    spacing: 10
                }
            },
            '(max-width: 640px) and (min-width: 361px)': {
                slides: {
                    perView: 2,
                    spacing: 20
                }
            },
            '(max-width: 360px) and (min-width: 360px)': {
                slides: {
                    perView: 2,
                    spacing: 10
                }
            },
            '(max-width: 359px)': {
                slides: {
                    perView: 1,
                    spacing: 15
                }
            },
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }
    }, [
        (slider) => {
            let timeout: ReturnType<typeof setTimeout>
            let mouseOver = false
            function clearNextTimeout() {
                clearTimeout(timeout)
            }
            function nextTimeout() {
                clearTimeout(timeout)
                if (mouseOver) return
                timeout = setTimeout(() => {
                    slider.next()
                }, 2000)
            }
            slider.on("created", () => {
                slider.container.addEventListener("mouseover", () => {
                    mouseOver = true
                    clearNextTimeout()
                })
                slider.container.addEventListener("mouseout", () => {
                    mouseOver = false
                    nextTimeout()
                })
                nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
        },
    ])
    return (
        <Box>
            <Box className="navigation-wrapper" sx={{ position: "relative" }}>
                <Box ref={sliderRef} className="keen-slider" sx={{ pb: "40px" }}>
                    {products.length > 0 && products.map((product, i) => (
                        <Box className={`keen-slider__slide number-slide${0 + 1}`} key={i} sx={styles.Card}>
                            <Link href={`/product/${product.slug}`}>
                                <a>
                                    {product.productImages.length > 0 ?
                                        (<Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + product.productImages[0]?.url} alt={product.name} height={500} width={500} placeholder="blur" blurDataURL={process.env.NEXT_PUBLIC_IMAGE_PATH + product.productImages[0]?.url} />) : (
                                            <Image src={Default} alt={product.name} height={500} width={500} placeholder="blur" blurDataURL={product.name} />
                                        )}
                                    <Typography variant="body1" component="p">
                                        {product.name}
                                    </Typography>
                                    <Box sx={styles.Prices}>
                                        <Typography variant="body1" component="span" >
                                            Ksh {product.totalPrice}
                                        </Typography>
                                    </Box>
                                    <Stack direction="row" alignItems="center" sx={{ mt: "10px" }}>
                                        <Box sx={{ flexBasis: "40%", mt: "5px" }}>
                                            <Image src={Exce} alt="sdfsgd" />
                                        </Box>
                                        <Box sx={{ flex: 1, textAlign: "right" }}>
                                            <Box sx={{ bgcolor: "primary.main", borderRadius: "3px", p: "2px 10px", display: "flex", width: "max-content", ml: "auto", color: "white", gap: "5px", alignItems: "center" }}>
                                                <span>{"4." + (product?.view ? String(product.view)[0] : 0)}</span>
                                                <Icon icon="ic:outline-remove-red-eye" />
                                            </Box>
                                        </Box>
                                    </Stack>
                                </a>
                            </Link>
                        </Box>
                    ))}
                </Box>
                {loaded && instanceRef.current && (
                    <Box sx={styles.ArrowButton}>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details.slides.length - 1
                            }
                        />
                    </Box>
                )}
            </Box>
        </Box>
    );
};
export default ProductCarousel;

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <ButtonBase
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left" : "arrow--right"
                } ${disabeld}`}
            aria-label="carousel-button"
        >
            {props.left && (
                <Icon icon="fa6-solid:angle-left" />
            )}
            {!props.left && (
                <Icon icon="fa6-solid:angle-right" />
            )}
        </ButtonBase>
    )
}