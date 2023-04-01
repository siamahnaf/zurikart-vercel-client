import { useState, useEffect, useMemo } from "react";
import { Box, InputBase, InputAdornment, Typography, Grid, ClickAwayListener, ButtonBase, Stack } from "@mui/material";
import { Icon } from "@iconify/react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useForm, SubmitHandler, useWatch } from "react-hook-form";

//Image
import Default from "Assets/product.png";

//Styles
import styles from "Styles/Header/Search.styles";

//Redux
import { useAppSelector, useAppDispatch } from "Redux/Hook";
import { getProductBySearch } from "Redux/Action/Product/product.action";

//Types
interface Inputs {
    search: string;
}
interface ProductImage {
    url: string
}
interface ProductsSearch {
    name: string;
    slug: string;
    productImages: ProductImage[];
    price: number;
    totalPrice: number;
}

const Search = () => {
    const { loading, productsData } = useAppSelector(state => state.getProductSearch);
    const [search, setSearch] = useState<boolean>(false);
    const [products, setProducts] = useState<ProductsSearch[]>(productsData);
    const {
        register,
        handleSubmit,
        control
    } = useForm<Inputs>();
    const router = useRouter();
    const dispatch = useAppDispatch();
    const onSubmit: SubmitHandler<Inputs> = (data, e) => {
        setSearch(false);
        router.push({
            pathname: `/category/search`,
            query: {
                q: data.search
            }
        })
    };
    const searchInput = useWatch<Inputs>({
        control,
        name: "search"
    });
    useEffect(() => {
        if (searchInput) {
            dispatch(getProductBySearch(searchInput))
        }
    }, [searchInput, dispatch]);
    useMemo(() => {
        if (productsData !== null && productsData) {
            setProducts(productsData)
        }
    }, [productsData])
    return (
        <Box sx={{ position: "relative" }}>
            <ClickAwayListener onClickAway={() => setSearch(false)}>
                <Box>
                    <Stack direction="row" gap={1} component="form" onSubmit={handleSubmit(onSubmit)}>
                        <InputBase
                            placeholder="Search Products"
                            fullWidth
                            startAdornment={(
                                <InputAdornment position="start" onClick={handleSubmit(onSubmit)} sx={styles.SearchIcon}>
                                    <Icon icon="fe:search" />
                                </InputAdornment>
                            )}
                            sx={styles.SearchBox}
                            onClick={() => setSearch(true)}
                            autoComplete="off"
                            {...register("search")}
                        />
                        <ButtonBase type="submit" sx={styles.SearchButton}>
                            Search
                        </ButtonBase>
                    </Stack>
                    {products?.length > 0 && search &&
                        <Box sx={styles.SuggestionBar}>
                            {products.map((product, i) => (
                                <Link href={`/product/${product.slug}`} key={i}>
                                    <a>
                                        <Grid container spacing={2}>
                                            <Grid item {...{ lgs: 1.2, smd: 2.5 }}>
                                                {product?.productImages[0]?.url ?
                                                    (
                                                        <Image src={process.env.NEXT_PUBLIC_IMAGE_PATH + product?.productImages[0]?.url} alt={product.name} width={60} height={60} placeholder="blur" blurDataURL={process.env.NEXT_PUBLIC_IMAGE_PATH + product?.productImages[0]?.url} />
                                                    ) : (
                                                        <Image src={Default} alt={product.name} width={60} height={60} placeholder="blur" />
                                                    )
                                                }
                                            </Grid>
                                            <Grid item {...{ lgs: 10.8, smd: 9.5 }}>
                                                <Typography variant="body1" component="p" sx={styles.title}>
                                                    {product.name}
                                                </Typography>
                                                <Box sx={styles.Prices}>
                                                    {product.price > product.totalPrice &&
                                                        <Typography variant="body1" component="span" className="priceTag">
                                                            {product.price}tk
                                                        </Typography>
                                                    }
                                                    <Typography variant="body1" component="span" >
                                                        {product.totalPrice}tk
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </a>
                                </Link>
                            ))}
                        </Box>
                    }
                </Box>
            </ClickAwayListener>
        </Box>
    );
};
export default Search;