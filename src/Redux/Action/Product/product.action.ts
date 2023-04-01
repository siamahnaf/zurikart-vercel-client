import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import {
    //Get products
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAILED,
    //Get product by search
    GET_PRODUCT_SEARCH_LOADING,
    GET_PRODUCT_SEARCH_FAILED,
    GET_PRODUCT_SEARCH_SUCCESS,
    //Get single product
    GET_PRODUCT_SINGLE_FAILED,
    GET_PRODUCT_SINGLE_SUCCESS,
    //Get reviews
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAILED,
    //Get selling product
    GET_SELLING_FAILED,
    GET_SELLING_SUCCESS
} from "Redux/Constant/Product/product.constant";
import { SERVER_ERROR } from "Redux/Constant/server.constant";

//Get products
interface GetData {
    index?: string;
    subcategory?: string;
    sortBy?: string;
    order?: string;
    minPrice?: string;
    maxPrice?: string;
    page?: string;
    q?: string;
    query?: string;
}
export const getProducts = (data: GetData) => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getProducts($productPrams: ProductPrams!) {
                getProducts(productPrams: $productPrams) {
                    success
                    products {
                        id
                        name
                        category {
                            name
                        }
                        slug
                        productImages {
                            url
                        }
                        price
                        totalPrice
                        discount
                        discountUnit
                        view
                    }
                    pageInfos {
                        hasNextPage
                        count
                    }
                    priceRange {
                        highest
                        lowest
                    }
                }
            }`,
        variables: {
            productPrams: {
                search: data?.q ? data.q : "",
                category: data?.index ? (data?.index === "search" || data?.index === "brand" || data?.index === "shop" ? "" : data?.index) : "",
                brand: data?.query ? data?.query : "",
                subCategory: data?.subcategory ? [data?.subcategory] : [],
                order: data?.order ? data?.order : "aesc",
                sortBy: data?.sortBy ? data?.sortBy : "_id",
                skip: data?.page ? data?.page : "1",
                price: data.minPrice ? [Number(data?.minPrice), Number(data?.maxPrice)] : [],
                limit: 12,
                visibility: true
            }
        }
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_PRODUCTS_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_PRODUCTS_SUCCESS,
                    payload: {
                        products: res.data.data.getProducts
                    }
                })
            }
        })
        .catch(err => {
            dispatch({
                type: SERVER_ERROR,
                payload: {
                    message: "Something went wrong!"
                }
            })
        })
}


//Get product by search
export const getProductBySearch = (search: string) => async (dispatch: Dispatch) => {
    dispatch({ type: GET_PRODUCT_SEARCH_LOADING })
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getProducts($productPrams: ProductPrams!) {
                getProducts(productPrams: $productPrams) {
                    success
                    products {
                        name
                        slug
                        productImages {
                            url
                        }
                        price
                        totalPrice
                        discount
                        discountUnit
                        view
                    }
                }
            }`,
        variables: {
            productPrams: {
                search: search,
            }
        }
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_PRODUCT_SEARCH_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_PRODUCT_SEARCH_SUCCESS,
                    payload: {
                        productsSearch: res.data.data.getProducts
                    }
                })
            }
        })
        .catch(err => {
            dispatch({
                type: SERVER_ERROR,
                payload: {
                    message: "Something went wrong!"
                }
            })
        })
}


//Get single products
export const getSingleProduct = (slug: string) => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getProduct {
                getProduct(slug: "${slug}") {
                  id
                  name
                  brand {
                    name
                  }
                  category {
                    name
                    slug
                  }
                  minPurchase
                  productImages {
                    url
                  }
                  youtubeLink
                  price
                  quantity
                  description
                  shortSummery
                  badge
                  notice
                  attributes {
                    variant
                    price
                    quantity
                    image
                  }
                  view
                  doorDeliveryFee
                  pickupFee
                  specification {
                    title
                    value
                  }
                  meta {
                    title
                    description
                    metaTags
                    image
                  }
                  tag {
                    name
                  }
                  totalPrice
                  disclaimer
                  productUrl
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_PRODUCT_SINGLE_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_PRODUCT_SINGLE_SUCCESS,
                    payload: {
                        singleProduct: res.data.data.getProduct
                    }
                })
            }
        })
        .catch(err => {
            dispatch({
                type: SERVER_ERROR,
                payload: {
                    message: "Something went wrong!"
                }
            })
        })
}

//Get reviews
export const getReviews = (slug: string) => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getReviews {
                getReviews(productId: "${slug}") {
                    user {
                        name
                        phone
                        avatar
                    }
                    image {
                        url
                    }
                    comment
                    rate
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_REVIEWS_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_REVIEWS_SUCCESS,
                    payload: {
                        reviews: res.data.data.getReviews
                    }
                })
            }
        })
        .catch(err => {
            dispatch({
                type: SERVER_ERROR,
                payload: {
                    message: "Something went wrong!"
                }
            })
        })
}

//Get selling product
export const getSellingProduct = (slug: string) => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getSellingProduct {
                getSellingProduct(slug: "${slug}") {
                    id
                    name
                    productImages {
                        url
                    }
                    price
                    totalPrice
                    slug
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_SELLING_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_SELLING_SUCCESS,
                    payload: {
                        selling: res.data.data.getSellingProduct
                    }
                })
            }
        })
        .catch(err => {
            dispatch({
                type: SERVER_ERROR,
                payload: {
                    message: "Something went wrong!"
                }
            })
        })
}