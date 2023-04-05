import { useState } from "react";
import { Grid, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface BannersData {
    name: string;
    url: string;
    gallery: string;
}

const Gallery = () => {
    //Selector
    const { galleryData } = useAppSelector(state => state.getGallery);
    //State
    const [gallery, getGallery] = useState<BannersData[]>(galleryData);
    return (
        <div>
            <Grid container spacing={1}>
                {gallery.map((item, i) => (
                    <Grid item {...{ xxs: 6 }} key={i}>
                        <Box sx={{ a: { span: { display: "block !important" } } }}>
                            <Link href={item.url}>
                                <a>
                                    <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + item.gallery} alt={item.name} width={600} height={600} placeholder="blur" blurDataURL={process.env.NEXT_PUBLIC_IMAGE_PATH + item.gallery} />
                                </a>
                            </Link>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Gallery;