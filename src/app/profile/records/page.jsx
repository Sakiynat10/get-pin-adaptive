"use client"

import "./style.scss"
import StatisticContent from "@/components/statistic-content";
import Recommendation from "@/components/recomendation";



const RecordsPage = () => {
    return(
        <div className={"records"}>
            <div className={"records-content"}>
                <div className={"main-content"}>
                    <ul className={"main-content-tab"}>
                        <li>
                            Все
                        </li>
                        <li>
                            Непринятые
                        </li>
                        <li>
                            Принятые
                        </li>
                        <li>
                            Отклоненные
                        </li>
                    </ul>
                    <div className={"main-content-context"}>
                    </div>
                </div>
                <div className={"record-cards"}>
                    <ul className={"record-card"}>
                        <li>
                            <span>Тема мастер класса:</span>
                            <div className={"card-title"}>
                                <span>То что вам удобна это — </span><span>ux-дизайн</span></div>
                        </li>
                        <li>
                            <span>Месть</span>
                            <h3>46/90</h3>
                        </li>
                        <li>
                            <span>Дата</span>
                            <h3>Остался 3 дня</h3>
                        </li>
                        <a href={"/"}>
                            <img src="/chevron-right.svg" alt="chevron-right"/>
                        </a>
                    </ul>
                    <ul className={"record-card"}>
                        <li>
                            <span>Тема мастер класса:</span>
                            <div className={"card-title"}>
                                <span>То что вам удобна это — </span><span>ux-дизайн</span></div>
                        </li>
                        <li>
                            <span>Месть</span>
                            <h3>46/90</h3>
                        </li>
                        <li>
                            <span>Дата</span>
                            <h3>Остался 3 дня</h3>
                        </li>
                        <a href={"/"}>
                            <img src="/chevron-right.svg" alt="chevron-right"/>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecordsPage;