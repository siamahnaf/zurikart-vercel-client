interface ProductImage {
    url: string;
}
interface Attributes {
    variant: string;
    price: number;
    quantity: number;
    image: string;
}
interface Specification {
    title: string;
    value: string;
}
export interface SingleProduct {
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
    specification: Specification[];
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
    totalPrice: number;
    disclaimer: string;
    productUrl: string;
}

export interface ReviewsData {
    user: {
        name: string;
        phone: string;
        avatar: string;
    };
    image: ProductImage[];
    comment: string;
    rate: number;
}