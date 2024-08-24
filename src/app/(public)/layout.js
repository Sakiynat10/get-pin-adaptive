import { Fragment } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FooterNav from "@/components/footer-nav";


export default function RootLayout({ children }) {
    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
            <FooterNav/>
        </Fragment>
    );
}
