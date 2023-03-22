interface ProductImage {
    url: string;
}
export interface ProductsData {
    id: string;
    name: string;
    category: {
        name: string;
    }
    slug: string;
    productImages: ProductImage[];
    price: number;
    view: number;
    totalPrice: number;
    discount: number;
    discountUnit: string;
}

export interface PageInfos {
    hasNextPage: boolean
    count: number
}

export interface PriceRange {
    highest: number
    lowest: number
}