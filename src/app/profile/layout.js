import { Fragment } from "react";
import ProfileMenu from "@/components/profile-menu";
import Footer from "@/components/footer";
import FooterNav from "@/components/footer-nav";



export default function RootLayout({ children }) {
    return (
        <Fragment>
            <ProfileMenu/>
            <main>{children}</main>
            <Footer/>
            <FooterNav/>
        </Fragment>
    );
}
