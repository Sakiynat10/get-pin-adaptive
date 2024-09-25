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
            <div style={{
                display: "flex",
                justifyContent: "center",
                maxWidth: "500px",
                width: "100%",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                <FooterNav/>
            </div>
        </Fragment>
    );
}
