import { useState } from "react";
import Head from "next/head";

//Types import
import { SitesSettings } from "Types/Common/Sites.types";

//Redux
import { useAppSelector } from "Redux/Hook";

//Types
interface Props {
    title: string
}

const Seo = ({ title }: Props) => {
    //Selector
    const { sitesData } = useAppSelector(state => state.siteSettings);
    //State
    const [sites, setSites] = useState<SitesSettings>(sitesData);

    return (
        <Head>
            <meta property="og:url" content={sites?.seo?.siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={sites?.seo?.ogTitle} />
            <meta property="og:description" content={sites?.seo?.ogDescription} />
            <meta property="og:image" content={sites?.seo?.ogImage} />
            <title>{`${title} | ${sites?.slogan}`}</title>
            <meta name="description" content={sites?.seo?.metaDescription} />
            <link rel="shortcut icon" href={process.env.NEXT_PUBLIC_IMAGE_PATH + sites?.icon} />
            <meta name="keywords" content={sites?.seo?.metaTag.join(", ")} />
            <meta name="author" content="Siam Ahnaf" />
            <meta name="authorUrl" content="https://siamahnaf.com" />
            <meta name="authorCompany" content="Codestation-21" />
            <meta name="authorCompanyUrl" content="https://codestation21.com" />
        </Head>
    );
};
export default Seo;