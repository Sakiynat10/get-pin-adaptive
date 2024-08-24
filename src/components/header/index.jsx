"use client"

import LocationDropdown from "@/components/location-dropdown";
import "./style.scss"

const Header = () => {
    return (
            <header>
                <div className={"container nav-content"}>
                    <a href="/">
                        Getpin
                    </a>
                    <nav>
                        <LocationDropdown/>
                    </nav>
                </div>
            </header>
    );
};

export default Header;
