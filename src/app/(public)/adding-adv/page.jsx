"use client"
import MediaUpload from "@/components/upload-videos";
import React, {useState} from "react";

import "./style.scss"

const AddingAdvertisement = () => {
    const [type, setType] = useState("text");
    const [type1, setType1] = useState("text");
    const [isChecked, setIsChecked] = useState(false);
    const [files, setFiles] = useState([{id:1}]);

    const handleFileChange = (e, _id) => {
        const file = e.target.files[0];
        setFiles(files.map((el)=>{
                if(el.id === _id){
                    el.data = URL.createObjectURL(file);
                    return el;
                }
                return el;
            }
        ))
        setFiles([...files, {id:Date.now()}]);
    };
    console.log(files)

    const handleFocus = () => {
        setType("time");
    };

    const handleFocus1 = () => {
        setType1("date");
    };

    /*checkbox*/
    const handleChangeCheck = () => {
        setIsChecked(!isChecked);
        console.log(isChecked ? 'Switch is OFF' : 'Switch is ON');
    };

    return(
        <div className={"add-profile"}>
            <a className={"bread-crumb-pro container"} href="/">
                <img src="/chevron-left.svg" alt="left"/>
                Добавить объявления
            </a>
            <div className={"adding-profile-content container"}>
                <div className={"adding-main-content"}>
                    <h3>Заполняйте все формы</h3>
                    <div className="bottom-content">
                        <textarea aria-controls={false} className="issue-input" type="text" placeholder="Mavzu"/>
                        <div className="select-group">
                            <select name="" id="" className="select">
                                <option value="1">
                                    Kategoriya
                                </option>
                                <option value="1">Frontend</option>
                                <option value="2">Backend</option>
                                <option value="3">Designer</option>
                                <option value="4">Marketolog</option>
                                <option value="5">Economist</option>
                            </select>
                            <select name="" id="" placeholder="Yonalish">
                                <option value="1">{`Yo'nalish`}</option>
                                <option value="2">Backend</option>
                                <option value="3">Designer</option>
                                <option value="4">Marketolog</option>
                                <option value="5">Economist</option>
                            </select>
                        </div>
                        <MediaUpload/>
                        <div className="data-group">
                            <div className="address-input">
                                <input type="text" placeholder="Адресс"/>
                            </div>
                            <div className="place-input">
                                <input type="text" placeholder="Месть"/>
                            </div>
                            <div className="data-input">
                                <input type={type1} placeholder="Дата" onFocus={handleFocus1}/>
                            </div>
                            <div className="time-input">
                                <input
                                    type={type}
                                    placeholder="Во сколько"
                                    step="900"
                                    onFocus={handleFocus}
                                />
                            </div>
                        </div>
                        <div className="price-input">
                            <h3>Стоимость</h3>
                            <input type="number" className={"price"} placeholder="Narxi (uzs)"/>
                        </div>
                        <h3>Спикеры</h3>
                        <div className="account-group">
                            {files.map((el, i) =>
                                <>
                                    <div key={i} className={"container-img"}>
                                        <div className="photo-card">
                                            <div className={"photoArea"}>
                                                {el.data ? (
                                                    <img src={el?.data} alt="Speaker" className={"photo"}/>
                                                ) : (
                                                    <span className={"placeholder"}>Фото спикера</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className={"add-account-profile"}>
                                        <input type="text" placeholder={"Имя спикера"}/>
                                        <input type="text" placeholder={"Фамилия"}/>
                                        <input type="text" placeholder={"Компания"}/>
                                        <input type="text" placeholder={"Должность"}/>
                                    </div>
                                    <label className={"uploadButton"}>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => handleFileChange(e, el.id)}
                                            className={"hiddenInput"}
                                            id="rasm"/>
                                        <label htmlFor="rasm" onChange={(e) => handleFileChange(e, el.id)}
                                               className={"buttonText"}>Добавить еще</label>
                                    </label>
                                </>
                            )}

                        </div>
                        <div className={"context-group"}>
                            <h1>Контекст</h1>
                            <textarea aria-placeholder={"none"} aria-controls={"none"} placeholder={"Подробнее описание"}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddingAdvertisement;