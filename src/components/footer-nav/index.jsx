import "./style.scss";
const FooterNav = () => {
    return(
        <nav className={"footer-nav"}>
            <a href="/">
                <img src="/home.svg" alt="home"/>
            </a>
            <a href="/">
                <img src="/search.svg" alt="search"/>
            </a>
            <a href="/" className={"plus"}>
                <img src="/plus.svg" alt="plus"/>
            </a>
            <a href="/">
                <img src="/heart.svg" alt="heart"/>
            </a>
            <a href="/">
                <img src="/user.svg" alt="user"/>
            </a>
        </nav>
    )
}

export default FooterNav;