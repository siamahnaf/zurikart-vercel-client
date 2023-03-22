import { useState, SyntheticEvent } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

//Components
import Description from "./ProductInfo/Description";
import Specification from "./ProductInfo/Specification";

//Styles
import styles from "Styles/Product/ProductInfo.styles";

const ProductInfo = () => {
    const [value, setValue] = useState<string>('1');
    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <Box sx={{ mt: "3em" }}>
            <TabContext value={value}>
                <Box>
                    <TabList
                        onChange={handleChange}
                        variant="scrollable"
                        aria-label="lab API tabs example"
                        TabIndicatorProps={{
                            style: {
                                display: "none",
                            }
                        }}
                        sx={styles.Buttons}
                    >
                        <Tab label="Description" value="1" />
                        <Tab label="Specification" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Description />
                </TabPanel>
                <TabPanel value="2">
                    <Specification />
                </TabPanel>
            </TabContext >
        </Box >
    );
};
export default ProductInfo;