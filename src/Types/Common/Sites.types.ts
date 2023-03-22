export interface SitesSettings {
    logo: string;
    icon: string;
    siteTitle: string;
    slogan: string;
    seo: {
        metaTitle: string;
        metaDescription: string;
        metaTag: string[];
        siteUrl: string;
        ogTitle: string;
        ogDescription: string;
        ogImage: string;
    };
    additionInfo: {
        email: string;
        phone: string;
        corporateOffice: string;
        headOffice: string;
    };
    social: {
        facebook: string;
        instagram: string;
        youtube: string;
        twitter: string;
        linkedIn: string;
    }
}