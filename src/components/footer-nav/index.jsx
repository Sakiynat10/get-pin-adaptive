"use client"
import "./style.scss";
import LoginPage from "@/components/loginpage";
import {Fragment, useState} from "react";
import {register} from "swiper/element";
import RegisterPage from "@/components/registerpage";
import VerificationPage from "@/components/verification";
const FooterNav = () => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    // const handleRegister = () => {
    //     setRegister(!register);
    // }

    const handleLogin = () => {
        if(register){
            setLogin(!login);
        } else{
            setRegister(!register)
        }
    }

    return(
        <Fragment>
            <nav className={"footer-nav"}>
                <a href="/">
                    <img src="/home.svg" alt="home"/>
                </a>
                <a href="/">
                    <img src="/search.svg" alt="search"/>
                </a>
                <button style={{border:"none"}} onClick={handleLogin}  className={"plus"}>
                    <img src="/plus.svg" alt="plus"/>
                </button>
                <a href="/profile/poster">
                    <img src="/heart.svg" alt="heart"/>
                </a>
                <a href="/adding-adv">
                    <img src="/user.svg" alt="user"/>
                </a>
                {register  ? <RegisterPage/>  : <></>}
                {login  ? <LoginPage />  : <></>}
            </nav>
            {/*{login  ? <LoginPage/>  : <></>}*/}
        </Fragment>
    )
}

export default FooterNav;