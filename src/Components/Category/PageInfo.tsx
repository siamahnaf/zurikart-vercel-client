import { useState, ChangeEvent, KeyboardEvent, MouseEvent } from "react";
import { Box, Stack, Typography, Breadcrumbs, NativeSelect } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { Icon } from "@iconify/react";

//Component
import Drawers from "./PageInfo/Drawers";

//Styles
import styles from "Styles/Category/PageInfo.styles";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface SubCategory {
    id: string,
    name: string,
    slug: string;
}
interface Categories {
    id: string;
    name: string;
    slug: string;
    image: string;
    subCategory: SubCategory[];
}

const PageInfo = () => {
    //Selector
    const { categoriesData } = useAppSelector(state => state.getCategory);
    //State
    const [filter, setFilter] = useState<string>("");
    const [categories, setCategories] = useState<Categories[]>(categoriesData);
    const [open, setOpen] = useState<boolean>(false);
    //Handler
    const router = useRouter();
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setFilter(event.target.value);
        const { index, ...prams } = router.query;
        router.push({
            pathname: `/category/${router.query.index}`,
            query: {
                ...prams,
                sortBy: event.target.value.split("-")[0],
                order: event.target.value.split("-")[1]
            }
        })
    }
    const toggleDrawer = (prop: boolean) =>
        (event: KeyboardEvent | MouseEvent) => {
            if (
                event &&
                event.type === 'keydown' &&
                ((event as KeyboardEvent).key === 'Tab' ||
                    (event as KeyboardEvent).key === 'Shift')
            ) {
                return;
            }
            setOpen(prop);
        };
    return (
        <Box sx={{ mb: "10px" }}>
            <Stack direction="row">
                <Box sx={{ flex: 1, display: { msm: "block", xxs: "none" } }}>
                    <Typography variant="h6" component="h6" sx={styles.Title}>
                        {categories.find((item) => item.slug === router.query.index)?.name || router.query.q || "Shop"}
                    </Typography>
                    <Breadcrumbs aria-label="breadcrumb" sx={styles.Breadcrumb}>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                        <Typography variant="body1" component="p">
                            Category
                        </Typography>
                        <Typography variant="body1" component="p">
                            {categories.find((item) => item.slug === router.query.index)?.name || router.query.q || "All Categories"}
                        </Typography>
                    </Breadcrumbs>
                </Box>
                <Box>
                    <Typography variant="body1" component="p" sx={styles.SortBy}>
                        Sort by
                    </Typography>
                    <NativeSelect
                        value={filter}
                        sx={styles.Select}
                        onChange={onChange}
                    >
                        <option value="_id-aesc">Newest</option>
                        <option value="_id-desc">Oldest</option>
                        <option value="totalPrice-aesc">Price low to high</option>
                        <option value="totalPrice-desc">Price high to low</option>
                    </NativeSelect>
                </Box>
                <Box sx={styles.Filter} onClick={toggleDrawer(true)}>
                    <Icon icon="bytesize:filter" />
                </Box>
                <Drawers
                    open={open}
                    handleClose={toggleDrawer}
                />
            </Stack>
        </Box>
    );
};
export default PageInfo;