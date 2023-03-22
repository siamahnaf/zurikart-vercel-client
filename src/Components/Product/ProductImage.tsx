import { useState } from "react";
import { Box, Grid } from "@mui/material";

//Components
import Images from "./ProductImage/Images";
import Magnify from "./ProductImage/Magnify";

const ProductImage = () => {
    const [current, setCurrent] = useState<number>(0);
    return (
        <Box>
            <Grid container spacing={2} direction={{ lg: "row", xxs: "column-reverse" }}>
                <Grid item {...{ xxxl: 1.5, xxl: 2, xl: 2.2, lg: 2.5, md: 12, smd: 2.5, xxs: 12 }}>
                    <Box>
                        <Images
                            setCurrent={setCurrent}
                            current={current}
                        />
                    </Box>
                </Grid>
                <Grid item {...{ xxxl: 10.5, xxl: 10, xl: 9.8, lg: 9.5, md: 12, smd: 9.5, xxs: 12 }}>
                    <Magnify
                        current={current}
                    />
                </Grid>
            </Grid>
        </Box>
    );
};
export default ProductImage;