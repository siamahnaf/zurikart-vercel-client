import axios from "axios";
import { Dispatch } from "@reduxjs/toolkit";
import {
    //Get category
    GET_CATEGORY_FAILED,
    GET_CATEGORY_SUCCESS,
    //Get Sites settings
    GET_SITE_SUCCESS,
    GET_SITE_FAILED
} from "Redux/Constant/Common/common.constant";
import { SERVER_ERROR } from "Redux/Constant/server.constant";

//Gte category
export const getCategory = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getCategories {
                getCategories {
                    id
                    name
                    description
                    slug
                    image
                    subCategory {
                        id
                        name
                        slug
                    }
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_CATEGORY_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_CATEGORY_SUCCESS,
                    payload: {
                        categories: res.data.data.getCategories
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


//Get site settings
export const getSitesSettings = () => async (dispatch: Dispatch) => {
    await axios.post(process.env.NEXT_PUBLIC_API_URL as string, {
        query:
            `query getSiteSettings {
                getSiteSettings {
                    logo
                    icon
                    siteTitle
                    slogan
                    seo {
                        metaTitle
                        metaDescription
                        metaTag
                        siteUrl
                        ogTitle
                        ogDescription
                        ogImage
                    }
                    additionInfo {
                        email
                        phone
                        corporateOffice
                        headOffice
                    }
                    social {
                        facebook
                        instagram
                        youtube
                        twitter
                        linkedIn
                    }
                }
            }`
    })
        .then(res => {
            if (res.data.errors) {
                dispatch({
                    type: GET_SITE_FAILED,
                    payload: {
                        message: res.data.errors[0].message
                    }
                })
            } else {
                dispatch({
                    type: GET_SITE_SUCCESS,
                    payload: {
                        sites: res.data.data.getSiteSettings
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