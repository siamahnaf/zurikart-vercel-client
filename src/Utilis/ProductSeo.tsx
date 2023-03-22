import { useState } from "react";
import Head from "next/head";

//Types import
import { SitesSettings } from "Types/Common/Sites.types";
import { SingleProduct } from "Types/Product/Product.types";

//Redux
import { useAppSelector } from "Redux/Hook";

const ProductSeo = () => {
    //Selector
    const { sitesData } = useAppSelector(state => state.siteSettings);
    const { products } = useAppSelector(state => state.getSingleProduct);
    //State
    const [sites, setSites] = useState<SitesSettings>(sitesData);
    const [product, setProduct] = useState<SingleProduct>(products);
    return (
        <Head>
            <meta property="og:url" content={sites?.seo?.siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={product?.meta?.title} />
            <meta property="og:description" content={sites?.seo?.ogDescription} />
            <meta property="og:image" content={product?.meta?.image} />
            <title>{`${product?.name} | ${sites?.slogan}`}</title>
            <meta name="description" content={product?.meta?.description} />
            <link rel="shortcut icon" href={sites?.icon} />
            <meta name="keywords" content={product?.meta?.metaTags.join(", ")} />
            <meta name="author" content="Siam Ahnaf" />
            <meta name="authorUrl" content="https://siamahnaf.com" />
            <meta name="authorCompany" content="Codestation-21" />
            <meta name="authorCompanyUrl" content="https://codestation21.com" />
        </Head>
    );
};
export default ProductSeo;