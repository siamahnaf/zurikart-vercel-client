interface ProductsImages {
    url: string;
}
export interface Products {
    name: string;
    slug: string;
    price: number;
    totalPrice: number;
    view: number;
    productImages: ProductsImages[]
    discount: number;
    discountUnit: string;
}
export interface Sections {
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
    category1Product: Products[];
    category2Product: Products[];
    banner: string;
    bannerUrl: string;
}