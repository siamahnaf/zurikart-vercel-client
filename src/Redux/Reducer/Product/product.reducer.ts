import { AnyAction } from "@reduxjs/toolkit";
import {
    //Get Products
    GET_PRODUCTS_FAILED,
    GET_PRODUCTS_SUCCESS,
    //Get Products by Search
    GET_PRODUCT_SEARCH_LOADING,
    GET_PRODUCT_SEARCH_FAILED,
    GET_PRODUCT_SEARCH_SUCCESS,
    //Get single products
    GET_PRODUCT_SINGLE_FAILED,
    GET_PRODUCT_SINGLE_SUCCESS,
    //Get reviews
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAILED,
    //Get selling product
    GET_SELLING_FAILED,
    GET_SELLING_SUCCESS
} from "Redux/Constant/Product/product.constant";


//Get product initial state and type
interface ProductImage {
    url: string;
}
interface Products {
    id: string;
    name: string;
    category: {
        name: string;
    }
    slug: string;
    productImages: ProductImage[];
    price: number;
    totalPrice: number;
    discount: number;
    discountUnit: string;
}
interface GetProductsInitial {
    message?: string;
    success?: boolean | null;
    productsData?: Products[] | null;
    pageInfos?: {
        hasNextPage: boolean
        count: number
    }
    priceRange?: {
        highest: number
        lowest: number
    }
}
//--//
const getProductsInitial: GetProductsInitial = { productsData: null }
//--//
export const getProductsReducer = (state = getProductsInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_PRODUCTS_SUCCESS:
            return {
                success: action.payload.products.products.length > 0 ? true : false,
                productsData: action.payload.products.products,
                pageInfos: action.payload.products.pageInfos,
                priceRange: action.payload.products.priceRange
            }
        case GET_PRODUCTS_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}



//Get product by Search initial state and type
interface ProductsSearch {
    name: string;
    slug: string;
    productImages: ProductImage[];
    price: number;
    totalPrice: number;
    discount: number;
    discountUnit: string;
}
interface GetProductsSearchInitial {
    message?: string;
    success?: boolean | null;
    loading?: boolean;
    productsData?: ProductsSearch[] | null;
}
//--//
const getProductsSearchInitial: GetProductsSearchInitial = {
    loading: false,
    productsData: null
}
//--//
export const getProductsSearchReducer = (state = getProductsSearchInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_PRODUCT_SEARCH_LOADING:
            return {
                loading: true
            }
        case GET_PRODUCT_SEARCH_SUCCESS:
            return {
                success: action.payload.productsSearch.success,
                productsData: action.payload.productsSearch.products,
                loading: false
            }
        case GET_PRODUCT_SEARCH_FAILED:
            return {
                message: action.payload.message,
                loading: false,
                success: false
            }
        default:
            return state
    }
}

//Get product initial state and type
interface Attributes {
    variant: string;
    price: number;
    quantity: number;
    image: string;
}
interface SingleProduct {
    id: string;
    name: string;
    brand: {
        name: string;
    };
    category: {
        name: string;
        slug: string;
    };
    minPurchase: number;
    productImages: ProductImage[];
    youtubeLink: string;
    price: number;
    quantity: number;
    description: string;
    attributes: Attributes[];
    meta: {
        title: string;
        description: string;
        metaTags: string[];
        image: string;
    }
    view: number;
    doorDeliveryFee: number;
    pickupFee: number;
    totalPrice: string;
    disclaimer: string;
}
interface GetSingleProductsInitial {
    message?: string;
    success?: boolean | null;
    products?: SingleProduct
}
//--//
const getSingleProductsInitial: GetSingleProductsInitial = {}
//--//
export const getSingleProductReducer = (state = getSingleProductsInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_PRODUCT_SINGLE_SUCCESS:
            return {
                success: true,
                products: action.payload.singleProduct,
            }
        case GET_PRODUCT_SINGLE_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}

//Get reviews initial and types
interface Url {
    url: string;
}
interface Reviews {
    user: {
        name: string;
        phone: string;
        avatar: string;
    };
    image: Url[];
    comment: string;
    rate: number;
}
interface GetReviewsInitial {
    message?: string;
    success?: boolean | null;
    reviewsData?: Reviews[]
}
//--//
const getReviewsInitial: GetReviewsInitial = {}
//--//
export const getReviewsReducer = (state = getReviewsInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_REVIEWS_SUCCESS:
            return {
                success: true,
                reviewsData: action.payload.reviews,
            }
        case GET_REVIEWS_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}

//Get product initial state and type
interface SellingProducts {
    id: string;
    name: string;
    slug: string;
    productImages: ProductImage[];
    price: number;
    totalPrice: number;
}
interface GetSellingInitial {
    message?: string;
    success?: boolean | null;
    sellingProducts?: SellingProducts[];
}
//--//
const getSellingInitial: GetSellingInitial = { sellingProducts: [] }
//--//
export const getSellingReducer = (state = getSellingInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_SELLING_SUCCESS:
            return {
                success: true,
                sellingProducts: action.payload.selling
            }
        case GET_SELLING_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}
