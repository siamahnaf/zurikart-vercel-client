import { KeyboardEvent, MouseEvent, useState, Fragment } from "react";
import { Drawer, Stack, Box, Typography, List, ListItem, ButtonBase, Collapse } from "@mui/material";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

//Styles
import styles from "Styles/Header/Drawers.styles";

//Types import
import { SitesSettings } from "Types/Common/Sites.types";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface Props {
    open: boolean;
    handleClose: (prop: boolean) => (event: KeyboardEvent | MouseEvent) => void
}
interface SubCategory {
    id: string,
    name: string,
    slug: string;
}
interface Categories {
    id: string;
    name: string;
    slug: string;
    subCategory: SubCategory[]
}

const Drawers = ({ open, handleClose }: Props) => {
    //Selector
    const { categoriesData } = useAppSelector(state => state.getCategory);
    const { sitesData } = useAppSelector(state => state.siteSettings);
    //State
    const [collapse, setCollapse] = useState<number | null>(null);
    const [categories, setCategories] = useState<Categories[]>(categoriesData);
    const [sites, setSites] = useState<SitesSettings>(sitesData);
    //Handler
    const collapseHandler = (i: number) => {
        if (collapse === i) {
            setCollapse(null)
        } else {
            setCollapse(i)
        }
    }
    return (
        <Drawer
            anchor="left"
            open={open}
            onClose={handleClose(false)}
            ModalProps={{
                disableScrollLock: true
            }}
            sx={styles.Drawer}
        >
            <Stack direction="row" alignItems="center" sx={styles.LogoArea}>
                <Box sx={{ flex: 1 }}>
                    {sites?.logo ? (
                        <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + sites?.logo} alt="Logo" width={150} height={38.45} />
                    ) : (
                        <Typography variant="h6" component="h6">
                            {sites?.siteTitle}
                        </Typography>
                    )}
                </Box>
                <ButtonBase onClick={handleClose(false)}>
                    <Icon icon="clarity:close-line" />
                </ButtonBase>
            </Stack>
            <Stack direction="row" alignItems="center" sx={styles.CategoryArea}>
                <Typography variant="h6" component="h6">
                    Categories
                </Typography>
                <Typography variant="body1" component="p">
                    See All
                </Typography>
            </Stack>
            <List dense disablePadding sx={styles.Category}>
                {categories &&
                    categories.map((category, i) => (
                        <Fragment key={i}>
                            <ListItem dense disableGutters disablePadding>
                                <Box sx={{ flex: 1 }}>
                                    <Link href={`/category/${category.slug}`}>
                                        <a>
                                            <Typography variant="body1" component="p">
                                                {category.name}
                                            </Typography>
                                        </a>
                                    </Link>
                                </Box>
                                <Box sx={styles.ButtonStyle}>
                                    <ButtonBase onClick={() => collapseHandler(i)} className={category.subCategory.length > 0 ? "active" : ""}>
                                        <Icon className={(collapse === i && category.subCategory.length > 0) ? "active" : ""} icon="la:angle-right" />
                                    </ButtonBase>
                                </Box>
                            </ListItem>
                            <Collapse in={collapse === i}>
                                {category.subCategory.length > 0 &&
                                    <List dense disablePadding sx={{ ml: "20px" }}>
                                        {category.subCategory.map((item, i) => (
                                            <ListItem dense disableGutters disablePadding key={i}>
                                                <Link href={`/category/${category.slug}?subcategory=${item.slug}`} key={i}>
                                                    <a>
                                                        <Typography variant="body1" component="p">
                                                            {item.name}
                                                        </Typography>
                                                    </a>
                                                </Link>
                                            </ListItem>
                                        ))}
                                    </List>
                                }
                            </Collapse>
                        </Fragment>
                    ))
                }
            </List>
        </Drawer>
    );
};
export default Drawers;