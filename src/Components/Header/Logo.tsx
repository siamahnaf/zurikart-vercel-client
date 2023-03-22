import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

//Types import
import { SitesSettings } from "Types/Common/Sites.types";

//Redux
import { useAppSelector } from "Redux/Hook";

const Logo = () => {
    //Selector
    const { sitesData } = useAppSelector(state => state.siteSettings);
    //State
    const [sites, setSites] = useState<SitesSettings>(sitesData);
    return (
        <Box sx={{ a: { textDecoration: "none", color: "primary.main" } }}>
            <Link href="/">
                <a aria-label="logo">
                    {sites?.logo ? (
                        <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + sites?.logo} alt="Logo" width={130} height={43} />
                    ) : (
                        <Typography variant="h6" component="h6">
                            {sites?.siteTitle}
                        </Typography>
                    )}
                </a>
            </Link>
        </Box>
    );
};
export default Logo;