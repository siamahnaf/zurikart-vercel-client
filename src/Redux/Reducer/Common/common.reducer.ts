import { AnyAction } from "@reduxjs/toolkit";
import {
    //Get categories
    GET_CATEGORY_SUCCESS,
    GET_CATEGORY_FAILED,
    //Get sites settings
    GET_SITE_SUCCESS,
    GET_SITE_FAILED
} from "Redux/Constant/Common/common.constant";

//Get category initial state and type
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
    description: string,
    subCategory: SubCategory[]
}
interface GetCategoryInitial {
    message?: string;
    success?: boolean | null;
    categoriesData?: Categories[];
}
//--//
const getCategoryInitial: GetCategoryInitial = { categoriesData: [] }
//--//
export const getCategoryReducer = (state = getCategoryInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_CATEGORY_SUCCESS:
            return {
                success: true,
                categoriesData: action.payload.categories
            }
        case GET_CATEGORY_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}

//Get site settings initial state and types
interface Sites {
    logo?: string;
    icon?: string;
    siteTitle?: string;
    slogan?: string;
    seo?: {
        metaTitle: string;
        metaDescription: string;
        metaTag: string[];
        siteUrl: string;
        ogTitle: string;
        ogDescription: string;
        ogImage: string;
    };
    additionInfo?: {
        email: string;
        phone: string;
        corporateOffice: string;
        headOffice: string;
    };
    social?: {
        facebook: string;
        instagram: string;
        youtube: string;
        twitter: string;
        linkedIn: string;
    }
}
interface SiteSettingsInitial {
    message?: string;
    success?: boolean | null;
    sitesData?: Sites;
}
//--//
const siteSettingsInitial: SiteSettingsInitial = { sitesData: {} }
//--//
export const siteSettingReducer = (state = siteSettingsInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_SITE_SUCCESS:
            return {
                success: true,
                sitesData: action.payload.sites
            }
        case GET_SITE_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}