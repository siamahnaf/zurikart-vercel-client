import { KeyboardEvent, MouseEvent } from "react";
import { Drawer } from "@mui/material";

//Component
import Category from "Components/Category/Category";
import Brand from "Components/Category/Brand";
import Price from "Components/Category/Price";

//Styles
import styles from "Styles/Category/Drawer.styles";

//Types
interface Props {
    open: boolean;
    handleClose: (prop: boolean) => (event: KeyboardEvent | MouseEvent) => void
}

const Drawers = ({ open, handleClose }: Props) => {
    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={handleClose(false)}
            sx={styles.Drawer}
        >
            <Category />
            <Brand />
            <Price />
        </Drawer>
    );
};

export default Drawers;