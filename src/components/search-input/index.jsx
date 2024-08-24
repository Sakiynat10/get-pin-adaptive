"use client"
import Image from "next/image";
import "./style.scss";
import {useState} from "react";

const SearchInput = ({isShrunk}) => {
    const [searchValue, setSearchValue] = useState("");
    const handleValue = (e) => {
        setSearchValue(e.target.value)
    }
    return (
            <form className={isShrunk ? "search-input top-input" : "search-input"}>
                <input onChange={handleValue} type="text" placeholder="Поиск"/>
                <button type="submit" className="search-btn">
                    <Image fill src={"/search.svg"} alt="search"/>
                </button>
            </form>
    );
};

export default SearchInput;
