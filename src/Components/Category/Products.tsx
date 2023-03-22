import { ChangeEvent, useState, useMemo } from "react";
import { Box, Pagination } from "@mui/material";
import { useRouter } from "next/router";

//Product
import CategoryProduct from "Components/Common/CategoryProduct";

//Styles
import styles from "Styles/Category/Products.styles";

//import types
import { ProductsData, PageInfos } from "Types/Category/category.type";

//Redux
import { useAppSelector } from "Redux/Hook";

const Products = () => {
    const router = useRouter();
    //Selector
    const { productsData, pageInfos } = useAppSelector(state => state.getProduct);
    //State
    const [products, setProducts] = useState<ProductsData[]>(productsData);
    const [pagesInfos, setPagesInfos] = useState<PageInfos>(pageInfos)
    //Handler
    const onChange = (vent: ChangeEvent<unknown>, page: number) => {
        const { index, ...prams } = router.query;
        router.push({
            pathname: `/category/${router.query.index}`,
            query: {
                ...prams,
                page: page
            }
        })
    }
    //Effect
    useMemo(() => {
        if (productsData !== null) {
            setProducts(productsData)
        }
    }, [productsData])
    useMemo(() => {
        if (pageInfos) {
            setPagesInfos(pageInfos)
        }
    }, [pageInfos])
    return (
        <Box>
            <CategoryProduct
                products={products}
            />
            <Box sx={styles.Pagination}>
                {Math.ceil(pagesInfos.count / 12) > 1 &&
                    < Pagination
                        count={Math.ceil(pagesInfos.count / 12)}
                        onChange={onChange}
                        page={router.query.page ? Number(router.query.page) : 1}
                    />
                }
            </Box>
        </Box>
    );
};
export default Products;