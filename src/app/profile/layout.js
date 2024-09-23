import { Fragment } from "react";
import ProfileMenu from "@/components/profile-menu";
import Footer from "@/components/footer";
import FooterNav from "@/components/footer-nav";
import StatisticContent from "@/components/statistic-content";
import ProfileHeader from "@/components/profile-header";



export default function RootLayout({ children }) {
    return (
        <Fragment>
            <ProfileHeader/>
            <div style={{paddingLeft: "10px", paddingRight: "10px" , paddingTop:"60px"}}>
                <ProfileMenu/>
                <StatisticContent/>
                <main>{children}</main>
                <Footer/>
                <FooterNav/>
            </div>
        </Fragment>
    );
}
