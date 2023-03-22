import { useState, useMemo } from "react";
import { Box, TableContainer, Table, TableBody, TableRow, TableCell, Typography } from "@mui/material";

//Styles
import styles from "Styles/Product/ProductInfo.styles";

//Types import
import { SingleProduct } from "Types/Product/Product.types";

//Redux
import { useAppSelector } from "Redux/Hook";

const Specification = () => {
    //Selector
    const { products } = useAppSelector(state => state.getSingleProduct);
    //State
    const [product, setProduct] = useState<SingleProduct>(products);
    //Effect
    useMemo(() => {
        if (products) {
            setProduct(products)
        }
    }, [products])
    return (
        <Box>
            {product?.specification?.length > 0 &&
                <TableContainer>
                    <Table>
                        <TableBody sx={styles.TableContainer}>
                            {product.specification.map((item, i) => (
                                <TableRow key={i}>
                                    <TableCell sx={styles.TableCell}>{item.title}</TableCell>
                                    <TableCell>{item.value}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
            {product?.specification?.length === 0 &&
                <Typography variant="body1" component="p" sx={{ opacity: 0.7 }}>
                    There have been no specification for this product yet.
                </Typography>
            }
        </Box>
    );
};
export default Specification;