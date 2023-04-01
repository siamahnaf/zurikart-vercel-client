import { AnyAction } from "@reduxjs/toolkit";
import {
    //Get banners
    GET_BANNERS_FAILED,
    GET_BANNERS_SUCCESS,
    //Get sliders
    GET_SLIDER_FAILED,
    GET_SLIDER_SUCCESS,
    //Get sections
    GET_SECTIONS_FAILED,
    GET_SECTIONS_SUCCESS,
    GET_GALLERY_SUCCESS,
    GET_GALLERY_FAILED,
    //Get brands
    GET_BRANDS_SUCCESS,
    GET_BRANDS_FAILED,
    GET_ARTICLES_SUCCESS,
    GET_ARTICLES_FAILED
} from "Redux/Constant/Home/home.constant";


//Get banners initial state and type
interface Banners {
    name: string;
    url: string;
    banner: string;
}
interface GetBannerInitial {
    message?: string;
    success?: boolean | null;
    bannersData?: Banners[];
}
//--//
const getBannersInitial: GetBannerInitial = { bannersData: [] }
//--//
export const getBannersReducer = (state = getBannersInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_BANNERS_SUCCESS:
            return {
                success: true,
                bannersData: action.payload.banners
            }
        case GET_BANNERS_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}


//Get sliders initial state and type
interface Sliders {
    name: string;
    url: string;
    slider: string;
}
interface GetSlidersInitial {
    message?: string;
    success?: boolean | null;
    slidersData?: Sliders[];
}
//--//
const getSlidersInitial: GetSlidersInitial = { slidersData: [] }
//--//
export const getSliderReducer = (state = getSlidersInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_SLIDER_SUCCESS:
            return {
                success: true,
                slidersData: action.payload.sliders
            }
        case GET_SLIDER_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}

//Get sections initial state and type
export interface Bannessrs {
    link: string;
    url: string;
    text: string;
}
export interface DynamicBanners {
    dynamicBanner: Bannessrs[];
    bannerType: string;
    title: string;
}
interface ProductsImages {
    url: string;
}
interface Products {
    name: string;
    slug: string;
    price: number;
    totalPrice: number;
    view: number;
    productImages: ProductsImages[]
    discount: number;
    discountUnit: string;

}
interface Sections {
    name: string;
    description: string;
    category1: {
        name: string;
        slug: string;
    }
    category2: {
        name: string;
        slug: string;
    }
    category1Product: Products[]
    category2Product: Products[];
    banner: string;
    bannerUrl: string;
    dynamicBanner: DynamicBanners;
}
interface GetSectionsInitial {
    message?: string;
    success?: boolean | null;
    sectionsData?: Sections[];
}
//--//
const getSectionsInitial: GetSectionsInitial = { sectionsData: [] }
//--//
export const getSectionsReducer = (state = getSectionsInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_SECTIONS_SUCCESS:
            return {
                success: true,
                sectionsData: action.payload.sections
            }
        case GET_SECTIONS_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}


//Get sections initial state and type
interface Brands {
    id: string;
    name: string;
    image: string;
    slug: string;
    description: string;
}
interface GetBrandInitial {
    message?: string;
    success?: boolean | null;
    brandsData?: Brands[];
}
//--//
const getBrandInitial: GetBrandInitial = { brandsData: [] }
//--//
export const getBrandsReducer = (state = getBrandInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_BRANDS_SUCCESS:
            return {
                success: action.payload.getBrands.success,
                brandsData: action.payload.getBrands.brands
            }
        case GET_BRANDS_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}


interface Gallery {
    id: string;
    name: string;
    gallery: string;
}

interface GetGalleryInitial {
    success?: boolean | null;
    message?: string;
    galleryData?: Gallery[]
}
//--//
const getGalleryInitial: GetGalleryInitial = {
    galleryData: []
}
//--//
export const getGalleryReducer = (state = getGalleryInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_GALLERY_SUCCESS:
            return {
                success: true,
                galleryData: action.payload.getGallery
            }
        case GET_GALLERY_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}


interface ArticlesDesc {
    description: string;
}
interface GetArticlesInitial {
    success?: boolean | null;
    message?: string;
    articles?: ArticlesDesc
}
//--//
const getArticlesInitial: GetArticlesInitial = {}
//--//
export const getArticlesReducer = (state = getArticlesInitial, action: AnyAction) => {
    switch (action.type) {
        case GET_ARTICLES_SUCCESS:
            return {
                success: true,
                articles: action.payload.getArticles
            }
        case GET_ARTICLES_FAILED:
            return {
                message: action.payload.message,
                success: false
            }
        default:
            return state
    }
}