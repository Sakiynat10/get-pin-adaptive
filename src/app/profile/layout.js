import { Fragment } from "react";
import ProfileMenu from "@/components/profile-menu";
import Footer from "@/components/footer";
import FooterNav from "@/components/footer-nav";
import StatisticContent from "@/components/statistic-content";



export default function RootLayout({ children }) {
    return (
        <div style={{paddingLeft:"10px" , paddingRight:"10px"}}>
            <ProfileMenu/>
            <StatisticContent/>
            <main>{children}</main>
            <Footer/>
            <FooterNav/>
        </div>
    );
}
