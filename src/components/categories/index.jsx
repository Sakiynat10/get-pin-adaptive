"use client"

import {categories} from "@/data";
import {useState} from "react";

const Categories = () => {
    const [categoryActive , setCategoryActive] = useState("BCE") ;
    const handleActive = (p) => {
       setCategoryActive(p);
    }
    return(
        <>
        {categories.map((category, i) => (
                <div key={i} onClick={() => handleActive(category.p)} className={categoryActive === category.p ? "category active" : "category"}>
                    <h2>{category.p}</h2>
                    {category?.img ? <img src={"/right-double.svg"} alt={"svg"}/> : ""}
                    <h2 className={"category-num"}>{category.num}</h2>
                    <p>{category.title}</p>
                </div>
            ))}
            </>
    )
}

export default Categories;