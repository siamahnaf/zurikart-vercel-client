import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import {
    //Get banners
    GET_BANNERS_FAILED,
    GET_BANNERS_SUCCESS,
    //Get sliders
    GET_SLIDER_SUCCESS,
    GET_SLIDER_FAILED,
    GET_GALLERY_SUCCESS,
    GET_GALLERY_FAILED,
    //Get sections
    GET_SECTIONS_FAILED,
    GET_SECTIONS_SUCCESS,
    //Get Brands
    GET_BRANDS_FAILED,
    GET_BRANDS_SUCCESS,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAILED
} from "Redux/Constant/Home/home.constant";
import { SERVER_ERROR } from "Redux/Constant/server.constant";

//Get banners
export const getBanners = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getBanners {
                getBanners {
                    name
                    url
                    banner
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_BANNERS_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_BANNERS_SUCCESS,
                    payload: {
                        banners: res.data.data.getBanners
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

//Get sliders
export const getSliders = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getSliders {
                getSliders {
                    name
                    url
                    slider
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_SLIDER_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_SLIDER_SUCCESS,
                    payload: {
                        sliders: res.data.data.getSliders
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

//Get sections
export const getSections = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getSection {
                getSections {
                  name
                  color
                  description
                  category1 {
                    slug
                    name
                  }
                  category2 {
                    slug
                    name
                  }
                  category1Product {
                    slug
                    name
                    price
                    productImages {
                      url
                    }
                    totalPrice
                    discount
                    discountUnit
                    view
                    category {
                      slug
                    }
                  }
                  category2Product {
                    slug
                    name
                    price
                    productImages {
                      url
                    }
                    totalPrice
                    discount
                    discountUnit
                    view
                    category {
                      slug
                    }
                  }
                  banner
                  bannerUrl
                  dynamicBanner {
                    title
                    bannerType
                    banners {
                      link
                      url
                      text
                    }
                  }
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_SECTIONS_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_SECTIONS_SUCCESS,
                    payload: {
                        sections: res.data.data.getSections
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

//Get brands
export const getBrands = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getBrands {
                getBrands(brandPrams: {limit: 15}) {
                    success
                    brands {
                        id
                        name
                        image
                        slug
                        description
                    }
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_BRANDS_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_BRANDS_SUCCESS,
                    payload: {
                        getBrands: res.data.data.getBrands
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


//Get banners
export const getGallery = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getGallery {
                getGallery {
                    id
                    name
                    url
                    gallery
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_GALLERY_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_GALLERY_SUCCESS,
                    payload: {
                        getGallery: res.data.data.getGallery
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

export const getArticles = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getArticles {
                getArticles {
                  description
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_ARTICLES_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_ARTICLES_SUCCESS,
                    payload: {
                        getArticles: res.data.data.getArticles
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