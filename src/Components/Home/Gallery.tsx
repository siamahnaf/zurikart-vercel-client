import { useState } from "react";
import { Grid } from "@mui/material";
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
    console.log(galleryData);
    //State
    const [gallery, getGallery] = useState<BannersData[]>(galleryData);
    return (
        <div>
            <Grid container spacing={3}>
                {gallery.map((item, i) => (
                    <Grid item {...{ md: 6 }} key={i}>
                        <Link href={item.url}>
                            <a>
                                <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + item.gallery} alt={item.name} width={400} height={420} />
                            </a>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Gallery;