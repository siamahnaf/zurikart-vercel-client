import { combineReducers } from '@reduxjs/toolkit';

//All Reducers
//--Common--//
import {
    getCategoryReducer,
    siteSettingReducer
} from "Redux/Reducer/Common/common.reducer";
//--Home--//
import {
    getBannersReducer,
    getSliderReducer,
    getSectionsReducer,
    getBrandsReducer,
    getGalleryReducer,
} from "Redux/Reducer/Home/home.reducer";
//Products
import {
    getProductsReducer,
    getProductsSearchReducer,
    getSingleProductReducer,
    getReviewsReducer,
    getSellingReducer
} from "Redux/Reducer/Product/product.reducer";
//Server error
import {
    serverErrorReducer
} from "Redux/Reducer/server.reducer";

export const combinedReducer = combineReducers({
    //Common
    getCategory: getCategoryReducer,
    siteSettings: siteSettingReducer,
    //Home
    getBanners: getBannersReducer,
    getSliders: getSliderReducer,
    getSections: getSectionsReducer,
    getGallery: getGalleryReducer,
    getBrands: getBrandsReducer,
    //Products
    getProduct: getProductsReducer,
    getProductSearch: getProductsSearchReducer,
    getSingleProduct: getSingleProductReducer,
    getReviews: getReviewsReducer,
    getSelling: getSellingReducer,
    //Server
    serverError: serverErrorReducer
});