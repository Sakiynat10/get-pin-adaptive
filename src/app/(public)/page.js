
import "./style.scss";

import {Fragment} from "react";
import SearchInput from "@/components/search-input";
import Categories from "@/components/categories";
import DirectionDropdown from "@/components/direction-dropdown";
import {DatePicker, TimePicker} from "antd";
import TrainCards from "@/components/trainer-cards";
import Article from "@/components/article";





export default function Home() {

  return (
      <Fragment>
        <section id="hero">
            <div className={"container"}>
                <SearchInput/>
            </div>
            <div className={"categories"}>
                <div className={"category-content"}>
                    <Categories/>
                </div>
            </div>
        </section>
        <section id="trainers">
            <ul className={"container trainer-dates"}>
               <li>
                   <DirectionDropdown/>
               </li>
                <li className={"date-pick"}>
                    <DatePicker
                        format="DD MMM YYYY"
                        placeholder="Дата"/>
                </li>
                <li >
                    <TimePicker format="DD:MM" placeholder="Время"/>
                </li>
            </ul>
            <div className={"container"}>
                <TrainCards/>
            </div>
        </section>
        <section id="article">
            <Article/>
        </section>
        <section id="speaker">
            <div className={"container"}>
                <h1>Спикеры на ближайшие даты</h1>
                <div className={"speaker-images"}>
                    <img src="/trainer-1.png" alt="speaker1"/>
                    <img src="/trainer-2.png" alt="speaker2"/>
                    <img src="/trainer-1.png" alt="speaker1"/>
                    <img src="/trainer-2.png" alt="speaker2"/>
                    <img src="/trainer-1.png" alt="speaker1"/>
                    <img src="/trainer-2.png" alt="speaker2"/>
                    <img src="/trainer-1.png" alt="speaker1"/>
                    <img src="/trainer-2.png" alt="speaker2"/>
                </div>
                <p className={"speaker-desc"}>Ищете вдохновение и новые знания? Ознакомьтесь с нашими спикерами и направлениями ближайших мероприятий. </p>
                <p>Выберите понравившегося спикера, запишитесь и получите ценные инсайты от экспертов. Не упустите шанс развиваться и расти вместе с нами!</p>
                <button>Все спикеров на ближайшие даты</button>
            </div>
        </section>
      </Fragment>
  );
}
