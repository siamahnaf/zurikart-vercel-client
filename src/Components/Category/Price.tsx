import { useState, useMemo } from "react";
import { Box, Slider, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";

//Styles
import styles from "Styles/Category/Price.styles";

//Types import
import { PriceRange } from "Types/Category/category.type";

//Redux
import { useAppSelector } from "Redux/Hook";

//Custom Components
function valuetext(value: number) {
    return `${value} tk`;
}

const Price = () => {
    //Selector
    const { priceRange } = useAppSelector(state => state.getProduct);
    //State
    const [prices, setPrices] = useState<PriceRange>(priceRange);
    const [value, setValue] = useState<number[]>([prices?.lowest || 0, prices?.highest || 0]);
    //Handler
    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    const router = useRouter();
    const handleChangeCommitted = (event: React.SyntheticEvent | Event, newValue: number | Array<number>) => {
        const { index, ...prams } = router.query;
        router.push({
            pathname: `/category/${router.query.index}`,
            query: {
                ...prams,
                minPrice: value[0],
                maxPrice: value[1]
            }
        })
    }
    //Effect
    useMemo(() => {
        if (priceRange) {
            setPrices(priceRange)
        }
    }, [priceRange])
    return (
        <Box sx={styles.Container}>
            <Typography variant="h6" component="h6" sx={styles.Title}>
                Price Range
            </Typography>
            <Slider
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleChangeCommitted}
                valueLabelFormat={valuetext}
                max={prices?.highest}
                min={prices?.lowest}
            />
            <Stack direction="row" sx={styles.PriceList}>
                <Typography variant="body1" component="p" sx={{ flex: 1 }}>
                    {value[0]}
                </Typography>
                <Typography variant="body1" component="p">
                    {value[1]}
                </Typography>
            </Stack>
        </Box>
    );
};
export default Price;