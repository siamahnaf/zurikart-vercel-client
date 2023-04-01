import { useState } from "react";
import { Box, Grid } from "@mui/material";

//Components
import Images from "./ProductImage/Images";
import Magnify from "./ProductImage/Magnify";

const ProductImage = () => {
    const [current, setCurrent] = useState<number>(0);
    return (
        <Box>
            <Grid container spacing={2} direction={{ lg: "row" }}>
                <Grid item {...{ xxs: 12 }}>
                    <Magnify
                        current={current}
                    />
                </Grid>
                <Grid item {...{ xxs: 12 }}>
                    <Box>
                        <Images
                            setCurrent={setCurrent}
                            current={current}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
export default ProductImage;