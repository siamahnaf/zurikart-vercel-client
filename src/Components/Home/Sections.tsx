import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Image from "next/image";

//Components
import ProductCarousel from "Components/Common/ProductCarousel";

//Types import
import { Sections } from "Types/Home/Section.types";
import Banners from "./Banners";

//Redux
import { useAppSelector } from "Redux/Hook";
import Link from "next/link";

const Sections = () => {
    //Selector
    const { sectionsData } = useAppSelector(state => state.getSections);
    //State
    const [sections, setSections] = useState<Sections[]>(sectionsData);
    return (
        <Box sx={{ my: "1.5em" }}>
            {sections.map((item, i) => (
                <Box key={i}>
                    <Box>
                        <Stack direction="row" sx={{ bgcolor: item?.color || "white", py: "3px", px: "4px" }}>
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body1" component="p" sx={{ fontSize: "16px", fontWeight: 700 }}>
                                    {item?.category1?.name}
                                </Typography>
                            </Box>
                            <Box sx={{ a: { textDecoration: "none", textTransform: "uppercase", color: "black", display: "flex", alignItems: "center", fontSize: "18px", svg: { fontSize: "28px" } } }}>
                                <Link href={`/category/${item?.category1?.slug}`}>
                                    <a>
                                        <span>See All</span>
                                        <Icon icon="ic:round-keyboard-arrow-right" />
                                    </a>
                                </Link>
                            </Box>
                        </Stack>
                        <ProductCarousel products={item.category1Product} />
                    </Box>
                    <Box>
                        <Stack direction="row">
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="body1" component="p" sx={{ fontSize: "16px", fontWeight: 700 }}>
                                    {item?.category1?.name}
                                </Typography>
                            </Box>
                            <Box sx={{ a: { textDecoration: "none", textTransform: "uppercase", color: "black", display: "flex", alignItems: "center", fontSize: "18px", svg: { fontSize: "28px" } } }}>
                                <Link href={`/category/${item?.category1?.slug}`}>
                                    <a>
                                        <span>See All</span>
                                        <Icon icon="ic:round-keyboard-arrow-right" />
                                    </a>
                                </Link>
                            </Box>
                        </Stack>
                        <ProductCarousel products={item.category1Product} />
                    </Box>
                    <Box sx={{ mb: "2em" }}>
                        {item?.dynamicBanner.length > 0 &&
                            <Banners
                                dynamicBanner={item?.dynamicBanner}
                            />
                        }
                        {item?.banner &&
                            <Link href={item?.bannerUrl}>
                                <a><Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + item.banner} alt="banner" width={2560} height={400} placeholder="blur" blurDataURL={process.env.NEXT_PUBLIC_IMAGE_PATH + item.banner} /></a>
                            </Link>
                        }
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default Sections;