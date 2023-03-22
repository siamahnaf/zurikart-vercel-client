import { Fragment, FC, ReactNode } from "react";

//Components
import Header from "./Header";
import Footer from "./Footer";

//Seo Components
import Seo from "Utilis/Seo";

//Types
interface Props {
    title: string;
    children: ReactNode;
}

const Layout: FC<Props> = ({ children, title }) => {
    return (
        <Fragment>
            <Seo title={title} />
            <Header />
            {children}
            <Footer />
        </Fragment>
    );
};
export default Layout;